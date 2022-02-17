// When I click the BTN the circle background changes to blue
// When I refresh the circle keeps blue

// Select circle by class .circle
const circle = document.querySelector(".circle");
// Select BTN by id #circleBTN
const circleSActionBtn = document.querySelector("#circleBTN");

// When I click the btn, show a message

// Get the bgColor and change my circle color
const bgColor = localStorage.getItem("bgColor");
circle.style.backgroundColor = bgColor;

circleSActionBtn.addEventListener("click", function () {
  // Setting the color on a localStorage
  localStorage.setItem("bgColor", "blue");
  // Change the background color of the circle to be blue
  circle.style.backgroundColor = "blue";
});

// localStorage

localStorage.setItem("name", "Hreinn");

const name = localStorage.getItem("name")
console.log("The name is:", name)