


let threeDots = document.getElementById('threeDots');
let dropdownList = document.getElementById('dropdownList');

threeDots.addEventListener('click', () => {
  if (dropdownList.style.display === "block") {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "block";
  }
});


