const collections = document.querySelectorAll("section");

collections.forEach((section) => {
  const viewAll = section.querySelector(".view-all");
  const container = section.querySelector(".legacy-collection-images");

  if (viewAll && container) {
    viewAll.addEventListener("click", function () {
      container.classList.toggle("show-all");

      viewAll.textContent = container.classList.contain("show-all")
        ? "View less"
        : "View All";
    });
  }
});
