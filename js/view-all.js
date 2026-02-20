const viewAll = document.querySelector(".view-all");
const container = document.querySelector(".legacy-collection-container");
viewAll.addEventListener("click", function () {
  container.classList.toggle("show-all");

  viewAll.textContent = container.classList.contains("show-all")
    ? "View less"
    : "View All";
});
