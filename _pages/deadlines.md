---
permalink: /deadlines/
title: "Deadlines"
author_profile: true
---

<style>
.deadlines-wrap {
  max-width: 800px;
}

.deadlines-intro {
  margin-bottom: 1.5rem;
  color: #555;
}

.deadlines-toolbar {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.25rem;
}

.deadlines-toolbar input,
.deadlines-toolbar select {
  padding: 0.55rem 0.75rem;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  min-width: 180px;
}

.deadlines-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.deadline-card {
  border: 1px solid #e5e5e5;
  border-left: 5px solid #2d7ff9;
  border-radius: 10px;
  padding: 0.9rem 1rem;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.deadline-card.soon {
  border-left-color: #d97706;
}

.deadline-card.urgent {
  border-left-color: #dc2626;
}

.deadline-left {
  flex: 1;
  min-width: 0;
}

.deadline-title {
  margin: 0 0 0.2rem 0;
  font-size: 1.1rem;
  line-height: 1.3;
}

.deadline-title a {
  text-decoration: none;
}

.deadline-meta,
.deadline-note {
  margin: 0.15rem 0;
  font-size: 0.9rem;
  color: #555;
}

.deadline-sub {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: #eef4ff;
  color: #2457c5;
  margin-left: 0.4rem;
  vertical-align: middle;
}

.deadline-right {
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.deadline-date {
  font-size: 0.88rem;
  color: #333;
  display: block;
  margin-bottom: 0.25rem;
}

.deadline-countdown {
  font-size: 1rem;
  font-weight: 700;
  color: #2d7ff9;
}

.deadline-card.soon .deadline-countdown {
  color: #d97706;
}

.deadline-card.urgent .deadline-countdown {
  color: #dc2626;
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

<div class="deadlines-wrap">
  <p class="deadlines-intro">
    Conference deadline tracker for architecture, systems, and ML venues.
    Data sourced from <a href="https://casys-kaist.github.io/" target="_blank" rel="noopener noreferrer">KAIST CASYS</a>.
    Past deadlines are automatically hidden.
  </p>

  <div class="deadlines-toolbar">
    <input id="deadline-search" type="text" placeholder="Search conference or venue">
    <select id="deadline-filter">
      <option value="ALL">All areas</option>
      <option value="ARCH">ARCH</option>
      <option value="SYS">SYS</option>
      <option value="ML">ML</option>
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
          <span class="deadline-sub">{{ c.sub }}</span>
        </h2>
        <p class="deadline-meta">{{ c.place }} &middot; {{ c.date }}</p>
        {% if c.note %}
        <p class="deadline-note">{{ c.note }}</p>
        {% endif %}
      </div>
      <div class="deadline-right">
        <span class="deadline-date">{{ c.deadline }}</span>
        <span class="deadline-countdown">Loading...</span>
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/deadlines.js' | relative_url }}" defer></script>
