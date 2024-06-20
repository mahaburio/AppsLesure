const darkMode = document.getElementById('darkMode');

darkMode.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-theme')
})






// // Function to apply the theme based on the stored preference
// function applyTheme(theme) {
//   document.body.classList.toggle('dark-mode', theme === 'dark');
// }

// // Function to toggle the theme and store the preference
// function toggleTheme() {
//   const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
//   localStorage.setItem('theme', currentTheme);
//   applyTheme(currentTheme);
// }

// // Apply the stored theme on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 'light';
//   applyTheme(savedTheme);

//   document.getElementById('darkMode').addEventListener('click', toggleTheme);
// });




function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function mytheme() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}