const handleKeyDown = (event, playerOne, playerTwo) => {
  switch (event.key) {
    case "ArrowUp":
      playerOne.y -= playerOne.speed;
      break;
    case "ArrowDown":
      playerOne.y += playerOne.speed;
      break;
    case "ArrowLeft":
      playerOne.x -= playerOne.speed;
      break;
    case "ArrowRight":
      playerOne.x += playerOne.speed;
      break;
    case "w":
      playerTwo.y -= playerTwo.speed;
      break;
    case "s":
      playerTwo.y += playerTwo.speed;
      break;
    case "a":
      playerTwo.x -= playerTwo.speed;
      break;
    case "d":
      playerTwo.x += playerTwo.speed;
      break;
    default:
      break;
  }

  event.preventDefault();
};
export const keyboardHandlers = (playerOne, playerTwo) => {
  document.addEventListener("keydown", (e) =>
    handleKeyDown(e, playerOne, playerTwo)
  );
};
export const removeKeyboardHandlers = (playerOne, playerTwo) => {
  document.removeEventListener("keydown", (e) =>
    handleKeyDown(e, playerOne, playerTwo)
  );
};
