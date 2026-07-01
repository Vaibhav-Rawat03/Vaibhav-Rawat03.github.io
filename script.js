// -------- Year in footer --------
document.getElementById('year').textContent = new Date().getFullYear();

// -------- Theme toggle (persists in localStorage) --------
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const initial = stored || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initial);

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// -------- Reveal on scroll --------
(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.section').forEach((el) => io.observe(el));
})();
