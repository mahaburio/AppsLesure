const passwordInput = document.getElementById("passwordInput");

const showIcon = document.getElementById("showIcon");

const hideIcon = document.getElementById("hideIcon");

hideIcon.addEventListener("click", () => {
  passwordInput.setAttribute("type", "text");
  showIcon.style.display = "block";
  hideIcon.style.display = "none";
});

showIcon.addEventListener("click", () => {
  passwordInput.setAttribute("type", "password");
  showIcon.style.display = "none";
  hideIcon.style.display = "block";
});

let signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click',()=>{
  window.location.href = "sign-up.html"
})
