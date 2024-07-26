
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













const galleryButton = document.getElementById("galleryButton");

galleryButton.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image, video"; // Accept images and videos
    input.multiple = true; // Allow multiple file selection
    
    input.onchange = (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            // Do something with each file (e.g., display, process)
            console.log(file); 
        });
    };

    input.click(); 
});
