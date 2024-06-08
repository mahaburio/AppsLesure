var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
 
});

var personSwiper = new Swiper(".followerPerson", {
  slidesPerView: 4,
  spaceBetween: 5,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },

});

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




// let photosBtn = document.getElementById('photosBtn');
// let videosBtn = document.getElementById('videosBtn');
// let friendsBtn = document.getElementById('friendsBtn');

// let listItem = [photosBtn, videosBtn, friendsBtn]

// listItem.forEach((item) => {
//   if (item) {
//     item.addEventListener("click", () => {
//       // Remove the class from all buttons
//       listItem.forEach((removeClass) => {
//         removeClass.classList.remove("myStyle");
//       });

//       // Add the class to the clicked button
//       item.classList.add("myStyle");
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const subList = document.getElementById("subList");

  dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      subList.style.display = subList.style.display === "block" ? "none" : "block";
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













const readMoreSpan = document.getElementById("readMore");
const moreTextSpan = document.querySelector(".more-text");

readMoreSpan.addEventListener("click", () => {
    moreTextSpan.style.display = "inline";
    readMoreSpan.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (!moreTextSpan.contains(event.target) && !readMoreSpan.contains(event.target)) {
        moreTextSpan.style.display = "none"; 
        readMoreSpan.style.display = "inline";
    }
});

const readCommentMore = document.getElementById("readCommentMore");
const moreCommentText = document.querySelector("#moreCommentText");

readCommentMore.addEventListener("click", () => {
    moreCommentText.style.display = "inline";
    readCommentMore.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (!moreCommentText.contains(event.target) && !readCommentMore.contains(event.target)) {
        moreCommentText.style.display = "none"; 
        readCommentMore.style.display = "inline";
    }
});






lightbox.option({
  'resizeDuration': 100,
  'wrapAround': true,
  "imageFadeDuration": 300
})