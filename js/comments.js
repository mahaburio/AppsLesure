let commentInput = document.getElementById("commentInput");
let hideBox = document.getElementById("hideBox");
let sendIcon = document.getElementById("sendIcon");

commentInput.addEventListener("click", () => {
  hideBox.style.display = "flex";
  
});

commentInput.addEventListener("keypress", () => {
  hideBox.style.display = "flex";
});

document.addEventListener("click", (event) => {
  if (!commentInput.contains(event.target) && !hideBox.contains(event.target)) {
    hideBox.style.display = "none";
  }
});

const sendButton = document.getElementById("sendButton");
const commentsContainer = document.getElementById("commentsContainer");

sendButton.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    createCommentBox(commentText);
    commentInput.value = "";
  }
});

function createCommentBox(commentText) {
  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  commentBox.innerHTML = `
  <div class="left">
      <div class="img">
          <img src="../assets/mattyJohnson.png" alt="" />
      </div>
  </div>
  <div class="right">
      <div class="box">
          <div class="name">Annonymous</div>
          <div class="details">
              ${commentText}
          </div>
      </div>

      <div class="reply-section">
          <div class="time">now</div>
          <div class="like">like</div>
          <div class="reply">reply</div>
      </div>
  </div>
`;
  commentsContainer.appendChild(commentBox);
}






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
