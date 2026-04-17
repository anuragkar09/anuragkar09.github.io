---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<style>
.cv-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  color: var(--link) !important;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none !important;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.cv-btn:hover {
  background: var(--bg-hover);
  border-color: var(--link);
  color: var(--link-hover) !important;
}

.cv-btn::before {
  content: "$ ";
  color: var(--accent);
  font-weight: 700;
}

.cv-updated {
  font-size: 0.72rem;
  color: var(--text-dim);
  font-style: italic;
}

.cv-viewer {
  display: none;
  margin-top: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.cv-viewer.open {
  display: block;
}

.cv-viewer iframe {
  border: none;
  width: 100%;
  height: 1000px;
  background: var(--bg);
}
</style>

<div class="cv-actions">
  <a class="cv-btn" href="{{ '/files/anurag_resume.pdf' | relative_url }}" download>Download PDF</a>
  <button class="cv-btn" id="cv-toggle" onclick="toggleCV()">View PDF</button>
  <span class="cv-updated">Updated Aug '25</span>
</div>

<div class="cv-viewer" id="cv-viewer">
  <iframe id="cv-iframe" data-src="{{ '/files/anurag_resume.pdf' | relative_url }}#view=fit"></iframe>
</div>

<script>
function toggleCV() {
  var viewer = document.getElementById("cv-viewer");
  var btn = document.getElementById("cv-toggle");
  var iframe = document.getElementById("cv-iframe");
  var isOpen = viewer.classList.toggle("open");
  btn.textContent = isOpen ? "Hide PDF" : "View PDF";
  if (isOpen && !iframe.dataset.loaded) {
    iframe.src = iframe.dataset.src;
    iframe.dataset.loaded = "1";
  }
}
</script>
