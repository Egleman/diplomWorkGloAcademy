import modal from './modules/modal';
import slider from './modules/slider';
import sliderServices from './modules/sliderServices';
modal('btn1', 'header-modal__close' ,'header-modal');
modal('btn2', 'services-modal__close' ,'services-modal');
slider('benefits__arrow--right', 'benefits__arrow--left', 'offer__slider-inner', 'benefits-wrap', 'benefits__item');
//slider('services__arrow--right', 'services__arrow--left', 'services__slider-inner', 'slider-two', 'col-md-12 col-lg-6');
sliderServices();