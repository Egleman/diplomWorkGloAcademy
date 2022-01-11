const modal = (btn, closeBtn, popUp) => {
    const btnPopup = document.querySelectorAll(`.${btn}`);
    const closeBtnPopup = document.querySelectorAll(`.${closeBtn}`);
    const headerModal = document.querySelector(`.${popUp}`);
    const modal = document.querySelector('.overlay');
    const application = document.querySelector('.imgPopup');
    const imgFancybox = document.querySelector('.img-fancybox');

    function blockBody() {
        const body = document.body;
        body.style.overflow = 'hidden';
        const bodyScroll = calcScroll();
        body.style.marginRight = `${bodyScroll}px`;
    }

    function unBlockBody() {
        const body = document.body;
        body.style.overflow = 'auto';
        body.style.marginRight = `0`;
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '500px';
        div.style.height = '500px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    btnPopup.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            headerModal.style.display = 'block';
            blockBody();
        });
    });
    closeBtnPopup.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            headerModal.style.display = 'none';
            unBlockBody();
        });
    });
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
        headerModal.style.display = 'none';
        unBlockBody();
    });
};    

export default modal;