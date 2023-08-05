//consts
const infoText = document.querySelector("#info-text");
const infoButton = document.querySelector("#info");
const navLeft = document.querySelector("#left");
const navRight = document.querySelector("#right");
const navUp = document.querySelector("#up");
const navDown = document.querySelector("#down");
const plants = document.querySelectorAll(".plant");
const water = document.querySelector("#water");
const fertilizer = document.querySelector("#fertilizer");
const heal = document.querySelector("#heal");
const cut = document.querySelector("#cut");

//info
infoButton.addEventListener("click", () => 
{
    infoText.classList.toggle("hidden");
});

//navigation
let currentPlant = 1;
let selectedPlant = document.querySelectorAll(".selected")[0];

function changePlant(plantNum) {
    if (plantNum < 1 || plantNum > plants.length) {
      return;
    }
  
    const clear = document.querySelector(".selected");
    const plant = document.querySelector("#plant" + plantNum);
  
    clear.classList.remove("selected");
    plant.classList.add("selected");
    selectedPlant = plant;
}

navRight.addEventListener("click", () => {
    let newPlant = currentPlant + 1;

    if (newPlant > plants.length) {
      newPlant  = 1;
    }

    changePlant(newPlant);
    currentPlant = newPlant;
});

navLeft.addEventListener("click", () => {
    let newPlant = currentPlant - 1;

    if (newPlant < 1) {
      newPlant  = plants.length;
    }

    changePlant(newPlant);
    currentPlant = newPlant;
});

//water
function changeSize(size) {
  let sizes = ["x-small", "small", "medium", "large", "x-large", "xx-large"];

  selectedPlant.style.fontSize = sizes[size];
/*  switch(size) {
    case 1:
      selectedPlant.style.fontSize = "small";
      break;
    case 2:
      selectedPlant.style.fontSize = "medium";
      break;
    case 3:
      selectedPlant.style.fontSize = "large";
      break;
    case 4:
      selectedPlant.style.fontSize = "x-large";
      break;
    case 5:
      selectedPlant.style.fontSize = "xx-large";
      break;
  }*/
}

let currentSize = 0

water.addEventListener("click", () => {
  let newSize = currentSize+1;

  if (newSize > 5) {
    selectedPlant.innerHTML="💀";
  }

  changeSize(newSize);
  currentSize = newSize;
});
//fertilizer

//heal

//cut