
const slider = document.querySelector(".featured .container");
const productWrapper = document.querySelector(".product-wrapper");
const controls = Array.from(document.querySelector(".featured .header-content > :last-child").children);
const prevButton = controls[0]
const nextButton = controls[1];
const productCards = document.querySelectorAll('.product-card');
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

