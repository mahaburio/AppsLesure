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














