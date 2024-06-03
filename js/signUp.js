
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const showIcon = document.getElementById("showIcon");
const showIconTwo = document.getElementById("showIconTwo");
const hideIcon = document.getElementById("hideIcon");
const hideIconTwo = document.getElementById("hideIconTwo");

hideIcon.addEventListener("click", () => {
  passwordInput.setAttribute("type", "text");
  showIcon.style.display = "block";
  hideIcon.style.display = "none";
});

hideIconTwo.addEventListener("click", () => {
  confirmPasswordInput.setAttribute("type", "text");
  showIconTwo.style.display = "block";
  hideIconTwo.style.display = "none";
});


showIcon.addEventListener("click", () => {
  passwordInput.setAttribute("type", "password");
  showIcon.style.display = "none";
  hideIcon.style.display = "block";
});

showIconTwo.addEventListener("click", () => {
  confirmPasswordInput.setAttribute("type", "password");
  showIconTwo.style.display = "none";
  hideIconTwo.style.display = "block";
});

let signInBtn = document.getElementById('signInBtn');

signInBtn.addEventListener('click',()=>{
  window.location.href = "sign-in.html"
})
