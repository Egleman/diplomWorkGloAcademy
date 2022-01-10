const scroll = () => {
    let heightHeader = document.getElementsByClassName('container')[1].scrollHeight;
    let heightTabs = document.getElementsByClassName('container')[2].scrollHeight;
    let heightBenefits = document.getElementsByClassName('container')[3].scrollHeight;

    let btn = document.querySelector('.scrollUp');

    let sumHeight = heightBenefits + heightHeader + heightTabs;


    function magic() {
    if (window.pageYOffset > sumHeight) {
        btn.style.opacity = '1';
    } else { 
        btn.style.opacity = '0'; 
    }
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.scrollUp')) {
            const blockId = e.target.closest('a[href*="#"]').getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
    window.addEventListener('scroll', () => {
        magic();
    });
};

export default scroll;