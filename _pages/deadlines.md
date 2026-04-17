---
permalink: /deadlines/
title: "Deadlines"
author_profile: true
---

<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<style>
.deadlines-wrap {
  max-width: 860px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  background: #0f1729;
  border-radius: 12px;
  padding: 1.75rem 1.5rem 1.5rem;
  margin: -1rem 0 0 0;
  border: 1px solid #1e2d3d;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.deadlines-wrap *,
.deadlines-wrap *::before,
.deadlines-wrap *::after {
  font-family: inherit;
}

.deadlines-titlebar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #1e2d3d;
}

.deadlines-dots {
  display: flex;
  gap: 6px;
}

.deadlines-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.deadlines-dots span:nth-child(1) { background: #f85149; }
.deadlines-dots span:nth-child(2) { background: #d29922; }
.deadlines-dots span:nth-child(3) { background: #7ee787; }

.deadlines-titlebar-text {
  color: #484f58;
  font-size: 0.78rem;
  margin-left: 0.5rem;
  letter-spacing: 0.02em;
}

.deadlines-intro {
  margin-bottom: 1.25rem;
  color: #6e7681;
  font-size: 0.82rem;
  line-height: 1.6;
}

.deadlines-intro::before {
  content: "// ";
  color: #484f58;
}

.deadlines-intro a {
  color: #58a6ff;
  text-decoration: none;
  border-bottom: 1px dashed #58a6ff40;
}

.deadlines-intro a:hover {
  color: #79c0ff;
  border-bottom-color: #79c0ff;
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
  border: 1px solid #2a3a4a;
  border-radius: 6px;
  min-width: 180px;
  background: #131d2b;
  color: #c9d1d9;
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s;
}

.deadlines-toolbar input::placeholder {
  color: #484f58;
}

.deadlines-toolbar input:focus,
.deadlines-toolbar select:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 2px #58a6ff20;
}

.deadlines-toolbar select option {
  background: #131d2b;
  color: #c9d1d9;
}

.deadlines-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.deadline-card {
  border: 1px solid #1e2d3d;
  border-left: 4px solid #7ee787;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background: #131d2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: background 0.15s, border-color 0.15s;
}

.deadline-card:hover {
  background: #172030;
  border-color: #2a3a4a;
}

.deadline-card.soon {
  border-left-color: #d29922;
}

.deadline-card.urgent {
  border-left-color: #f85149;
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
  color: #58a6ff;
  text-decoration: none;
}

.deadline-title a:hover {
  color: #79c0ff;
  text-decoration: underline;
}

.deadline-title a::before {
  content: "$ ";
  color: #7ee787;
  font-weight: 700;
}

.deadline-meta {
  margin: 0.1rem 0;
  font-size: 0.78rem;
  color: #6e7681;
}

.deadline-note {
  margin: 0.1rem 0;
  font-size: 0.76rem;
  color: #d2a8ff;
  font-style: italic;
}

.deadline-note::before {
  content: "/* ";
  color: #484f58;
  font-style: normal;
}

.deadline-note::after {
  content: " */";
  color: #484f58;
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
  background: #f8514920;
  color: #ffa198;
}

.deadline-sub[data-sub="SYS"] {
  background: #58a6ff20;
  color: #79c0ff;
}

.deadline-sub[data-sub="ML"] {
  background: #d2a8ff20;
  color: #d2a8ff;
}

.deadline-right {
  text-align: right;
  flex-shrink: 0;
  white-space: nowrap;
}

.deadline-date {
  font-size: 0.76rem;
  color: #6e7681;
  display: block;
  margin-bottom: 0.2rem;
}

.deadline-countdown {
  font-size: 0.9rem;
  font-weight: 700;
  color: #7ee787;
}

.deadline-card.soon .deadline-countdown {
  color: #d29922;
}

.deadline-card.urgent .deadline-countdown {
  color: #f85149;
}

.deadline-cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: #7ee787;
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (max-width: 640px) {
  .deadlines-wrap {
    padding: 1rem;
    border-radius: 8px;
  }
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
  <div class="deadlines-titlebar">
    <div class="deadlines-dots"><span></span><span></span><span></span></div>
    <span class="deadlines-titlebar-text">deadlines.sh — ~/research</span>
  </div>

  <p class="deadlines-intro">
    Conference deadline tracker for architecture, systems, and ML venues.
    Source: <a href="https://casys-kaist.github.io/" target="_blank" rel="noopener noreferrer">KAIST CASYS</a>.
    Past deadlines are automatically hidden.<span class="deadline-cursor"></span>
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
</div>

<script src="{{ '/assets/js/deadlines.js' | relative_url }}" defer></script>
