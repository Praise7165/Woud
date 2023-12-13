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




let currentPosition = 0;





// function to check disable arrow if slider position is 0 or 
// has reach the extreme end

function checkArrow() {

    if (currentPosition === 0) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }


    let wrapperWidth = productWrapper.getBoundingClientRect().width;
    let sliderWidth = slider.getBoundingClientRect().width;

    if (currentPosition <= sliderWidth - wrapperWidth) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}





let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 9; // Adjust the number based on the number of cards
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 9) % 9; // Adjust the number based on the number of cards
    updateSlider();
}

function updateSlider() {

    const sliderContent = document.querySelector(".product-wrapper");
    const cardWidth = document.querySelector(".product-card").offsetWidth + 24; // Adjusted width including margin
    sliderContent.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}



nextButton.addEventListener("click", () => {
    nextSlide();
});


prevButton.addEventListener("click", () => {
    prevSlide();
});