/* ============================================================
   STROMWERK – Main JavaScript
   ============================================================ */

'use strict';

// ── Navbar scroll ─────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile menu ───────────────────────────────
const hamburger   = document.querySelector('.hamburger');
const mobileMenu  = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}

// ── Scroll-reveal (fade-up) ───────────────────
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  fadeEls.forEach(el => revealObs.observe(el));
}

// ── Counter animation ─────────────────────────
function runCounter(el) {
  const target   = parseInt(el.dataset.counter, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 2000;
  const start    = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3); // cubic ease-out
    el.textContent = Math.floor(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const counterEls = document.querySelectorAll('[data-counter]');
if (counterEls.length) {
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  counterEls.forEach(el => counterObs.observe(el));
}

// ── Active nav link ───────────────────────────
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ── Contact form (static demo) ────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Wird gesendet…';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      const ok = document.getElementById('formSuccess');
      if (ok) ok.style.display = 'block';
    }, 900);
  });
}
