document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const stickyHost = document.getElementById("store-sticky");
  if (!stickyHost) return;

  const apple = stickyHost.dataset.apple || "";
  const play = stickyHost.dataset.play || "";
  const label = stickyHost.dataset.label || "Scarica l’app gratis";
  if (!apple && !play) return;

  const actions = [];
  if (apple) {
    actions.push(
      `<a href="${apple}" target="_blank" rel="noopener noreferrer" data-store="apple"> App Store</a>`
    );
  }
  if (play) {
    actions.push(
      `<a href="${play}" target="_blank" rel="noopener noreferrer" data-store="play">▶ Google Play</a>`
    );
  }

  stickyHost.innerHTML = `
    <div class="store-sticky-copy">${label}</div>
    <div class="store-sticky-actions">${actions.join("")}</div>
  `;
  stickyHost.classList.add("is-visible");
  stickyHost.removeAttribute("hidden");
  document.body.classList.add("has-store-sticky");
});
