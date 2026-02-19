fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const home = document.querySelector("#home-nav-menu");
    const womens = document.querySelector("#Womens-nav-menu");
    const mens = document.querySelector("#MENS-nav-menu");

    if (home) {
      home.addEventListener("click", () => {
        window.location.href = "/index.html";
      });
    }
    if (womens) {
      womens.addEventListener("click", () => {
        window.location.href = "/womens.html";
      });
    }

    if (mens) {
      mens.addEventListener("click", () => {
        window.location.href = "/mens.html";
      });
    }
  });
