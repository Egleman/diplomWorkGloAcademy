const comments = () => {
    const imgAvatar1 = document.querySelector('.avatar-1');
    const imgAvatar2 = document.querySelector('.avatar-2');
    const imgAvatar3 = document.querySelector('.avatar-3');

    const commentsName1 = document.querySelector('.comments-name-1');
    const commentsName2 = document.querySelector('.comments-name-2');
    const commentsName3 = document.querySelector('.comments-name-3');

    const commentsCom1 = document.querySelector('.comments-comm-1');
    const commentsCom2 = document.querySelector('.comments-comm-2');
    const commentsCom3 = document.querySelector('.comments-comm-3');

    let newComments = [];

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

    const render = () => {
        imgAvatar1.src = `images/users/${newComments[0].image}`;
        imgAvatar2.src = `images/users/${newComments[1].image}`;
        imgAvatar3.src = `images/users/${newComments[2].image}`;

        commentsName1.textContent = newComments[0].author;
        commentsName2.textContent = newComments[1].author;
        commentsName3.textContent = newComments[2].author;

        commentsCom1.textContent = newComments[0].comment;
        commentsCom2.textContent = newComments[1].comment;
        commentsCom3.textContent = newComments[2].comment;

        setInterval(() => {
            newComments.push(newComments.unshift());
            imgAvatar1.src = `images/users/${newComments[0].image}`;
            imgAvatar2.src = `images/users/${newComments[1].image}`;
            imgAvatar3.src = `images/users/${newComments[2].image}`;

            commentsName1.textContent = newComments[0].author;
            commentsName2.textContent = newComments[1].author;
            commentsName3.textContent = newComments[2].author;

            commentsCom1.textContent = newComments[0].comment;
            commentsCom2.textContent = newComments[1].comment;
            commentsCom3.textContent = newComments[2].comment;
            //console.log(newComments);
        }, 1000);
    };

    getData((data) => {
        data.comments.forEach(item => {
            newComments.push(item);
        });
        //render();
    });
    //newComments.splice(0,1);
    console.log(newComments);
};

export default comments;