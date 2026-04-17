(function () {
  var STORAGE_KEY = "site-theme";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return "dark";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    var btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.textContent = theme === "dark" ? "\u263E" : "\u2600";
      btn.setAttribute("aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0a1220" : "#eee8d5");
    }
  }

  apply(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    apply(getPreferred());

    var btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || "dark";
        apply(current === "dark" ? "light" : "dark");
      });
    }

    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    var links = document.querySelectorAll(".greedy-nav .visible-links a");
    links.forEach(function (a) {
      var href = a.getAttribute("href").replace(/\/+$/, "") || "/";
      if (href === path) {
        a.classList.add("active-tab");
      }
    });
  });
})();
