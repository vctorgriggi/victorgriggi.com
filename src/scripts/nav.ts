import { NAV_LINKS } from '@/data/consts';

export function initNav(): void {
  const nav = document.getElementById('main-nav');
  const maxScroll = 1000;
  let rafId: number | null = null;

  function updateNav() {
    if (!nav) return;

    if (window.scrollY > 0) {
      nav.classList.add('scrolling');

      if (window.innerWidth >= 768) {
        const progress = Math.min(window.scrollY / maxScroll, 1);
        const eased = 1 - Math.pow(1 - progress, 4);

        const itemWidth = 176;
        const minWidth = itemWidth * NAV_LINKS.length;
        const maxWidth = window.innerWidth * 0.8;
        const width = maxWidth - (maxWidth - minWidth) * eased;

        nav.style.width = `${width}px`;
      }
    } else {
      nav.classList.remove('scrolling');
      nav.style.width = '80%';
    }

    rafId = null;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!rafId) rafId = requestAnimationFrame(updateNav);
    },
    { passive: true },
  );
}

export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href')?.slice(1);
      const target = id && document.getElementById(id);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

export function initActiveSection(): void {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((l) => l.classList.remove('active'));
        const id = entry.target.id;
        document.querySelector(`nav a[href="#${id}"]`)?.classList.add('active');
      });
    },
    { threshold: 0.6 },
  );

  sections.forEach((section) => observer.observe(section));
}
