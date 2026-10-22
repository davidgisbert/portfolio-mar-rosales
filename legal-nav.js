const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menú';
  window.siteLanguage?.apply();
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Cerrar' : 'Menú';
  window.siteLanguage?.apply();
  document.body.style.overflow = open ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
