const SPACE_SHIP_HEIGHT = 35;
const SPACE_SHIP_WIDTH = 200;
let ammo = 5;
export const handleSpaceShipCoords = (event) => {
    return {x:event.clientX, y:event.clientY };
}
export const handleSpaceShipMove = (event, {...spaceShipCoords}, spaceShip) => {
    spaceShip.style.top =  spaceShipCoords.y <= window.innerHeight / 2 ? window.innerHeight / 2 + "px" : spaceShipCoords.y >= window.innerHeight - SPACE_SHIP_HEIGHT ? window.innerHeight - SPACE_SHIP_HEIGHT + "px" : spaceShipCoords.y + "px";
    spaceShip.style.left =  spaceShipCoords.x <= SPACE_SHIP_WIDTH / 2 ? SPACE_SHIP_WIDTH / 2 + "px" : spaceShipCoords.x >= window.innerWidth - SPACE_SHIP_WIDTH / 2  ? window.innerWidth - SPACE_SHIP_WIDTH / 2 + "px" : spaceShipCoords.x + "px";
}
export const handleShots = (gameField, spaceShipCoords, shots) => {
    if (ammo > 0) {
        const shot = document.createElement("div");
        shot.classList.add("shots");
        shot.style.top = spaceShipCoords.y  + "px";
        shot.style.left = spaceShipCoords.x + "px";
        gameField.appendChild(shot)
        moveShots(shot, gameField)
        ammo--
    } else {
        setTimeout(() => {
            ammo = 5;
        },3000)
    }
}
const moveShots = (shot, gameField) => {
    let shotInterval = null;
    let initialYShotCord = Number(shot.style.top.slice(0, 3));
    shotInterval = setInterval(() => {
        initialYShotCord -= 20;
        if (initialYShotCord <= -50) {
            initialYShotCord = 0;
            gameField.removeChild(shot);
            return clearInterval(shotInterval);
        }
        shot.style.top = initialYShotCord + "px";
        }, 10)

}
