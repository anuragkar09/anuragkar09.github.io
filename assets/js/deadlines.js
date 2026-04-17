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

  document.querySelectorAll(".deadline-card").forEach((card) => {
    const deadlineStr = card.dataset.deadline;
    const countdownEl = card.querySelector(".deadline-countdown");
    const deadline = new Date(deadlineStr);
    const diff = deadline - now;

    card.classList.remove("closed", "soon", "urgent");

    if (diff <= 0) {
      card.classList.add("closed");
    } else if (diff <= 3 * 24 * 60 * 60 * 1000) {
      card.classList.add("urgent");
    } else if (diff <= 14 * 24 * 60 * 60 * 1000) {
      card.classList.add("soon");
    }

    countdownEl.textContent = formatCountdown(diff);
  });
}

function wireDeadlineFilters() {
  const search = document.getElementById("deadline-search");
  const filter = document.getElementById("deadline-filter");
  const cards = Array.from(document.querySelectorAll(".deadline-card"));

  function applyFilters() {
    const q = (search?.value || "").trim().toLowerCase();
    const area = filter?.value || "ALL";

    cards.forEach((card) => {
      const title = (card.dataset.title || "").toLowerCase();
      const sub = (card.dataset.sub || "").toUpperCase();

      const matchesSearch = !q || title.includes(q) || sub.includes(q.toUpperCase());
      const matchesArea = area === "ALL" || sub === area;

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
