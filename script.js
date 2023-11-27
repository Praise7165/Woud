

const header = document.querySelector("header");
const menuBar = document.querySelector(".menuBar");
const strokes = Array.from(document.querySelectorAll(".menuBar div"));

const iconsNavlink = Array.from(navBar).slice(1);

console.log(strokes);


menuBar.addEventListener('click', () => {

    header.classList.toggle("expand");


    strokes[0].classList.toggle("one");
    strokes[1].classList.toggle("two");
    strokes[2].classList.toggle("three");

});








