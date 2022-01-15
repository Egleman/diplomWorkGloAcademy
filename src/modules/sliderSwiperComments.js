const sliderSwiperComments = () => {
    const swiper = new Swiper('.swiper-comments', { 
        direction: 'vertical',
        loop: true,
        breakpoints: {

            // when window width is >= 1000px
                365: {
                  slidesPerView: 3,
                  spaceBetween: 60
                }
        },
        autoplay: {
            delay: 5000,
        },
        preloadImages: true,
        updateOnImagesReady: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      });

};



  export default sliderSwiperComments;