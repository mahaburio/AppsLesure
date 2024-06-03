document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.view');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          button.disabled = true;
          button.textContent = 'Viewed';
          
      });
  });
});


let threeDots = document.getElementById('threeDots');
let dropdownList = document.getElementById('dropdownList');

threeDots.addEventListener('click', () => {
  if (dropdownList.style.display === "block") {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "block";
  }
});


