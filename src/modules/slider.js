const slider = (right, left, slidesFields, slidesWrappers, slideses) => {
    const slidesWrapper = document.querySelector(`.${slidesWrappers}`);
    const slidesField = document.querySelector(`.${slidesFields}`);
    const width = window.getComputedStyle(slidesWrapper).width;
    const slides = document.querySelectorAll(`.${slideses}`);

    if(window.screen.width < 576) {
        if (slidesWrapper.classList.contains('benefits-wrap')) {
            slidesWrapper.style.width = '185px';
        }
        
        const width = window.getComputedStyle(slidesWrapper).width;
        
        let offset = 0;

        slidesField.style.width = 100 * slides.length  + '%';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            if (slide.classList.contains('benefits__item')) {
                slide.style.width = width;
            }
        });

        window.addEventListener('click', (e) => {
            if (e.target.closest(`.${right}`)) {
                if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
                    offset = 0;
                } else {
                    offset += +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            } else if (e.target.closest(`.${left}`)) {
                if (offset == 0) {
                    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
                } else {
                    offset -= +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            }
        });
    } else {
        let offset = 0;
        const width = window.getComputedStyle(slidesWrapper).width;
        slidesField.style.width = 100 * slides.length  + '%';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';

        
        slides.forEach(slide => {
            if (slide.classList.contains('benefits__item')) {
                slide.style.width = width;
            } else {
                slide.style.width = (+width.slice(0, width.length - 2) / 2) + 'px';
            }
        });
        
        window.addEventListener('click', (e) => {
            if (e.target.closest(`.${right}`)) {
                if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
                    offset = 0;
                } else {
                    if(offset >= width.slice(0, width.length - 2)) {
                        offset = 0;
                    } else {
                        offset += +width.slice(0, width.length - 2);
                    }
                
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            } else if (e.target.closest(`.${left}`)) {
                if (offset == 0) {
                    offset = width.slice(0, width.length - 2);
                } else {
                        offset -= +width.slice(0, width.length - 2);
                }
                slidesField.style.transform = `translateX(-${offset}px)`;
            }
        });
    }
    

};

export default slider;