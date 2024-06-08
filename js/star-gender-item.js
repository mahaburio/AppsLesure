let male = document.querySelectorAll(".male");
let female = document.querySelectorAll(".female");
let both = document.querySelectorAll(".both");

let gender = [...male, ...female, ...both];

gender.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      gender.forEach((removeClass) => {
        removeClass.classList.remove("selectGender");
      });

      item.classList.add("selectGender");
    });
  }
});

const stars = document.querySelectorAll(".star");

function fillStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("filled");
      star.innerHTML = "&#9733;";
    } else {
      star.classList.remove("filled");
      star.innerHTML = "&#9734;";
    }
  });
}

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    fillStars(index);
  });
});

let singleItem = document.getElementById("singleItem");
let buddiesItem = document.getElementById("buddiesItem");
let doublesItem = document.getElementById("doublesItem");
let teamsItem = document.getElementById("teamsItem");

let postItem = [singleItem, buddiesItem, doublesItem, teamsItem];

postItem.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      postItem.forEach((removeClass) => {
        removeClass.classList.remove("activeItem");
      });

      item.classList.add("activeItem");
    });
  }
});
