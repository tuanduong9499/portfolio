/* =========================================================
   PROJECTS
   category: "mobile" | "html5" | "playable"
   logo (optional): small square icon, shown for store games
   video (optional): opens the trailer popup
   play (optional): URL of a web build (e.g. "games/my-game/index.html"
     or an itch.io embed link), opens the game in a popup
   orientation (optional): "landscape" (default) | "portrait"
   ========================================================= */
const PROJECTS = [
  {
    title: "Hangry Rush",
    category: "mobile",
    image: "games/Moblie/HangryRush/background.png",
    logo: "games/Moblie/HangryRush/logo-hangry.png",
    link: { label: "Store listing", url: "https://apps.apple.com/us/app/hangry-rush/id6805801269" },
  },
  {
    title: "Garden Rescue: Tap Out Defense",
    category: "mobile",
    image: "assets/images/garden-rescue.jpg",
    logo: "",
    link: { label: "Store listing", url: "https://play.google.com/store/apps/details?id=com.tito.gardenrescue" },
    video: "assets/videos/garden-rescue.mp4",
  },
  {
    title: "Project 02",
    category: "html5",
    image: "assets/images/project-02.jpg",
    link: { label: "Play game", url: "#" },
  },
  {
    title: "Hearts",
    category: "playable",
    image: "games/Playables/hearts/hearts.png",
    play: "games/Playables/hearts/index.html",
    orientation: "portrait",
  },
  {
    title: "Arrow Escape 3D",
    category: "playable",
    image: "games/Playables/Arrow3D/arrow-escape-3D.png",
    play: "games/Playables/Arrow3D/index.html",
    orientation: "portrait",
  },
  {
    title: "Drop Marbles",
    category: "playable",
    image: "games/Playables/DropMarbles/drop-marbles.png",
    play: "games/Playables/DropMarbles/index.html",
    orientation: "portrait",
  },
  {
    title: "Find The Queens",
    category: "playable",
    image: "games/Playables/FindTheQueens/find-the-queens.png",
    play: "games/Playables/FindTheQueens/index.html",
    orientation: "portrait",
  },
  {
    title: "Food Sort",
    category: "playable",
    image: "games/Playables/FoodSort/food-sort-v2.png",
    play: "games/Playables/FoodSort/index.html",
    orientation: "portrait",
  },
  {
    title: "Jigsaw",
    category: "playable",
    image: "games/Playables/Jigsaw/jig-merge.png",
    play: "games/Playables/Jigsaw/jigsaw01.html",
    orientation: "portrait",
  },
  {
    title: "Loving Colors",
    category: "playable",
    image: "games/Playables/LovingColors/loving-colors.png",
    play: "games/Playables/LovingColors/index.html",
    orientation: "portrait",
  },
  {
    title: "Patches",
    category: "playable",
    image: "games/Playables/Patches/patches.png",
    play: "games/Playables/Patches/index.html",
    orientation: "portrait",
  },
  {
    title: "Solitaire Family",
    category: "playable",
    image: "games/Playables/Solitaire/solitaire-family.png",
    play: "games/Playables/Solitaire/index.html",
    orientation: "portrait",
  },
  {
    title: "Zip",
    category: "playable",
    image: "games/Playables/Zip/zip.png",
    play: "games/Playables/Zip/index.html",
    orientation: "portrait",
  },
];

const CATEGORY_LABELS = {
  mobile: "Mobile Game",
  html5: "HTML5 Game",
  playable: "Playable Ad",
};

const PAGE_SIZE = 12;

const ARROW_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>';
const EXTERNAL_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>';
const NEW_TAB_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" /></svg>';
const PREV_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>';
const NEXT_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>';

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const pad = (n) => String(n).padStart(2, "0");

