/*===== DRAG and DROP =====*/
const resultList = document.getElementById("resultList");

new Sortable(resultList, {
  animation: 350,
});

let buddiesYes = document.querySelectorAll(".buddiesYes");

let buddiesNo = document.querySelectorAll(".buddiesNo");

let buddiesReslut = [...buddiesYes, ...buddiesNo];

buddiesReslut.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      buddiesReslut.forEach((removeClass) => {
        removeClass.classList.remove("radioSelect");
      });

      item.classList.add("radioSelect");
    });
  }
});

let placementsYes = document.querySelectorAll(".placementsYes");
let placementsNo = document.querySelectorAll(".placementsNo");

let placementsResult = [...placementsYes, ...placementsNo];

placementsResult.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      placementsResult.forEach((removeClass) => {
        removeClass.classList.remove("radioSelect");
      });

      item.classList.add("radioSelect");
    });
  }
});

let yesInput = document.getElementById("yes");
let placementsYesInput = document.getElementById("placementsYes");
let noInput = document.getElementById("no");
let placementsNoInput = document.getElementById("placementsNo");
let hideResult = document.getElementById("hideResult");
let hideResultType = document.getElementById("hideResultType");

noInput.addEventListener("click", () => {
  hideResult.style.display = "none";
});

yesInput.addEventListener("click", () => {
  hideResult.style.display = "block";
});

placementsNoInput.addEventListener("click", () => {
  hideResultType.style.display = "none";
});

placementsYesInput.addEventListener("click", () => {
  hideResultType.style.display = "block";
});