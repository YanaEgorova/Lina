const btn = document.querySelector('.mobile-menu_btn');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.mobile-menu_overlay');



btn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

let toggle = true;

function toggleMenu() {
  window.addEventListener('keydown', toggleMenu)
  if (toggle) {
    btn.classList.add('mobile-menu_btn--active');
    menu.classList.add('mobile-menu--active');
    overlay.classList.add('mobile-menu_overlay--active');
    toggle = false;
  } else {
    btn.classList.remove('mobile-menu_btn--active');
    menu.classList.remove('mobile-menu--active');
    const tm = setTimeout(() => {
      overlay.classList.remove('mobile-menu_overlay--active');
      clearTimeout(tm)
    }, 800)

    toggle = true;
  }
}