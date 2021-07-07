/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContain = document.querySelector(".carousel-container");
carouselContain.appendChild(carouselCreator());

var carouselIndex = 0;
let interval;
showCarousel();

function showCarousel(){
  const images = document.querySelectorAll(".slides");
  for (var i = 0; i < images.length; i++){
    images[i].style.display ="none";
  }
  carouselIndex++;
  if (carouselIndex > images.length) {carouselIndex = 1}
  images[carouselIndex-1].style.display = "block";
  interval = setTimeout(showCarousel, 5000);
}
function slideChange(num) {
  const images1 = document.querySelectorAll(".slides");
  window.clearTimeout(interval);
  carouselIndex = carouselIndex += num;
  if (carouselIndex < 0){
    carouselIndex = images1.length-1;
  }
  console.log(carouselIndex);
  showCarousel();
}

function carouselCreator(){
  //Element
  const
  carousel = document.createElement("div"),
  leftBtn = document.createElement("div"),
  image1 = document.createElement("img"),
  image2 = document.createElement("img"),
  image3 = document.createElement("img"),
  image4 = document.createElement("img"),
  rightBtn = document.createElement("div");

  //Structure
  carousel.appendChild(leftBtn);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightBtn);
  
  //Classes
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  image1.classList.add("slides");
  image2.classList.add("slides");
  image3.classList.add("slides");
  image4.classList.add("slides");

  //Content
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";
  
  leftBtn.addEventListener("click", ()=>{
    slideChange(-2);
  })
  rightBtn.addEventListener("click", ()=>{
    slideChange(0);
  })

  return carousel;
}
