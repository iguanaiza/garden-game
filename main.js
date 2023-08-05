//info
const infoText = document.querySelector("#info-text");
const infoButton = document.querySelector("#info");

infoButton.addEventListener("click", () => 
{
    infoText.classList.toggle("hidden");
});

//navigation
const navLeft = document.querySelector("#left");
const navRight = document.querySelector("#right");
const navUp = document.querySelector("#up");
const navDown = document.querySelector("#down");
const plants = document.querySelectorAll(".plant");
let currentPlant = 1;

function changePlant(plantNum) {
    if (plantNum < 1 || plantNum > plants.length) {
      return;
    }
  
    const clear = document.querySelector(".selected");
    const plant = document.querySelector("#plant" + plantNum);
  
    clear.classList.remove("selected");
    plant.classList.add("selected");
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

//add new plant

//water

//fertilizer

//heal

//cut