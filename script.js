const header = document.querySelector("header");
const menuBar = document.querySelector(".menuBar");
const sliderWrapper = document.querySelector(".featured .container");
const sliderContainer = document.querySelector(".product-wrapper");
const controls = Array.from(document.querySelector(".featured .header-content > :last-child").children);
const sliderItems = sliderContainer.querySelectorAll('.product-card');
const strokes = Array.from(document.querySelectorAll(".menuBar div"));
const rooms = Array.from(document.querySelectorAll(".room"));

const leftArrow = controls[0];
const rightArrow = controls[1];

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



const totalItemsWidth = sliderContainer.getBoundingClientRect().width;
let currentIndex = 0;

function moveSlider(direction) {
  currentIndex += direction; // Update index based on click
  if (currentIndex < 0) currentIndex = 0; // Prevent negative index
  if (currentIndex >= sliderItems.length) currentIndex = sliderItems.length - 1; // Prevent exceeding item count

  // Calculate new transform value
  const newTransformX = -currentIndex * 320;

  // Check for last item and adjust if needed
  if (currentIndex === sliderItems.length - 1) {
    newTransformX = -totalItemsWidth + sliderContainer.clientWidth;
  }

  // Update slider position
  sliderContainer.style.transform = `translateX(${newTransformX}px)`;
}

// Bind click events to arrow buttons
leftArrow.addEventListener("click", () => moveSlider(-1));
rightArrow.addEventListener("click", () => moveSlider(1));





