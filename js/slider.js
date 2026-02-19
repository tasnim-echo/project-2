const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, // how many slides visible
  spaceBetween: 15, // space between slides
  loop: true, // infinite loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
