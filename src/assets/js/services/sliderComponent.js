const Swiper = require('swiper');

module.exports = function () {
   const swiper = new Swiper.Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
         // when window width is >= 320px
         180: {
            slidesPerView: 1,
            spaceBetween: 20
         },
         320: {
            slidesPerView: 2,
            spaceBetween: 20
         },
         // when window width is >= 480px
         480: {
            slidesPerView: 2,
            spaceBetween: 30
         },
         // when window width is >= 640px
         640: {
            slidesPerView: 3,
            spaceBetween: 40
         }
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      }
   });
}
