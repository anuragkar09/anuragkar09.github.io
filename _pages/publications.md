---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

<style>
.scholar-metrics {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.scholar-metric {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.7rem 1rem;
  min-width: 110px;
  text-align: center;
  transition: border-color 0.2s;
}

.scholar-metric:hover {
  border-color: var(--border-hover);
}

.scholar-metric .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
  line-height: 1.2;
}

.scholar-metric .metric-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.scholar-source {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}

.scholar-source::before {
  content: "// ";
}

.scholar-source a {
  color: var(--link) !important;
  text-decoration: none !important;
  border-bottom: 1px dashed var(--border) !important;
}

.scholar-source a:hover {
  color: var(--link-hover) !important;
}

.pub-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.pub-card {
  border: 1px solid var(--border);
  border-left: 4px solid var(--link);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background: var(--bg);
  transition: background 0.15s, border-color 0.15s;
}

.pub-card:hover {
  background: var(--bg-hover);
  border-color: var(--border-hover);
}

.pub-title {
  margin: 0 0 0.2rem 0;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.4;
}

.pub-title a {
  color: var(--link) !important;
  text-decoration: none !important;
  border-bottom: none !important;
}

.pub-title a:hover {
  color: var(--link-hover) !important;
  text-decoration: underline !important;
}

.pub-title a::before {
  content: "$ ";
  color: var(--accent);
  font-weight: 700;
}

.pub-authors {
  margin: 0.1rem 0;
  font-size: 0.78rem;
  color: var(--text-muted) !important;
  line-height: 1.5;
}

.pub-authors .me {
  color: var(--accent) !important;
  font-weight: 600;
}

.pub-venue {
  margin: 0.1rem 0;
  font-size: 0.76rem;
  color: var(--purple) !important;
  font-style: italic;
}

.pub-footer {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.3rem;
}

.pub-year {
  font-size: 0.72rem;
  color: var(--text-dim);
  padding: 0.1rem 0.35rem;
  border: 1px solid var(--border);
  border-radius: 3px;
}

.pub-citations {
  font-size: 0.72rem;
  color: var(--warning);
  font-weight: 600;
}

.pub-citations::before {
  content: "★ ";
}

.section-heading {
  font-size: 1rem;
  color: var(--accent);
  margin: 1.5rem 0 0.75rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.4rem;
}

.section-heading::before {
  content: "## ";
  color: var(--text-dim);
}

.presentation-item {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0.5rem 0;
  padding-left: 0.8rem;
  border-left: 2px solid var(--border);
  line-height: 1.6;
}

.presentation-item .me {
  color: var(--accent) !important;
  font-weight: 600;
}
</style>

<div class="scholar-metrics">
  <div class="scholar-metric">
    <span class="metric-value">{{ site.data.scholar.metrics.citations }}</span>
    <span class="metric-label">Citations</span>
  </div>
  <div class="scholar-metric">
    <span class="metric-value">{{ site.data.scholar.metrics.h_index }}</span>
    <span class="metric-label">h-index</span>
  </div>
  <div class="scholar-metric">
    <span class="metric-value">{{ site.data.scholar.metrics.i10_index }}</span>
    <span class="metric-label">i10-index</span>
  </div>
</div>

<p class="scholar-source">
  Auto-updated from <a href="{{ site.data.scholar.profile_url }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
  Last sync: <span id="scholar-updated">{{ site.data.scholar.last_updated }}</span>
</p>

<h2 class="section-heading">Publications</h2>

<div class="pub-list">
{% for pub in site.data.scholar.publications %}
  <div class="pub-card">
    <h3 class="pub-title">
      <a href="{{ pub.scholar_url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
    </h3>
    <p class="pub-authors">
      {% assign authors = pub.authors | split: ", " %}
      {% for a in authors %}{% if a contains "Kar" or a contains "A Kar" %}<span class="me">{{ a }}</span>{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}
    </p>
    {% if pub.venue != "" %}
    <p class="pub-venue">
      {{ pub.venue }}{% if pub.volume != "" %} {{ pub.volume }}{% endif %}{% if pub.number != "" %}({{ pub.number }}){% endif %}{% if pub.pages != "" %}, {{ pub.pages }}{% endif %}
    </p>
    {% endif %}
    <div class="pub-footer">
      {% if pub.year != "" %}
      <span class="pub-year">{{ pub.year }}</span>
      {% endif %}
      {% if pub.citations > 0 %}
      <span class="pub-citations">{{ pub.citations }} citations</span>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

<h2 class="section-heading">Presentations</h2>

<div class="presentation-item">
  <span class="me">A. Kar</span>, S. Dey, S. Santra, S. Ray and P.K. Guha, "RGO/Ni2O3 composite as a multifunctional material for efficient water quality monitoring," EMRS Spring Meet, 2017 (oral presentation only, no paper)
</div>

<script>
(function() {
  var el = document.getElementById("scholar-updated");
  if (el) {
    var d = new Date(el.textContent.trim());
    if (!isNaN(d)) {
      el.textContent = d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    }
  }
})();
</script>
