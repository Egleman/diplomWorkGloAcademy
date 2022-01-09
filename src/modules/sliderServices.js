const sliderServices = () => {
    const slidesWrapper = document.querySelector('.slider-two');
    const slidesField = document.querySelector('.services__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    const slides = document.querySelectorAll('.centrify');
    const blocks = document.querySelectorAll('.service-block');

    if(window.screen.width < 576) {
        let offset = 0;

        slidesField.style.width = 100 * slides.length  + '%';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';

        window.addEventListener('click', (e) => {
            if (e.target.closest(`.services__arrow--right`)) {
                if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
                    offset = 0;
                } else {
                    offset += +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            } else if (e.target.closest(`.services__arrow--left`)) {
                if (offset == 0) {
                    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
                } else {
                    offset -= +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            }
        });
    } else {
        const width = window.getComputedStyle(slidesWrapper).width;
        let offset = 0;

        slidesField.style.width = 100 * slides.length  + '%';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';
        
        /*
        slides.forEach(slide => {
            slide.style.width = (+width.slice(0, width.length - 2) / 2) + 'px';
        });
        */
        

        window.addEventListener('click', (e) => {
            if (e.target.closest(`.services__arrow--right`)) {
                if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
                    offset = 0;
                } else {
                    if (offset >= 1200) {
                        offset = 0;
                    } else {
                        offset += +width.slice(0, width.length - 2);
                    }
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            } else if (e.target.closest('.services__arrow--left')) {
                if (offset == 0) {
                    offset = 1200;
                    //offset = +width.slice(0, width.length - 2) * (slides.length - 1);
                } else {
                    offset -= +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            }
        });
    }
};

export default sliderServices;