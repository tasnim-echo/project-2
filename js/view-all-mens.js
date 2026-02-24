const sections = document.querySelectorAll(".collection-wrapper");

sections.forEach((section) => {
  const viewAll = section.querySelector(".view-all");
  const container = section.querySelector(".collection-cards");

  if (viewAll && container) {
    viewAll.addEventListener("click", () => {
      container.classList.toggle("show-all");

      viewAll.textContent = container.classList.contains("show-all")
        ? "View less"
        : "View All";
    });
  }
});
