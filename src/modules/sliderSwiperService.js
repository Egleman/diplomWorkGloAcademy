const sliderSwiperService = () => {
    const swiper = new Swiper('.swiper-service', { 
        navigation: {
          nextEl: '.services__arrow--right',
          prevEl: '.services__arrow--left',
        },
		breakpoints: {

    	// when window width is >= 1000px
    		576: {
      		slidesPerView: 2,
      		spaceBetween: 40
    		}
  		}
      });

};



  export default sliderSwiperService;