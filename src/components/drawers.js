export const clearRect = (context, canvas) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawPlayerOne = (context, playerOne) => {
  context.fillStyle = playerOne.color;
  context.beginPath();
  context.arc(playerOne.x, playerOne.y, playerOne.size, 0, Math.PI * 2);
  context.fill();
};

export const drawPlayerTwo = (context, playerTwo) => {
  context.fillStyle = playerTwo.color;
  context.beginPath();
  context.arc(playerTwo.x, playerTwo.y, playerTwo.size, 0, Math.PI * 2);
  context.fill();
};

export const drawSmallCircle = (context, smallCircleRef) => {
  context.fillStyle = "darkred";
  context.beginPath();
  context.arc(
    smallCircleRef.current.x,
    smallCircleRef.current.y,
    smallCircleRef.current.size,
    0,
    Math.PI * 2
  );
  context.fill();
};

export const drawPerkCircle = (context, perkCircleRef) => {
  const perkCircle = perkCircleRef.current;
  if (perkCircle) {
    context.fillStyle = perkCircle.color;
    context.beginPath();
    context.arc(perkCircle.x, perkCircle.y, perkCircle.size, 0, Math.PI * 2);
    context.fill();
  }
};
