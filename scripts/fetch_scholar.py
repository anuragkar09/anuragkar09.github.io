#!/usr/bin/env python3
"""Fetch Google Scholar profile data and write to _data/scholar.json."""

import json
import os
import sys
from datetime import datetime, timezone

SCHOLAR_ID = "4jP4srAAAAAJ"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "_data", "scholar.json")


def main():
    try:
        from scholarly import scholarly, ProxyGenerator
    except ImportError:
        print("ERROR: 'scholarly' not installed. Run: pip install scholarly")
        sys.exit(1)

    # Use free proxies to avoid Google blocking in CI
    try:
        pg = ProxyGenerator()
        success = pg.FreeProxies()
        if success:
            scholarly.use_proxy(pg)
            print("Using free proxy for requests.")
        else:
            print("Proxy setup failed, proceeding without proxy.")
    except Exception as e:
        print(f"Proxy setup error ({e}), proceeding without proxy.")

    print(f"Fetching profile for scholar ID: {SCHOLAR_ID}")
    try:
        author = scholarly.search_author_id(SCHOLAR_ID)
        author = scholarly.fill(author, sections=["basics", "indices", "publications"])
    except Exception as e:
        print(f"ERROR fetching author profile: {e}")
        sys.exit(1)

    metrics = {
        "citations": author.get("citedby", 0),
        "h_index": author.get("hindex", 0),
        "i10_index": author.get("i10index", 0),
        "citations_graph": author.get("cites_per_year", {}),
    }

    publications = []
    for pub in author.get("publications", []):
        try:
            filled = scholarly.fill(pub)
        except Exception:
            filled = pub

        bib = filled.get("bib", {})
        info = filled.get("num_citations", pub.get("num_citations", 0))

        publications.append({
            "title": bib.get("title", ""),
            "authors": bib.get("author", ""),
            "venue": bib.get("journal", bib.get("conference", bib.get("booktitle", ""))),
            "year": bib.get("pub_year", ""),
            "citations": info,
            "url": filled.get("pub_url", pub.get("pub_url", "")),
            "scholar_url": f"https://scholar.google.com/citations?view_op=view_citation&hl=en&user={SCHOLAR_ID}&citation_for_view={filled.get('author_pub_id', '')}",
            "abstract": bib.get("abstract", ""),
            "volume": bib.get("volume", ""),
            "number": bib.get("number", ""),
            "pages": bib.get("pages", ""),
            "publisher": bib.get("publisher", ""),
        })

    publications.sort(key=lambda p: int(p.get("year") or 0), reverse=True)

    data = {
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "scholar_id": SCHOLAR_ID,
        "profile_url": f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en",
        "metrics": metrics,
        "publications": publications,
    }

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(publications)} publications to {OUTPUT_PATH}")
    print(f"Metrics: {metrics['citations']} citations, h-index={metrics['h_index']}, i10-index={metrics['i10_index']}")


if __name__ == "__main__":
    main()
