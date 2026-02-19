const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true, // infinite loop disi
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
