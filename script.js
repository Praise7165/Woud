

const header = document.querySelector("header");
const menuBar = document.querySelector(".menuBar");
const strokes = Array.from(document.querySelectorAll(".menuBar div"));



menuBar.addEventListener('click', () => {

    header.classList.toggle("expand");


    strokes[0].classList.toggle("one");
    strokes[1].classList.toggle("two");
    strokes[2].classList.toggle("three");

});








