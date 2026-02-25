fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    initMobileMenu();
  });

function initMobileMenu() {
  const menuIcon = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(
    ".mobile-menu-container .close-icon",
  );
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");

  if (!menuIcon || !closeIcon || !mobileMenuContainer) {
    console.log("Mobile nav elements not found");
    return;
  }

  menuIcon.addEventListener("click", () => {
    console.log("Hamburger clicked");
    mobileMenuContainer.classList.add("active");
  });

  closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
}
