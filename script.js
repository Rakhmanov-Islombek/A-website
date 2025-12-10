const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: true,
});