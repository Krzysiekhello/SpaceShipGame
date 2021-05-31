import  {handleSpaceShipCoords, handleSpaceShipMove, handleShots} from "./modules/spaceShip.mjs";
const gameField = document.querySelector("[data-gameContainer='gameContainer']")
let spaceShipCoords = {};
let shots = 0;
const spaceShip = document.querySelector("[data-spaceShip='spaceShip']");
window.addEventListener("mousemove", (event) =>{
    update(event);
    draw();
})
const update = (event) => {
    spaceShipCoords = handleSpaceShipCoords(event, spaceShip);
}
const draw = (event) => {
    handleSpaceShipMove(event, spaceShipCoords, spaceShip);
}
gameField.addEventListener("click",() => handleShots(gameField, spaceShipCoords, shots))
