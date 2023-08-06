//=============VARIABLES=====================================
const garden = document.querySelector('#garden'); //garden div
const infoText = document.querySelector("#info-text"); //game info div
const infoButton = document.querySelector("#info"); //button with info about game
const navLeft = document.querySelector("#left"); //button with arrow left - navigation
const navRight = document.querySelector("#right"); //button with arrow right - navigation
const water = document.querySelector("#water"); //button with drop - to water the plant
const fertilizer = document.querySelector("#fertilizer"); //green button - to fertilize the plant
const heal = document.querySelector("#heal"); //button with ambulance - to heal the plant
const cut = document.querySelector("#cut"); //button with axe - to cut the plant
const plant1 = {id: "plant1", watering: 0, size: 1}; //1st plant

let plantsStorage = [plant1]; //array with all plants objects - 1st flower is already added
let selectedPlant = plantsStorage[0]; //by deafult 1st plant is selected
let newID = 2; //starting new IDs from 2
let currentPlant = 0; //current plant is 0 in array
//-----------------------------------------------------------

//=============INFO ABOUT GAME - UNHIDE/HIDE ON CLICK========
infoButton.addEventListener("click", () => 
{
  infoText.classList.toggle("hidden"); //toggles class 'hidden'
});
//-----------------------------------------------------------

//=============NAVIGATION====================================
function changePlant(plantNum) { //changing current plant selection
  
  let clear = document.querySelector(".selected"); //selects all plants with class 'selected'
  let plant = document.getElementById(plantsStorage[plantNum].id); //selects plant by id starting with 'plant' and current number (like #plant1)
  
  clear.classList.remove("selected"); //clears class from all plants
  plant.classList.add("selected"); //adds class to current plant

  selectedPlant = plantsStorage[plantNum]; //reassigns current selection
}

//behaviour on button 'right' click
navRight.addEventListener("click", () => { 
    let nextPlant = currentPlant + 1; //takes current selections and adds 1 to move to right

    if (nextPlant > plantsStorage.length-1) { //resets to 1st plant when moves from the last one to next one
      nextPlant = 0;
    }

    changePlant(nextPlant); //uses the changePlant func
    currentPlant = nextPlant; //reassigns current selection
});

//behaviour on button 'left' click
navLeft.addEventListener("click", () => {
    let previousPlant = currentPlant - 1; //takes current selections and subtracks 1 to move to left

    if (previousPlant < 0) { //resets to last plant when moves from the first one to previous one
      previousPlant = plantsStorage.length-1;
    }

    changePlant(previousPlant); //uses the changePlant func
    currentPlant = previousPlant; //reassigns current selection
});
//-----------------------------------------------------------

//=============WATERING THE PLANT============================
function waterPlant() {
  let newSize = selectedPlant.size + 0.5; //new size value - 0,5 bigger than default
  let plantID = document.getElementById(selectedPlant.id); //ID of selected plant

  if (newSize <= 3) { //max size is 3rem which is 5 waters
    plantID.style = `font-size: ${selectedPlant.size}rem`;
    selectedPlant.size = selectedPlant.size + 0.5;
    currentSize = newSize;
  }

  else if (newSize > 3) {//if overwatered then it dies
    plantID.innerHTML="💀"; //reassigns flower icon to skull
  }

  else return;
}

water.addEventListener("click", waterPlant); //action on water button click
//-----------------------------------------------------------

//=============FERTILIZER====================================
//fertilize
function fertPlant() {
  let newFlower = document.createElement('div'); //new flower div

  if (plantsStorage.length > 99){ //if more than 100 flowers - we cant add more
    return;
  }

  newFlower.id = "plant"+newID; //new flower ID assign
  newFlower.classList.add("plant"); //new flower class assign
  newFlower.innerText = `🌷`; //new flower emoji assign
  garden.appendChild(newFlower); //new flower added to garden

  plantsStorage.push({id: "plant"+newID, watering: 0, size: 1}); //add new flower object to list
  newID++; //increase newID value
}

fertilizer.addEventListener("click", fertPlant);//action on fertilizer button click
//heal

//cut