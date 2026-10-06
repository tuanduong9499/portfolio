document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav__link");

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Header background on scroll ---------- */
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 50);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const closeMenu = () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  /* ---------- Active nav link while scrolling ---------- */
  const sections = document.querySelectorAll("main section[id]");
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
  sections.forEach((section) => sectionObserver.observe(section));

  /* ---------- Reveal on scroll + skill bars + counters ---------- */
  const animateCounter = (el) => {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target) + (progress === 1 ? "+" : "");
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("visible");
        el.querySelectorAll(".bar__fill").forEach((bar) => {
          bar.style.width = `${bar.dataset.level}%`;
        });
        el.querySelectorAll("[data-count]").forEach(animateCounter);
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Typing effect ---------- */
  const typingEl = document.getElementById("typing");
  const roles = ["Game Developer", "Unity Developer", "Gameplay Programmer", "C# Enthusiast"];
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  const type = () => {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typingEl.textContent = current.slice(0, charIndex);

    let delay = deleting ? 50 : 100;
    if (!deleting && charIndex === current.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }
    setTimeout(type, delay);
  };
  setTimeout(type, 2000);

  /* ---------- Image fallback when file is missing ---------- */
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    const replace = () => {
      const fallback = document.createElement("div");
      fallback.className = "img-fallback";
      fallback.textContent = img.dataset.fallback;
      img.replaceWith(fallback);
    };
    if (img.complete && img.naturalWidth === 0) replace();
    else img.addEventListener("error", replace, { once: true });
  });

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

  document.querySelectorAll("[data-video]").forEach((btn) =>
    btn.addEventListener("click", () => openModal(btn.dataset.video))
  );
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});
