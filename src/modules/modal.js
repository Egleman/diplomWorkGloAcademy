const modal = (btn, closeBtn, popUp) => {
    const headerModal = document.querySelector(`.${popUp}`);
    const modal = document.querySelector('.overlay');

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


    window.addEventListener('click', (e) => {
        if (e.target.closest(`.${btn}`)) {
            modal.style.display = 'block';
            headerModal.style.display = 'block';
            blockBody();
        } else if (e.target.closest(`.${closeBtn}`)) {
            modal.style.display = 'none';
            headerModal.style.display = 'none';
            unBlockBody();
        }
    });

};    

export default modal;