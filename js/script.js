window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.box').addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
    });

    document.querySelector('.box').addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log("Move");

        console.log(e.targetTouches);
    });

    document.querySelector('.box').addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    })
})