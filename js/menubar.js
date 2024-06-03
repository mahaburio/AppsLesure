let homeBar = document.getElementById("homeBar");
let chatBar = document.getElementById("chatBar");
let messageBoardBar = document.getElementById("messageBoardBar");
let notificationBar = document.getElementById("notificationBar");
let menuBar = document.getElementById("menuBar");

let barItem = [homeBar, chatBar, messageBoardBar, notificationBar, menuBar];

barItem.forEach((barMenu) => {
  if (barMenu) {
    barMenu.addEventListener("click", () => {
      barItem.forEach((removeClass) => {
        removeClass.classList.remove("activeBar");
      });

      barMenu.classList.add("activeBar");
    });
  }
});

// todo== FROM INDEX.HTML PAGE ====?

menuBar.addEventListener('click',()=>{
  window.location.href = "./html/profile-menu.html"
})

notificationBar.addEventListener('click',()=>{
  window.location.href = "./html/notification.html"
})

chatBar.addEventListener('click',()=>{
  window.location.href = "./html/chats.html"
})

messageBoardBar.addEventListener('click',()=>{
  window.location.href = "./html/messageBoard.html"
})

// todo== FROM OTHERS PAGE ====?

menuBar.addEventListener('click',()=>{
  window.location.href = "../html/profile-menu.html"
})

notificationBar.addEventListener('click',()=>{
  window.location.href = "../html/notification.html"
})

chatBar.addEventListener('click',()=>{
  window.location.href = "../html/chats.html"
})

messageBoardBar.addEventListener('click',()=>{
  window.location.href = "../html/messageBoard.html"
})
