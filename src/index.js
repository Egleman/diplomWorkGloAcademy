import modal from './modules/modal';
import timer from './modules/timer';
import inputValidate from './modules/inputValidate';
import sendForm from './modules/sendForm';
import scroll from './modules/scrollToUp';
import calc from './modules/calc';
import comments from './modules/comments';
import sliderSwiperService from './modules/sliderSwiperService';
import sliderSwiperBenefits from './modules/sliderSwiperBenefits';
import sliderSwiperComments from './modules/sliderSwiperComments';
modal('btn1', 'header-modal__close' ,'header-modal');
modal('btn2', 'services-modal__close' ,'services-modal');
modal('sertificate-document', 'img-modal__close', 'img-modal');
sliderSwiperService();
sliderSwiperBenefits();
sliderSwiperComments();
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
