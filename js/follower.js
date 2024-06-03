// ! FOLLOWERS.HTML PAGE =====>
// todo== FOLLOWER SECTION SLIDER ====?

const followersAnchor = document.getElementById("followersAnchor");
const followingAnchor = document.getElementById("followingAnchor");
const followers = document.getElementById("followers");
const following = document.getElementById("following");

let ancItem = [followersAnchor, followingAnchor];

followersAnchor.addEventListener("click", () => {
  followers.style.display = "block";
  following.style.display = "none";
});

followingAnchor.addEventListener("click", () => {
  following.style.display = "block";
  followers.style.display = "none";
});

ancItem.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      ancItem.forEach((removeClass) => {
        removeClass.classList.remove("active-follow");
      });

      item.classList.add("active-follow");
    });
  }
});
