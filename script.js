const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
});

mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('js-ready');
}

const filmCarousel = document.getElementById('film-carousel');
const filmSlides = [...filmCarousel.querySelectorAll('.film-card')];
const previousPoster = document.querySelector('.carousel-prev');
const nextPoster = document.querySelector('.carousel-next');
const playbackButton = document.querySelector('.carousel-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hoverCapable = window.matchMedia('(hover: hover)');
let currentPoster = 0;
let carouselInView = false;
let playbackPaused = false;
let playbackTimer;

function visiblePosters() {
  if (window.matchMedia('(max-width: 800px)').matches) return 2;
  if (window.matchMedia('(max-width: 1100px)').matches) return 3;
  return 4;
}

function moveToPoster(index) {
  const lastStart = Math.max(0, filmSlides.length - visiblePosters());
  currentPoster = index < 0 ? lastStart : index > lastStart ? 0 : index;
  const step = filmSlides[1].offsetLeft - filmSlides[0].offsetLeft;
  filmCarousel.scrollTo({
    left: currentPoster * step,
    behavior: reducedMotion.matches ? 'auto' : 'smooth'
  });
}

function stopPlayback() {
  window.clearInterval(playbackTimer);
  playbackTimer = undefined;
}

function startPlayback() {
  stopPlayback();
  if (!carouselInView || playbackPaused || reducedMotion.matches || document.hidden) return;
  playbackTimer = window.setInterval(() => {
    if ((hoverCapable.matches && filmCarousel.matches(':hover')) || filmCarousel.contains(document.activeElement)) return;
    moveToPoster(currentPoster + 1);
  }, 4500);
}

previousPoster.addEventListener('click', () => { moveToPoster(currentPoster - 1); startPlayback(); });
nextPoster.addEventListener('click', () => { moveToPoster(currentPoster + 1); startPlayback(); });
playbackButton.addEventListener('click', () => {
  playbackPaused = !playbackPaused;
  playbackButton.setAttribute('aria-label', playbackPaused ? 'Play automatic slideshow' : 'Pause automatic slideshow');
  playbackButton.firstElementChild.textContent = playbackPaused ? '▶' : 'Ⅱ';
  startPlayback();
});
filmCarousel.addEventListener('pointerdown', startPlayback);
filmCarousel.addEventListener('scroll', () => {
  const step = filmSlides[1].offsetLeft - filmSlides[0].offsetLeft;
  currentPoster = Math.min(filmSlides.length - visiblePosters(), Math.max(0, Math.round(filmCarousel.scrollLeft / step)));
}, { passive: true });
window.addEventListener('resize', () => moveToPoster(Math.min(currentPoster, filmSlides.length - visiblePosters())));
document.addEventListener('visibilitychange', startPlayback);
reducedMotion.addEventListener('change', () => {
  playbackButton.hidden = reducedMotion.matches;
  startPlayback();
});
playbackButton.hidden = reducedMotion.matches;
if ('IntersectionObserver' in window) {
  const carouselObserver = new IntersectionObserver(entries => {
    carouselInView = entries[0].isIntersecting;
    startPlayback();
  }, { threshold: .2 });
  carouselObserver.observe(filmCarousel);
} else {
  carouselInView = true;
  startPlayback();
}
