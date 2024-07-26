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
let friendsBtn = document.getElementById("friendsBtn");

let friendSec = document.getElementById("friendSec");
let videosSec = document.getElementById("videosSec");
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
      videosSec.style.display = "none";
    });
  }

  if (item == photosBtn) {
    item.addEventListener("click", () => {
      photosSec.style.display = "block";
      friendSec.style.display = "none";
      videosSec.style.display = "none";
    });
  }

  if (item == videosBtn) {
    item.addEventListener("click", () => {
      friendSec.style.display = "none";
      photosSec.style.display = "none";
      videosSec.style.display = "block";
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


// todo== BIO-READ-MORE ====?

const bioReadMoreButtons = document.querySelectorAll(".bio-read-more");

bioReadMoreButtons.forEach((button) => {
  const bioMoreText = button.nextElementSibling;
  bioMoreText.style.display = "none";

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    bioMoreText.style.display = "inline";
    button.style.display = "none";
  });

  document.body.addEventListener("click", () => {
    bioMoreText.style.display = "none";
    button.style.display = "inline";
  });
});


// todo== READ-MORE POST/COMMENT SECTION ====?

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  const moreText = button.nextElementSibling;
  moreText.style.display = "none";

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    moreText.style.display = "inline";
    button.style.display = "none";
  });

  document.body.addEventListener("click", () => {
    moreText.style.display = "none";
    button.style.display = "inline";
  });
});

// todo== READ-MORE POST/COMMENT SECTION ====?

const postsContainer = document.getElementById("postsContainer");
const seeMoreBtn = document.getElementById("seeMoreBtn");
let postCount = 0;

function createPost() {
  if (postCount >= 9) {
    alert("Maximum post limit reached!");
  }

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
  <div class="header">
  <img src="../assets/post-person.svg" alt="Profile Picture" />
  <div class="info">
    <h2 class="name">James Smith</h2>
    <p>Game: <span class="game-name">Football</span></p>
    <p class="team-name">Side Side VS Jessica West</p>
    <div class="stars">
      <span class="star">★★★★★</span>
      <span class="breaker">|</span>
      <span class="weeks">2 week ago</span>
    </div>
  </div>
  <span class="date">Nov 09, 2024</span>
</div>
<div class="first-content">
<p>
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s al over
  <span id="readMore" class="read-more">...Read More</span
  ><span class="more-text"
    >It was popularised in the 1960s with the release of
    Letrase. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Facere, eaque.</span
  >
</p>
</div>
    <div class="comment">
    <img src="../assets/post-person.svg" alt="Profile Picture" />
    <h2 class="name">James Smith</h2>
  </div>
  <div class="comment-content">
  <p>
    Lorem Ipsum is simply dummy text of the printing &
    typesetting industry<span
      class="read-more"
      id="readCommentMore"
      >....Read More</span
    >
    <span class="more-text" id="moreCommentText">
      It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially
      unchanged.</span
    >
  </p>
</div>
  `;
  postsContainer.appendChild(postDiv);

  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    const moreText = button.nextElementSibling;
    moreText.style.display = "none";

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      moreText.style.display = "inline";
      button.style.display = "none";
    });

    document.body.addEventListener("click", () => {
      moreText.style.display = "none";
      button.style.display = "inline";
    });
  });

  postCount++;
}

seeMoreBtn.addEventListener("click", () => {
  for (let i = 0; i < 3 && postCount < 9; i++) {
    createPost();
  }
});
