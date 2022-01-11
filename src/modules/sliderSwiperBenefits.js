const sliderSwiperBenefits = () => {
    const swiper = new Swiper('.swiper', { 
        navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
        },
		breakpoints: {

    	// when window width is >= 1000px
    		576: {
      		slidesPerView: 3,
      		spaceBetween: 40
    		}
  		}
      });

};



  export default sliderSwiperBenefits;