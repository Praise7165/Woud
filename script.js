


const navBar = document.querySelector("#navBar").children;
const menuBar = document.querySelector(".menuBar");
const strokes = Array.from(document.querySelectorAll(".menuBar div"));

const iconsNavlink = Array.from(navBar).slice(1);

console.log(strokes);


menuBar.addEventListener('click', () => {
    iconsNavlink.forEach(child => {
        child.classList.toggle("hide");
    });

    strokes[0].classList.toggle("one");
    strokes[1].classList.toggle("two");
    strokes[2].classList.toggle("three");

});








