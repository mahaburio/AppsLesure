let joinBtn = document.getElementById("joinBtn");
let partnerBtn = document.getElementById("partnerBtn");
let wantToJoin = document.getElementById("wantToJoin");
let partnerMe = document.getElementById("partnerMe");

let btnItems = [joinBtn, partnerBtn];

btnItems.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      btnItems.forEach((removeClass) => {
        removeClass.classList.remove("activeBtn");
      });

      item.classList.add("activeBtn");
    });
  }
});

joinBtn.addEventListener("click", () => {
  partnerMe.style.display = "none";

  wantToJoin.style.display = "block";
});

partnerBtn.addEventListener("click", () => {
  wantToJoin.style.display = "none";
  partnerMe.style.display = "block";
});

//  *** ==== START AGE END AGE FUNTIONALITY ===== ***

const startAges = document.querySelectorAll(".startAge");
const endAges = document.querySelectorAll(".endAge");

function createOptions(start, end) {
  let options = "";
  for (let i = start; i <= end; i++) {
    options += `<option value="${i}">${i}</option>`;
  }
  return options;
}

startAges.forEach(function (select) {
  select.innerHTML = createOptions(10, 80);
});

function changeEndAge(index) {
  const selectedValue = parseInt(startAges[index].value);
  if (!isNaN(selectedValue)) {
    endAges[index].innerHTML = createOptions(selectedValue + 1, 80);
  }
}

startAges.forEach(function (select, index) {
  select.addEventListener("change", function () {
    changeEndAge(index);
  });
});

startAges.forEach(function (select, index) {
  changeEndAge(index);
});

//  *** ==== SINGLE AGE FUNTIONALITY ===== ***

const singleAge = document.querySelectorAll(".singleAge");
let options = "";

for (let i = 10; i <= 80; i++) {
  options += `<option value="${i}">${i}</option>`;
}

singleAge.forEach(function (select) {
  select.innerHTML = options;
});

//  *** ==== PLAYERS NEED FUNTIONALITY ===== ***

const playersNeed = document.querySelectorAll(".playersNeed");
let players = "";

for (let i = 1; i <= 50; i++) {
  players += `<option value="${i}">${i}</option>`;
}

playersNeed.forEach(function (select) {
  select.innerHTML = players;
});
