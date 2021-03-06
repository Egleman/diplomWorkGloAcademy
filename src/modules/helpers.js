const preloader = document.createElement('div');
preloader.className = 'preload';
preloader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="244px" height="244px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<rect x="20.5" y="30" width="9" height="40" fill="#e15b64">
  <animate attributeName="y" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="20;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2702702702702703s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="60;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2702702702702703s"></animate>
</rect>
<rect x="45.5" y="30" width="9" height="40" fill="#f8b26a">
  <animate attributeName="y" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="22.5;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.13513513513513514s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="55;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.13513513513513514s"></animate>
</rect>
<rect x="70.5" y="30" width="9" height="40" fill="#abbd81">
  <animate attributeName="y" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="22.5;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.3513513513513513s" calcMode="spline" keyTimes="0;0.5;1" values="55;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
</rect>
<!-- [ldio] generated by https://loading.io/ --></svg>`;

const html = `<div class="col-sm-offset-1 col-xs-12 comments-container">
<div class="review-margin-bottom row comment-item">
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face4.png" alt="" class="img-responsive avatar avatar-1">
        </div>
    </div>
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-green review-arrow review-arrow-left">
            <p class="text-normal comments-name-1">?????????????? ??????????????????</p>
            <p class="comments-comm-1">???? ?????????? ???????????? ????????????, ???? ?? ???????????? ???????????? ?????????? ???????????? ????????????????, ???????????? ?????? ???????????????????????? ?????????????????? ?? ???????????? ?????????????????????? ???? ???????????? ??????????????????, ???? ???????? ???? ???????? ?????????????????????????? ????????????????????, ???????? ???????????????????? ?????????????????????? ??????????????. ?? ???????? ??????????????, ?? ?????? ?????????? ???????? ?????????????????????????? ?????????????? ????????, ?????????? ???? ???????????????? ???????????? ?????????????????? ?????????? ????????. ?????? ???????? ????????????, ?????????? ??????????????????, ???? ?????? ?????????????? ?????????????????? ?????????????????? ?????????????? ?????? ???????????????????? ?????????? ????????????. ???????????? ?????????????????? ???? ??????????????, ?????????? ?? ???????????????? ?????????????????????? ????????????????!</p>
        </div>
    </div>
</div>
<div class="review-margin-bottom row comment-item">
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-gray review-arrow review-arrow-right">
            <p class="text-normal comments-name-2">???????????????? ?? ????????????????</p>
            <p class="comments-comm-2">???? ?? ???????????????? ?????????????????? ???????????????? ?? ??????????????. ?????????? ???????? ??????????????????, ???????????????????????????? ???????? ???????????????????? ?????????? ?????? ????????????????, ??????????????????????????????. ?? ???????????????? ????????????????????????, ?????? ???????????????????? ?????????????????????? ???????????? ???? ?????????? ?????????????? ????????????????. ???? ???????????????? ????????, ???????????????????? ???????????????? ??????????????, ???????????????????????? ??????????, ?? ?????????? ???????????????? ?????????????? ????????-???????? ?? ???????? ??????????????. ???? ?????????????? ?????????? ?????? ???????????????????????? ?????????? ?????????????? ????????????, ?? ?????????????? ?????? ?? ?????????????????? ?????? ??????????! ?????????? ???????????????? ???????? ???????????????????????? ?????????????????? ?????????????????????? ????????????????. ??????????????!</p>
        </div>
    </div>
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face5.png" alt="" class="img-responsive avatar avatar-2">
        </div>
    </div>
</div>
<div class="row comment-item">
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face6.png" alt="" class="img-responsive avatar avatar-3">
        </div>
    </div>
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-orange review-arrow review-arrow-left">
            <p class="text-normal comments-name-3">?????????? ????????????????</p>
            <p class="comments-comm-3">?????????? ?????????????????????? ???????????????? ???????????? ???????? ???? ??????????, ???? ?????????? ???? ?????????????????????????????? ??????????????????????, ???????????? ?????? ?????????????????????? ???????????????????? ?????????????? ?????????? ??????????. ?????????????? ?????????????? ???????????????? ????????????????????????, ?? ???????????? ?????????????? ?????????????? ?? ???? ??????????????????. ?????? ???????????????????????? ?????????????? ?????????????????? ?????? ?????????? ?? ????????????????. ?? ?????? ?????????????? ???????????????? ???????? ???? ???????? ???????????????? ??????????! ??????????????, ?????? ?????? ?????????? ??????????????.</p>
        </div>
    </div>
</div>
</div>`;

export { preloader, html };

