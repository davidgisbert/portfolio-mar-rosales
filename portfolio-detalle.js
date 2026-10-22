document.getElementById('year').textContent = new Date().getFullYear();

const categoryId = new URLSearchParams(window.location.search).get('tipo');
const category = window.portfolioCategories?.[categoryId];
const slider = document.getElementById('portfolio-slider');

if (!category || !category.images.length) {
  document.getElementById('category-title').textContent = 'Categoría no encontrada';
  document.getElementById('category-description').textContent = 'Vuelve al portfolio para elegir un tipo de producto.';
  slider.hidden = true;
} else {
  const track = document.getElementById('slide-track');
  const previous = document.getElementById('slide-prev');
  const next = document.getElementById('slide-next');
  const toggle = document.getElementById('slide-toggle');
  const lightbox = document.getElementById('portfolio-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cloneCount = 4;
  const imageCount = category.images.length;
  let current = 0;
  let paused = reducedMotion;
  let timer = null;
  let scrollTimer = null;
  let animationTimer = null;
  let isAnimating = false;

  document.title = `${category.title} — Portfolio mr.studio`;
  document.getElementById('category-title').textContent = category.title;
  document.getElementById('category-description').textContent = category.description;
  slider.setAttribute('aria-label', `Galería de ${category.title}`);

  function appendPhoto(photo, index, clone = false) {
    const figure = document.createElement('figure');
    figure.className = 'portfolio-slide';
    figure.setAttribute('role', 'listitem');
    if (clone) figure.setAttribute('aria-hidden', 'true');
    const frame = document.createElement('div');
    frame.className = 'portfolio-slide-image';
    const openButton = document.createElement('button');
    openButton.className = 'portfolio-slide-open';
    openButton.type = 'button';
    openButton.setAttribute('aria-label', `Ampliar foto: ${photo.alt}`);
    const image = document.createElement('img');
    image.src = photo.src;
    image.alt = photo.alt;
    image.dataset.sourceAlt = photo.alt;
    image.loading = clone || index < 4 ? 'eager' : 'lazy';
    image.decoding = 'async';
    const caption = document.createElement('figcaption');
    caption.textContent = photo.caption;
    openButton.append(image);
    frame.append(openButton);
    figure.append(frame, caption);
    track.append(figure);
  }

  category.images.slice(-cloneCount).forEach((photo, index) => appendPhoto(photo, imageCount - cloneCount + index, true));
  category.images.forEach((photo, index) => appendPhoto(photo, index));
  category.images.slice(0, cloneCount).forEach((photo, index) => appendPhoto(photo, index, true));

  function visibleCount() {
    return window.innerWidth <= 600 ? 2 : window.innerWidth <= 1100 ? 3 : 4;
  }

  function slideLeft(physicalIndex) {
    return track.children[physicalIndex].offsetLeft - track.children[0].offsetLeft;
  }

  function snapTo(physicalIndex) {
    track.style.scrollBehavior = 'auto';
    track.style.scrollSnapType = 'none';
    track.scrollLeft = slideLeft(physicalIndex);
    window.requestAnimationFrame(() => {
      track.style.scrollBehavior = '';
      track.style.scrollSnapType = '';
    });
  }

  function updateControls() {
    toggle.textContent = window.siteLanguage?.t(paused ? 'Reproducir' : 'Pausar') || (paused ? 'Reproducir' : 'Pausar');
    toggle.setAttribute('aria-pressed', String(paused));
  }

  function stopAuto() {
    window.clearInterval(timer);
    timer = null;
  }

  function startAuto() {
    if (paused || document.hidden || lightbox.open || imageCount <= visibleCount()) return;
    timer = window.setInterval(() => goTo(current + 1), 2800);
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  function goTo(index, manual = false) {
    window.clearTimeout(animationTimer);
    if (isAnimating) snapTo(cloneCount + current);
    current = (index + imageCount) % imageCount;
    const wrappingForward = index === imageCount;
    const wrappingBackward = index === -1;
    const physicalIndex = wrappingForward ? cloneCount + imageCount : wrappingBackward ? cloneCount - 1 : cloneCount + current;
    isAnimating = !reducedMotion;
    track.scrollTo({ left: slideLeft(physicalIndex), behavior: reducedMotion ? 'auto' : 'smooth' });
    animationTimer = window.setTimeout(() => {
      if (wrappingForward || wrappingBackward) snapTo(cloneCount + current);
      isAnimating = false;
    }, reducedMotion ? 0 : 650);
    updateControls();
    if (manual) restartAuto();
  }

  previous.addEventListener('click', () => goTo(current - 1, true));
  next.addEventListener('click', () => goTo(current + 1, true));
  track.addEventListener('click', event => {
    const button = event.target.closest('.portfolio-slide-open');
    if (!button) return;
    const image = button.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.dataset.sourceAlt = image.dataset.sourceAlt;
    lightboxImage.alt = window.siteLanguage?.t(image.dataset.sourceAlt) || image.dataset.sourceAlt;
    lightboxCaption.textContent = button.closest('.portfolio-slide').querySelector('figcaption').textContent;
    stopAuto();
    lightbox.showModal();
  });
  document.getElementById('lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', restartAuto);
  toggle.addEventListener('click', () => {
    paused = !paused;
    updateControls();
    restartAuto();
  });
  slider.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(current + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  track.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      if (isAnimating) return;
      const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
      const physicalIndex = Math.round(track.scrollLeft / step);
      current = (physicalIndex - cloneCount + imageCount) % imageCount;
      if (physicalIndex < cloneCount || physicalIndex >= cloneCount + imageCount) snapTo(cloneCount + current);
      updateControls();
    }, 120);
  }, { passive: true });
  track.addEventListener('pointerdown', () => {
    stopAuto();
    window.clearTimeout(animationTimer);
    isAnimating = false;
  });
  track.addEventListener('pointerup', restartAuto);
  track.addEventListener('pointercancel', restartAuto);
  window.addEventListener('resize', () => {
    window.clearTimeout(animationTimer);
    isAnimating = false;
    snapTo(cloneCount + current);
    updateControls();
    restartAuto();
  });
  document.addEventListener('visibilitychange', restartAuto);

  snapTo(cloneCount);
  updateControls();
  startAuto();
}

document.addEventListener('site-language-change', () => {
  if (category) {
    document.title = `${window.siteLanguage.t(category.title)} — Portfolio mr.studio`;
    const toggle = document.getElementById('slide-toggle');
    toggle.textContent = window.siteLanguage.t(toggle.getAttribute('aria-pressed') === 'true' ? 'Reproducir' : 'Pausar');
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage.dataset.sourceAlt) lightboxImage.alt = window.siteLanguage.t(lightboxImage.dataset.sourceAlt);
  }
});
