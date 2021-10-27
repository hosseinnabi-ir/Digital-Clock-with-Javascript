setInterval(() => {

    const clock = document.querySelector('.clock');

    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hr = new Date().getHours();

    let day = hr >= 12 ? 'PM' : 'AM';

    sec < 10 ? sec = '0' + sec : sec;
    min < 10 ? min = '0' + min : min;
    hr < 10 ? hr = '0' + hr : hr;

    clock.textContent = hr + ':' + min + ':' + sec + ' ' + day;

}, 1000);