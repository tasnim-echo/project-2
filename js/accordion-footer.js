alert();

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((header) => {
  header.addEventListener("click", function () {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    const contentStyle = window.getComputedStyle(content).display;

    if (contentStyle === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
