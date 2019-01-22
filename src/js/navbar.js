const menuOpen = document.getElementById('navi-toggle'); // Checkbox that handle collapsed menu
const menuItems = document.querySelectorAll('.navbar__link');
const navLogo = document.querySelector('.navbar__logo-img');

const sections = document.querySelectorAll('section');
const navHeight = document.getElementById('navbar').offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;

const closeMenu = () => (menuOpen.checked = false);

// Close menu on clicking item
const HandleClickItem = () =>
  menuItems.forEach(el => el.addEventListener('click', closeMenu));

// Close menu on clicking logo
const HandleClickLogo = () =>
  navLogo.addEventListener('click', () => {
    if (menuOpen.checked) closeMenu();
  });

//  Set active menu item on scroll
const activeMenuItemOnScroll = () => {
  const currentPos = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - navHeight;
    const bottom = top + section.offsetHeight;
    const href = `#${section.getAttribute('id')}`;

    if (currentPos >= top && currentPos <= bottom) {
      menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        itemHref === href
          ? item.classList.add('active')
          : item.classList.remove('active');
      });
    } else if (currentPos < headerHeight - navHeight) {
      menuItems.forEach(item => item.classList.remove('active'));
    }
  });
};

// Highlight menu item related to url hash
// Less consuming than activeMenuItemOnScroll
// but doesn't update active item on scroll
function activeMenuItemByUrlHash() {
  const hash = window.location.hash;

  menuItems.forEach(el => {
    const elHref = el.getAttribute('href');
    elHref === hash
      ? el.classList.add('active')
      : el.classList.remove('active');
  });
}

const handleMenuItemsHover = () => {
  menuItems.forEach(link => {
    link.addEventListener('mouseenter', function() {
      menuItems.forEach(item => item.classList.remove('active'));
    });
  });

  menuItems.forEach(link => {
    link.addEventListener('mouseleave', activeMenuItemOnScroll);
  });
};

const lessLoadActiveMenu = false;

const handleNav = () => {
  window.onscroll = lessLoadActiveMenu
    ? activeMenuItemByUrlHash
    : activeMenuItemOnScroll;
  HandleClickItem();
  HandleClickLogo();
  handleMenuItemsHover();
};

export default handleNav;
