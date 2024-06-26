const header = document.querySelector("header");
const menuBar = document.querySelector(".menuBar");
const reviewWrapper = document.querySelector(".review-wrapper");
const reviewCards = Array.from(reviewWrapper.querySelectorAll(".review"));
const strokes = Array.from(document.querySelectorAll(".menuBar div"));
const rooms = Array.from(document.querySelectorAll(".room"));

const prevButton = document.querySelector(".controls").children[0];
const nextButton = document.querySelector(".controls").children[1];

let currentSlideIndex = 0; 

prevButton.addEventListener("click", handlePrevClick);
nextButton.addEventListener("click", handleNextClick);

// prevButton.disabled = true; // Initially disabled

// to keep track of the currrent card that is visible


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




// Function to get the width of the review card.

function getRcardWidth() {
    // element.offsetWidth returns the element layout width including padding and border
    return reviewCards[0].offsetWidth;
}



function handlePrevClick() {
    
    if (currentSlideIndex >= reviewCards.length) {
        currentSlideIndex -= 2;
    }
    else if (currentSlideIndex <= 0) {
        currentSlideIndex = 0; // dont go below 0, stay at the first slide
        prevButton.disabled = true;
    }  else {
        currentSlideIndex--; 
        prevButton.disabled = false; // enable previous button if previously disabled
    }

    
    scrollToSlide(currentSlideIndex);
}



function handleNextClick() {
    
    if (currentSlideIndex == reviewCards.length - 1) {
        nextButton.disabled = true;
    } else {
        currentSlideIndex++;
        nextButton.disabled = false;   
    }

    scrollToSlide(currentSlideIndex);
}





function scrollToSlide(slideIndex) {
    // slideWidth = getRcardWidth();
    scrollAmount = getRcardWidth() * slideIndex;

    reviewWrapper.scrollTo({left: scrollAmount, behavior: "smooth"});
}

