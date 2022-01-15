import { preloader, html } from './helpers';
const comments = () => {

    const nameComment = document.querySelectorAll('.name-comments');
        const comments = document.querySelectorAll('.comments-comm');
        const avatar = document.querySelectorAll('.avatar');

    let newComments = {};
    let arrUser = [];

    class NoComments {
        constructor (elem) {
            this.author = elem.author;
            this.image = elem.image;
            this.comment = elem.comment;
        }
    }

    const getData = (data) => {
        fetch('./comments.json')
        .then(response => {
            return response.json();
        })
        .then(data)
        .catch(err => {
            console.log(err, 'ошибка, файл не найден');
        });
    };
    /*
    const swapItems = (nextArray) => {
        const temp = nextArray[0];
        nextArray.push(temp);
        nextArray.splice(0,1);
        return nextArray;
    };
    */
    const render = () => {
        const swiperComments = document.querySelector('.swiper-comments');
        const swip = document.querySelectorAll('.swip');
        let height = 0;
 
        for (let i = 0; i < arrUser.length; i++) {
            if (nameComment[i]) {
                nameComment[i].textContent = arrUser[i].author;
            }
            if (comments[i]) {
                comments[i].textContent = arrUser[i].comment;
            }
            if (avatar[i]) {
                avatar[i].src = `./images/users/${arrUser[i].image ? arrUser[i].image : 'face1.png'}`;
            }
            
        }
        
        //const calcComments = document.querySelector('.calc-height');
        //calcComments.style.height = calc + 'px';

        //const imgAvatar1 = document.querySelector('.avatar-1');
        //const imgAvatar2 = document.querySelector('.avatar-2');
        //const imgAvatar3 = document.querySelector('.avatar-3');

        //const commentsName1 = document.querySelector('.comments-name-1');
        //const commentsName2 = document.querySelector('.comments-name-2');
        //const commentsName3 = document.querySelector('.comments-name-3');

        //const commentsCom1 = document.querySelector('.comments-comm-1');
        //const commentsCom2 = document.querySelector('.comments-comm-2');
        //const commentsCom3 = document.querySelector('.comments-comm-3');

        //let arrayCopy = Object.assign([], arrUser);
        //let swappedArray = swapItems(arrayCopy);
        //arrUser.splice(0);
        //swappedArray.forEach(item => {
            //arrUser.push(item);
        //});
        //imgAvatar1.src = `./images/users/${arrUser[0].image ? arrUser[0].image : 'face1.png'}`;
        //imgAvatar2.src = `./images/users/${arrUser[1].image ? arrUser[1].image : 'face1.png'}`;
        //imgAvatar3.src = `./images/users/${arrUser[2].image ? arrUser[2].image : 'face1.png'}`;

        //commentsCom1.textContent = arrUser[0].comment;
        //commentsCom2.textContent = arrUser[1].comment;
        //commentsCom3.textContent = arrUser[2].comment;

        //commentsName1.textContent = arrUser[0].author;
        //commentsName2.textContent = arrUser[1].author;
        //commentsName3.textContent = arrUser[2].author;
    };
    getData(data => {
        newComments = data.comments.map(item => new NoComments(item));
        newComments.forEach(item => {
            arrUser.push(item);
        });
        render();
    });

    
    setInterval(()=> {
        getData(data => {
            newComments = data.comments.map(item => new NoComments(item));
            newComments.forEach(item => {
                arrUser.push(item);
            });
            render();
        });
    }, 1000);
    
};

export default comments;