/* ---------- Image shimmer / fallback ---------- */
const initShimmer = (root = document) => {
  root.querySelectorAll(".shimmer-image > img").forEach((img) => {
    const wrapper = img.parentElement;
    if (wrapper.dataset.ready) return;
    wrapper.dataset.ready = "1";
    const update = () => {
      wrapper.classList.remove("is-loading");
      wrapper.classList.add(img.naturalWidth ? "is-loaded" : "is-error");
    };
    if (img.complete) update();
    else {
      img.addEventListener("load", update, { once: true });
      img.addEventListener("error", update, { once: true });
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  initShimmer();

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const setMenu = (open) => {
    mobileMenu.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
  };

  menuToggle.addEventListener("click", () => setMenu(mobileMenu.hidden));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) setMenu(false);
  });

  /* ---------- Active nav link while scrolling ---------- */
  const navLinks = document.querySelectorAll(".desktop-nav a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Project catalog ---------- */
  const grid = document.getElementById("gameGrid");
  const empty = document.getElementById("catalogEmpty");
  const pagination = document.getElementById("pagination");
  const tabs = document.querySelectorAll(".catalog-tabs button");
  const catalog = document.getElementById("projects");

  let currentFilter = "all";
  let currentPage = 1;

  const countOf = (filter) =>
    filter === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === filter).length;

  document.querySelectorAll("[data-count-of]").forEach((el) => {
    el.textContent = pad(countOf(el.dataset.countOf));
  });

  const renderCard = (project, index) => {
    const hasLogo = Boolean(project.logo);
    const link = project.link || {};
    const isExternal = link.url && link.url !== "#";
    return `
      <article class="game-card${hasLogo ? " has-logo" : ""}" style="animation-delay:${index * 60}ms">
        <span class="shimmer-image game-cover" data-fallback="${escapeHtml(project.title)}">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
        </span>
        <div class="game-card-body">
          ${hasLogo ? `<span class="shimmer-image game-logo" data-fallback=""><img src="${escapeHtml(project.logo)}" alt="" loading="lazy" /></span>` : ""}
          <div>
            <small>${CATEGORY_LABELS[project.category] || ""}</small>
            <h3>${escapeHtml(project.title)}</h3>
          </div>
          <div class="game-actions">
            ${project.play ? `<button type="button" class="play-button" data-play="${escapeHtml(project.play)}" data-title="${escapeHtml(project.title)}" data-orientation="${project.orientation === "portrait" ? "portrait" : "landscape"}">Play demo ${EXTERNAL_ICON}</button>` : ""}
            ${link.url ? `<a href="${escapeHtml(link.url)}"${isExternal ? ' target="_blank" rel="noopener"' : ""}>${escapeHtml(link.label || "View")} ${isExternal ? NEW_TAB_ICON : ARROW_ICON}</a>` : ""}
            ${project.video ? `<button type="button" data-video="${escapeHtml(project.video)}">Trailer</button>` : ""}
          </div>
        </div>
      </article>`;
  };

  const renderPagination = (totalPages) => {
    if (totalPages <= 1) {
      pagination.hidden = true;
      pagination.innerHTML = "";
      return;
    }
    pagination.hidden = false;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
      .map(
        (p) =>
          `<button type="button" data-page="${p}" aria-label="Page ${p}"${p === currentPage ? ' aria-current="page"' : ""}>${pad(p)}</button>`
      )
      .join("");
    pagination.innerHTML = `
      <button type="button" data-page="${currentPage - 1}" aria-label="Previous page"${currentPage === 1 ? " disabled" : ""}>${PREV_ICON}</button>
      <span class="pagination-pages">${pages}</span>
      <span class="pagination-status">${currentPage} / ${totalPages}</span>
      <button type="button" data-page="${currentPage + 1}" aria-label="Next page"${currentPage === totalPages ? " disabled" : ""}>${NEXT_ICON}</button>`;
  };

  const renderCatalog = () => {
    const items = PROJECTS.filter((p) => currentFilter === "all" || p.category === currentFilter);
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    currentPage = Math.min(currentPage, totalPages);
    const pageItems = items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    grid.innerHTML = pageItems.map(renderCard).join("");
    grid.hidden = pageItems.length === 0;
    empty.hidden = pageItems.length > 0;
    initShimmer(grid);
    renderPagination(totalPages);
  };

  const selectFilter = (filter) => {
    currentFilter = filter;
    currentPage = 1;
    tabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.filter === filter)));
    renderCatalog();
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => selectFilter(tab.dataset.filter)));

  pagination.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-page]");
    if (!btn || btn.disabled) return;
    currentPage = Number(btn.dataset.page);
    renderCatalog();
    catalog.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll("[data-select]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      selectFilter(el.dataset.select);
      catalog.scrollIntoView({ behavior: "smooth" });
    })
  );

  renderCatalog();

  /* ---------- Video modal ---------- */
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  const openModal = (src) => {
    modalVideo.src = src;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalVideo.play().catch(() => {});
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-video]");
    if (trigger) openModal(trigger.dataset.video);
  });
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  /* ---------- Game modal ---------- */
  const gameModal = document.getElementById("gameModal");
  const gameFrame = document.getElementById("gameFrame");
  const gameTitle = document.getElementById("gameTitle");
  const gameNewTab = document.getElementById("gameNewTab");
  const gameFullscreen = document.getElementById("gameFullscreen");

  const openGame = ({ play, title, orientation }) => {
    gameTitle.textContent = title || "Game";
    gameFrame.title = title || "Game";
    gameNewTab.href = play;
    gameModal.dataset.orientation = orientation || "landscape";
    gameFrame.src = play;
    gameModal.classList.add("open");
    gameModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    gameFrame.focus();
  };

  const closeGame = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    gameModal.classList.remove("open");
    gameModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // Unloading the iframe stops the game loop and its audio.
    gameFrame.src = "about:blank";
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-play]");
    if (trigger) openGame(trigger.dataset);
  });
  gameModal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeGame));
  gameFullscreen.addEventListener("click", () => {
    const stage = gameFrame.parentElement;
    if (stage.requestFullscreen) stage.requestFullscreen().catch(() => window.open(gameNewTab.href, "_blank"));
    else window.open(gameNewTab.href, "_blank");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && gameModal.classList.contains("open") && !document.fullscreenElement) closeGame();
  });
});
