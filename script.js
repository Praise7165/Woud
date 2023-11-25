


const navBar = document.querySelector("#navBar").children;
const menuBar = document.querySelector(".menuBar");

const iconsNavlink = Array.from(navBar).slice(1);




menuBar.addEventListener('click', () => {
    iconsNavlink.forEach(child => {
        child.classList.toggle("hide");
    })
});








