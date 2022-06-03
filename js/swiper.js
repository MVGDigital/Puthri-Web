  var mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 10,
      slidesPerView: 2,
      initialSlide: 11,
      breakpoints: {  
        '480': {
          slidesPerView: 1,
          spaceBetween: 40,},
        '@640': {
          slidesPerView: 2,
          spaceBetween: 50, },
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
      },
      pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
      }
      });
