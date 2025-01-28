const toggleButtons = document.querySelectorAll('.theme-toggle');

toggleButtons.forEach(button => {
  button.textContent = currentTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
});

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    toggleButtons.forEach(btn => {
      btn.textContent = newTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
    });

    localStorage.setItem('theme', newTheme);
  });
});


addEventListener('resize', () => {
  if (window.innerWidth < 1000) {
    document.getElementById('mobile-nav').classList.add('active');
    document.getElementById('main-nav').classList.add('hidden');
  } else {
    document.getElementById('mobile-nav').classList.remove('active');
    document.getElementById('main-nav').classList.remove('hidden');
  }
});

addEventListener('load', () => {
  if (window.innerWidth < 1000) {
    document.getElementById('mobile-nav').classList.add('active');
    document.getElementById('main-nav').classList.add('hidden');
  } else {
    document.getElementById('mobile-nav').classList.remove('active');
    document.getElementById('main-nav').classList.remove('hidden');
  }
});


const menuToggler = document.getElementById('menu-toggler');

menuToggler.addEventListener('click', () => {
  const mobileNav = document.getElementById('mobile-nav-links');

  if (menuToggler.textContent === 'MENU') {
    mobileNav.classList.add('active');
    menuToggler.textContent = 'CLOSE';
  } else {
    mobileNav.classList.remove('active');
    menuToggler.textContent = 'MENU';
  }
});


function scrollToSection(sectionId) {
  const mobileNav = document.getElementById('mobile-nav-links');

  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

  mobileNav.classList.remove('active');
  menuToggler.textContent = 'MENU';
}