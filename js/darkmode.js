function darkmode() {
  const wasDarkmode = localStorage.getItem("darkmode") === "true";
  localStorage.setItem("darkmode", !wasDarkmode);
  const element = document.body;
  element.classList.toggle("dark-mode", !wasDarkmode);

  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  if (wasDarkmode) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

function mytheme() {
  const isDarkmode = localStorage.getItem("darkmode") === "true";
  document.body.classList.toggle("dark-mode", isDarkmode);

  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  if (isDarkmode) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}
