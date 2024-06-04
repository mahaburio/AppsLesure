// todo== UPCOMING GAME SECTION SLIDER ====?

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// todo== FOLLOWER SECTION SLIDER ====?

var personSwiper = new Swiper(".followerPerson", {
  slidesPerView: 4,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// todo== COVER PHOTO CLICK THEN FILE SELECT====?

document
  .getElementById("coverPhotoButton")
  .addEventListener("click", function () {
    document.getElementById("coverPhotoInput").click();
  });

document
  .getElementById("coverPhotoInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("coverPhoto").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

// todo== PROFLILE IMGAE CLICK THEN FILE SELECT====?

const profileImageInput = document.getElementById("profile-image-upload");
const profileImage = document.getElementById("profile-image");

profileImageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    profileImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

// todo== ADDING / REMOVING MYSTYLE CLASS ====?

let photosBtn = document.getElementById("photosBtn");
let videosBtn = document.getElementById("videosBtn");
let friendSec = document.getElementById("friendSec");
let photosSec = document.getElementById("photosSec");

let listItem = [photosBtn, videosBtn, friendsBtn];

listItem.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      listItem.forEach((removeClass) => {
        removeClass.classList.remove("myStyle");
      });

      item.classList.add("myStyle");
    });
  }
  if (item == friendsBtn) {
    item.addEventListener("click", () => {
      friendSec.style.display = "block";
      photosSec.style.display = "none";
    });
  }

  if (item == photosBtn) {
    item.addEventListener("click", () => {
      friendSec.style.display = "none";
      photosSec.style.display = "block";
    });
  }
});

// todo== ADDING / REMOVING ACTIVE CLASS ====?

let editProBtn = document.getElementById("editProBtn");
let shareProBtn = document.getElementById("shareProBtn");

let btnItem = [editProBtn, shareProBtn];

btnItem.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      btnItem.forEach((removeClass) => {
        removeClass.classList.remove("active");
      });

      item.classList.add("active");
    });
  }
});

// todo== ADDING / REMOVING PLUSSTYLE CLASS ====?

let plusFollowing = document.getElementById("plusFollowing");
let invite = document.getElementById("invite");
let contact = document.getElementById("contact");

let plusBtn = [plusFollowing, invite, contact];

plusBtn.forEach((myBtn) => {
  if (myBtn) {
    myBtn.addEventListener("click", () => {
      plusBtn.forEach((removeClass) => {
        removeClass.classList.remove("plusStyle");
      });

      myBtn.classList.add("plusStyle");
    });
  }
});

// todo== MORE RECENT/ MORE RELEVENT ====?

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const subList = document.getElementById("subList");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    subList.style.display =
      subList.style.display === "block" ? "none" : "block";
  });

  subList.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.childNodes[0].nodeValue = event.target.innerText + " ";
    subList.style.display = "none";
  });

  document.addEventListener("click", function () {
    subList.style.display = "none";
  });
});

// todo== READ-MORE POST/COMMENT SECTION ====?

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  const moreText = button.nextElementSibling;
  moreText.style.display = "none";

  button.addEventListener("click", () => {
    moreText.style.display = "inline";
    button.style.display = "none";
  });
});


// todo== READ-MORE POST/COMMENT SECTION ====?


const seeMoreButton = document.getElementById("seeMoreBtn");
const hiddenPosts = Array.from(document.querySelectorAll(".hidden-post"));

let postsToShow = 3;

seeMoreButton.addEventListener("click", () => {
  for (let i = 0; i < postsToShow; i++) {
    if (hiddenPosts.length > 0) {
      hiddenPosts.shift().classList.remove("hidden-post");
    } else {
      seeMoreButton.style.display = "block";
      break;
    }
  }
});




