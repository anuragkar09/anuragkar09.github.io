---
permalink: /deadlines/
title: "Deadlines"
author_profile: true
---

<style>
.deadlines-wrap {
  max-width: 1100px;
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

.deadlines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
}

.deadline-card {
  border: 1px solid #e5e5e5;
  border-left: 5px solid #2d7ff9;
  border-radius: 12px;
  padding: 1rem 1rem 0.9rem;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}

.deadline-card.closed {
  opacity: 0.72;
  border-left-color: #999;
}

.deadline-card.soon {
  border-left-color: #d97706;
}

.deadline-card.urgent {
  border-left-color: #dc2626;
}

.deadline-title {
  margin: 0 0 0.35rem 0;
  font-size: 1.15rem;
  line-height: 1.25;
}

.deadline-title a {
  text-decoration: none;
}

.deadline-meta,
.deadline-note,
.deadline-timezone {
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: #555;
}

.deadline-sub {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: #eef4ff;
  color: #2457c5;
  margin-bottom: 0.75rem;
}

.deadline-countdown {
  margin-top: 0.9rem;
  font-size: 1.05rem;
  font-weight: 700;
}

.deadline-date {
  font-weight: 600;
  color: #222;
}

@media (max-width: 640px) {
  .deadlines-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="deadlines-wrap">
  <p class="deadlines-intro">
    A personal conference deadline tracker in the style of ai-deadlines, focused on areas I care about.
  </p>

  <div class="deadlines-toolbar">
    <input id="deadline-search" type="text" placeholder="Search conference or venue">
    <select id="deadline-filter">
      <option value="ALL">All areas</option>
      <option value="ARCH">ARCH</option>
      <option value="SYS">SYS</option>
      <option value="ML">ML</option>
      <option value="SEC">SEC</option>
    </select>
  </div>

  <div class="deadlines-grid">
    {% assign deadlines = site.data.deadlines | sort: "deadline" %}
    {% for c in deadlines %}
    <article
      class="deadline-card"
      data-title="{{ c.title | escape }}"
      data-sub="{{ c.sub | escape }}"
      data-deadline="{{ c.deadline }}">
      <div class="deadline-sub">{{ c.sub }}</div>
      <h2 class="deadline-title">
        <a href="{{ c.link }}" target="_blank" rel="noopener noreferrer">
          {{ c.title }} {{ c.year }}
        </a>
      </h2>
      <p class="deadline-meta">{{ c.place }} &middot; {{ c.date }}</p>
      <p class="deadline-meta">
        Deadline: <span class="deadline-date">{{ c.deadline }}</span>
      </p>
      <p class="deadline-timezone">Timezone: {{ c.timezone }}</p>
      {% if c.note %}
      <p class="deadline-note">{{ c.note }}</p>
      {% endif %}
      <p class="deadline-countdown">Loading countdown...</p>
    </article>
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/deadlines.js' | relative_url }}" defer></script>
