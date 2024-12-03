let score = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('.run').on('mouseenter', function(){
    let left = getRandomNumber(100, 0);
    let top = getRandomNumber(100, 0);

    score += 1;

    $('.run').css({
        left: `${left}%`,
        top: `${top}%`,
    });

    $('#score').text(score);
})

$('.run').on('click', function(){
    console.log("BTN Clicked");
    
    $('#success').removeClass("d-none");
    $('#success').text(`You successfully clicked the button after ${score} tries`)

    setTimeout(() => {
        $('#success').addClass("d-none");
        score = 0;
    }, 3000);
});





// const TETROMINOS = [
//     { shape: [[1, 1, 1], [0, 1, 0]], color: 'cyan' }, // T shape
//     { shape: [[1, 1], [1, 1]], color: 'yellow' }, // O shape
//     { shape: [[1, 1, 0], [0, 1, 1]], color: 'green' }, // S shape
//     { shape: [[0, 1, 1], [1, 1, 0]], color: 'red' }, // Z shape
//     { shape: [[1, 1, 1, 1]], color: 'blue' }, // I shape
//     { shape: [[1, 1, 1], [1, 0, 0]], color: 'orange' }, // L shape
//     { shape: [[1, 1, 1], [0, 0, 1]], color: 'purple' } // J shape
// ];

//     const Grid = $('.grid');
//     const Rows = 20;
//     const Columns = 10;
//     const blockSize = 30;

//     let score = 0;
//     let currentPiece;
//     let gameInterval;

// function DisplayGrid(){
//     for (let row = 0; row < Rows; row++) {
//         for (let col = 0; col < Columns; col++) {
//             Grid.append(`<div class="cell"></div>`);
//         }
//     }
// }

// $(window).on('load', function(){
//     DisplayGrid();
// });