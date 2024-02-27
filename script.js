const header = document.querySelector("header");
const menuBar = document.querySelector(".menuBar");
const slider = document.querySelector(".featured .container");
const productWrapper = document.querySelector(".product-wrapper");
const controls = Array.from(document.querySelector(".featured .header-content > :last-child").children);
const sliderItems = slider.querySelectorAll('.product-card');
const strokes = Array.from(document.querySelectorAll(".menuBar div"));
const rooms = Array.from(document.querySelectorAll(".room"));

const prevButton = controls[0];
const nextButton = controls[1];

menuBar.addEventListener('click', () => {

    header.classList.toggle("expand");


    strokes[0].classList.toggle("one");
    strokes[1].classList.toggle("two");
    strokes[2].classList.toggle("three");

});


rooms.forEach(room => {
    

    room.addEventListener("mouseover", () => {

        let roomName = room.querySelector("div > span");
        let arrow = room.querySelector("div > img");
        let image = room.querySelector(".room-image");


        roomName.style.color = "#121212";
        arrow.style.transform = "rotate(45deg)";
        image.style.zIndex = "1000";

        room.style.transition = "all .3s ease-in";



        
        room.addEventListener("mouseout", () => {
            roomName.style.color = "#616161";
            arrow.style.transform = "initial";
            image.style.zIndex = "initial";

            room.style.transition = "all .3s ease-in";
        });
        

    });

});



