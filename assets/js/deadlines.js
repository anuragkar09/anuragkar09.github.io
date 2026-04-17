function formatCountdown(diffMs) {
  if (diffMs <= 0) return "Deadline passed";

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m left`;
  if (hours > 0) return `${hours}h ${minutes}m left`;
  return `${minutes}m left`;
}

function updateDeadlineCards() {
  const now = new Date();
  const list = document.querySelector(".deadlines-list");
  const cards = Array.from(document.querySelectorAll(".deadline-card"));

  cards.forEach((card) => {
    const deadline = new Date(card.dataset.deadline);
    const diff = deadline - now;
    const countdownEl = card.querySelector(".deadline-countdown");

    card.classList.remove("soon", "urgent");

    if (diff <= 0) {
      card.style.display = "none";
      return;
    }

    if (diff <= 3 * 24 * 60 * 60 * 1000) {
      card.classList.add("urgent");
    } else if (diff <= 14 * 24 * 60 * 60 * 1000) {
      card.classList.add("soon");
    }

    countdownEl.textContent = formatCountdown(diff);

    const dateEl = card.querySelector(".deadline-date");
    if (dateEl && !dateEl.dataset.formatted) {
      dateEl.textContent = deadline.toLocaleDateString(undefined, {
        weekday: "short", month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit", timeZoneName: "short"
      });
      dateEl.dataset.formatted = "1";
    }
  });

  const visible = cards.filter((c) => c.style.display !== "none");
  visible.sort((a, b) => {
    return new Date(a.dataset.deadline) - new Date(b.dataset.deadline);
  });
  visible.forEach((card) => list.appendChild(card));
}

function wireDeadlineFilters() {
  const search = document.getElementById("deadline-search");
  const filter = document.getElementById("deadline-filter");
  const cards = Array.from(document.querySelectorAll(".deadline-card"));

  function applyFilters() {
    const q = (search?.value || "").trim().toLowerCase();
    const area = filter?.value || "ALL";
    const now = new Date();

    cards.forEach((card) => {
      const deadline = new Date(card.dataset.deadline);
      if (deadline - now <= 0) {
        card.style.display = "none";
        return;
      }

      const title = (card.dataset.title || "").toLowerCase();
      const sub = (card.dataset.sub || "").toUpperCase();

      const matchesSearch = !q || title.includes(q) || sub.toLowerCase().includes(q);
      const matchesArea = area === "ALL" || sub.includes(area);

      card.style.display = matchesSearch && matchesArea ? "" : "none";
    });
  }

  if (search) search.addEventListener("input", applyFilters);
  if (filter) filter.addEventListener("change", applyFilters);
  applyFilters();
}

document.addEventListener("DOMContentLoaded", () => {
  updateDeadlineCards();
  wireDeadlineFilters();
  setInterval(updateDeadlineCards, 60000);
});
