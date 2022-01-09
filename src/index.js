import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
modal('btn1', 'header-modal__close' ,'header-modal');
modal('btn2', 'services-modal__close' ,'services-modal');
slider('benefits__arrow--right', 'benefits__arrow--left', 'offer__slider-inner', 'benefits-wrap', 'benefits__item');
slider('services__arrow--right', 'services__arrow--left', 'services__slider-inner', 'slider-two', 'centrify');
timer();
