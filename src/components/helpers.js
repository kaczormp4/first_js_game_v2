import {
  defaultSmallCircle,
  defaultCanvasSize,
  defaultPlayerOne,
  defaultPlayerTwo,
} from "./consts";

export const generateRandomPosition = () => {
  const size = defaultSmallCircle.size;
  const canvasSize = defaultCanvasSize;
  const x = Math.random() * (canvasSize - size) + size;
  const y = Math.random() * (canvasSize - size) + size;
  return { x, y, size };
};

export const checkCollision = (x1, y1, size1, x2, y2, size2) => {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance < size1 + size2;
};
export const getRandomPerk = (perks) => {
  const randomIndex = Math.floor(Math.random() * perks.length);
  const perk = perks[randomIndex];
  return { perkFn: perk.fn, color: perk.color };
};

export const resetPlayerPositions = (playerOne, playerTwo) => {
  playerOne.x = defaultPlayerOne.x;
  playerOne.y = defaultPlayerOne.y;
  playerTwo.x = defaultPlayerTwo.x;
  playerTwo.y = defaultPlayerTwo.y;
};

export const updateSmallCircle = (smallCircleRef) => {
  smallCircleRef.current = generateRandomPosition();
};
