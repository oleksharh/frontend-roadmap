function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.textContent = currentTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';

toggleButton.addEventListener('click', () => {
  let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';

  localStorage.setItem('theme', newTheme);
});
