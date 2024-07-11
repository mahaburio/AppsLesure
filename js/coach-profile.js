let aboutBtn = document.getElementById("aboutBtn");
let photosBtn = document.getElementById("photosBtn");
let videosBtn = document.getElementById("videosBtn");

let aboutSec = document.getElementById("aboutSec");
let photosSec = document.getElementById("photosSec");
let videosSec = document.getElementById("videosSec");

let btnItems = [aboutBtn, photosBtn, videosBtn];

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

aboutBtn.addEventListener("click", () => {
  photosSec.style.display = "none";
  videosSec.style.display = "none";

  aboutSec.style.display = "block";
});

photosBtn.addEventListener("click", () => {
  videosSec.style.display = "none";
  aboutSec.style.display = "none";

  photosSec.style.display = "block";
});

videosBtn.addEventListener("click", () => {
  photosSec.style.display = "none";
  aboutSec.style.display = "none";

  videosSec.style.display = "block";
});


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  // Function to open modal and display the clicked image
  function openModal(src) {
    modal.style.display = "block";
    modalImage.src = src;
  }

  // Get all clickable images
  const clickableImages = document.querySelectorAll(".image-clickable");
  clickableImages.forEach((img) => {
    img.addEventListener("click", function () {
      openModal(this.src);
    });
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target === modalImage) {
      modal.style.display = "none";
    }
  });
});







lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
});

let lbCaption = document.querySelectorAll(".lb-caption");

let lbItems = [...lbCaption];

lbCaption.forEach((e) => {
  e.style.display = "none";
});

let cancelBtn = document.querySelectorAll(".cancel-btn");

cancelBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
});


