let messageBox = document.getElementById("messageBox");
      let voiceSearch = document.getElementById("voiceSearch");
      let sendIcon = document.getElementById("sendIcon");

      messageBox.addEventListener("input", () => {
        if (messageBox.value.trim() === "") {
          voiceSearch.style.display = "block";
          sendIcon.style.display = "none";
        } else {
          voiceSearch.style.display = "none";
          sendIcon.style.display = "flex";
        }
      });


      
      var swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      let emojiBars = document.querySelectorAll(".emojiBar");
      let emojiBarBoxes = document.querySelectorAll(".emojiBarBox");

      emojiBars.forEach((emojiBar, index) => {
        emojiBar.addEventListener("click", (event) => {
          event.stopPropagation();

     
          emojiBarBoxes.forEach((box) => {
            box.style.display = "none";
          });

          emojiBarBoxes[index].style.display = "flex";
        });
      });

      document.addEventListener("click", () => {
        emojiBarBoxes.forEach((box) => {
          box.style.display = "none";
        });
      });

      emojiBarBoxes.forEach((emojiBarBox) => {
        emojiBarBox.addEventListener("click", (event) => {
          event.stopPropagation();
        });
      });