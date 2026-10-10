const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const mobile = window.matchMedia('(max-width: 900px)');
function closeMenu(returnFocus = false) { if (!button || !nav) return; button.setAttribute('aria-expanded', 'false'); nav.hidden = mobile.matches; if (returnFocus) button.focus(); }
function sync() { if (!button || !nav) return; button.hidden = !mobile.matches; closeMenu(); }
button?.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.hidden = !open; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { document.querySelectorAll('.nav-dropdown[open]').forEach(el => el.open = false); if (mobile.matches && button?.getAttribute('aria-expanded') === 'true') closeMenu(true); } });
nav?.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) closeMenu(); });
mobile.addEventListener('change', sync);
sync();
