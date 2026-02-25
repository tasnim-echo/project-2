const wearTab = document.getElementById("tab-wear");
const likeTab = document.getElementById("tab-like");

const wearContent = document.getElementById("wear-content");
const likeContent = document.getElementById("like-content");

wearTab.addEventListener("click", () => {
  wearTab.classList.add("active-tab");
  likeTab.classList.remove("active-tab");

  wearContent.classList.add("active-content");
  likeContent.classList.remove("active-content");
});

likeTab.addEventListener("click", () => {
  likeTab.classList.add("active-tab");
  wearTab.classList.remove("active-tab");

  likeContent.classList.add("active-content");
  wearContent.classList.remove("active-content");
});
