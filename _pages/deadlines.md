---
permalink: /deadlines/
title: "Deadlines"
author_profile: true
---

<style>
.deadlines-intro {
  margin-bottom: 1.25rem;
  color: var(--text-muted) !important;
  font-size: 0.82rem;
  line-height: 1.6;
}

.deadlines-intro::before {
  content: "// ";
  color: var(--text-dim);
}

.deadlines-intro a {
  color: var(--link) !important;
  text-decoration: none !important;
  border-bottom: 1px dashed var(--border) !important;
}

.deadlines-intro a:hover {
  color: var(--link-hover) !important;
  border-bottom-color: var(--link-hover) !important;
}

.deadlines-toolbar {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.25rem;
}

.deadlines-toolbar input,
.deadlines-toolbar select {
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--border) !important;
  border-radius: 6px;
  min-width: 180px;
  background: var(--bg) !important;
  color: var(--text) !important;
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s;
}

.deadlines-toolbar input::placeholder {
  color: var(--text-dim) !important;
}

.deadlines-toolbar input:focus,
.deadlines-toolbar select:focus {
  border-color: var(--link) !important;
  box-shadow: 0 0 0 2px rgba(88,166,255,0.15) !important;
}

.deadlines-toolbar select option {
  background: var(--bg);
  color: var(--text);
}

.deadlines-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.deadline-card {
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background: var(--bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: background 0.15s, border-color 0.15s;
}

.deadline-card:hover {
  background: var(--bg-hover);
  border-color: var(--border-hover);
}

.deadline-card.soon {
  border-left-color: var(--warning);
}

.deadline-card.urgent {
  border-left-color: var(--danger);
}

.deadline-left {
  flex: 1;
  min-width: 0;
}

.deadline-title {
  margin: 0 0 0.15rem 0;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
}

.deadline-title a {
  color: var(--link) !important;
  text-decoration: none !important;
  border-bottom: none !important;
}

.deadline-title a:hover {
  color: var(--link-hover) !important;
  text-decoration: underline !important;
}

.deadline-title a::before {
  content: "$ ";
  color: var(--accent);
  font-weight: 700;
}

.deadline-meta {
  margin: 0.1rem 0;
  font-size: 0.78rem;
  color: var(--text-muted) !important;
}

.deadline-note {
  margin: 0.1rem 0;
  font-size: 0.76rem;
  color: var(--purple) !important;
  font-style: italic;
}

.deadline-note::before {
  content: "/* ";
  color: var(--text-dim);
  font-style: normal;
}

.deadline-note::after {
  content: " */";
  color: var(--text-dim);
  font-style: normal;
}

.deadline-sub {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.12rem 0.4rem;
  border-radius: 4px;
  margin-left: 0.4rem;
  vertical-align: middle;
}

.deadline-sub[data-sub="ARCH"] {
  background: rgba(248,81,73,0.12);
  color: var(--danger);
}

.deadline-sub[data-sub="SYS"] {
  background: rgba(88,166,255,0.12);
  color: var(--link);
}

.deadline-sub[data-sub="ML"] {
  background: rgba(210,168,255,0.12);
  color: var(--purple);
}

.deadline-right {
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.deadline-date {
  font-size: 0.76rem;
  color: var(--text-muted) !important;
  display: block;
  margin-bottom: 0.2rem;
}

.deadline-countdown {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent);
}

.deadline-card.soon .deadline-countdown {
  color: var(--warning);
}

.deadline-card.urgent .deadline-countdown {
  color: var(--danger);
}

@media (max-width: 640px) {
  .deadline-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .deadline-right {
    text-align: left;
  }
}
</style>

<p class="deadlines-intro">
  Conference deadline tracker for architecture, systems, and ML venues.
  Source: <a href="https://casys-kaist.github.io/" target="_blank" rel="noopener noreferrer">KAIST CASYS</a>.
  Past deadlines are automatically hidden.
</p>

<div class="deadlines-toolbar">
  <input id="deadline-search" type="text" placeholder="grep conference...">
  <select id="deadline-filter">
    <option value="ALL">--all</option>
    <option value="ARCH">--arch</option>
    <option value="SYS">--sys</option>
    <option value="ML">--ml</option>
  </select>
</div>

<div class="deadlines-list">
  {% assign deadlines = site.data.deadlines | sort: "deadline" %}
  {% for c in deadlines %}
  <article
    class="deadline-card"
    data-title="{{ c.title | escape }}"
    data-sub="{{ c.sub | escape }}"
    data-deadline="{{ c.deadline }}">
    <div class="deadline-left">
      <h2 class="deadline-title">
        <a href="{{ c.link }}" target="_blank" rel="noopener noreferrer">
          {{ c.title }} {{ c.year }}
        </a>
        <span class="deadline-sub" data-sub="{{ c.sub | escape }}">{{ c.sub }}</span>
      </h2>
      <p class="deadline-meta">{{ c.place }} &middot; {{ c.date }}</p>
      {% if c.note %}
      <p class="deadline-note">{{ c.note }}</p>
      {% endif %}
    </div>
    <div class="deadline-right">
      <span class="deadline-date">{{ c.deadline }}</span>
      <span class="deadline-countdown">loading...</span>
    </div>
  </article>
  {% endfor %}
</div>

<script src="{{ '/assets/js/deadlines.js' | relative_url }}" defer></script>
