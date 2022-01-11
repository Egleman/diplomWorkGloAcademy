import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import inputValidate from './modules/inputValidate';
import sendForm from './modules/sendForm';
import scroll from './modules/scrollToUp';
import calc from './modules/calc';
import comments from './modules/comments';
modal('btn1', 'header-modal__close' ,'header-modal');
modal('btn2', 'services-modal__close' ,'services-modal');
modal('sertificate-document', 'img-modal__close', 'img-modal');
slider('benefits__arrow--right', 'benefits__arrow--left', 'offer__slider-inner', 'benefits-wrap', 'benefits__item');
slider('services__arrow--right', 'services__arrow--left', 'services__slider-inner', 'slider-service', 'centrify');
timer('15 january 2022');
inputValidate();
sendForm({
    formID: 'form1',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form2',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form3',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form4',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form5',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form6',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
sendForm({
    formID: 'form7',
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ] 
});
scroll();
calc();
comments();