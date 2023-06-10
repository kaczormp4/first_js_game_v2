// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import {
  defaultCanvasSize,
  defaultCanvasStyle,
  defaultSmallCircle,
  defaultPerkCircle,
  defaultPlayerOne,
  defaultPlayerTwo,
} from "./consts";
import {
  clearRect,
  drawPlayerOne,
  drawPlayerTwo,
  drawSmallCircle,
  drawPerkCircle,
} from "./drawers";
import {
  generateRandomPosition,
  checkCollision,
  getRandomPerk,
  resetPlayerPositions,
  updateSmallCircle,
} from "./helpers";
import { keyboardHandlers, removeKeyboardHandlers } from "./handlers";
import perks from "./perks";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const smallCircleRef = useRef({ ...defaultSmallCircle });
  const perkCircleRef = useRef({ ...defaultPerkCircle });

  const playerOne = { ...defaultPlayerOne };

  const playerTwo = { ...defaultPlayerTwo };

  useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const context = canvas.getContext("2d");

    keyboardHandlers(playerOne, playerTwo);

    const detectCollision = () => {
      const percWithPlayerOneCollision = checkCollision(
        playerOne.x,
        playerOne.y,
        playerOne.size,
        perkCircleRef.current.x,
        perkCircleRef.current.y,
        perkCircleRef.current.size
      );

      const percWithPlayerTwoCollision = checkCollision(
        playerTwo.x,
        playerTwo.y,
        playerTwo.size,
        perkCircleRef.current.x,
        perkCircleRef.current.y,
        perkCircleRef.current.size
      );

      const playerOneWithPlayerTwoCollision = checkCollision(
        playerOne.x,
        playerOne.y,
        playerOne.size,
        playerTwo.x,
        playerTwo.y,
        playerTwo.size
      );

      const playerOneCollisionWithCircle = checkCollision(
        playerOne.x,
        playerOne.y,
        playerOne.size,
        smallCircleRef.current.x,
        smallCircleRef.current.y,
        smallCircleRef.current.size
      );

      const playerTwoCollisionWithCircle = checkCollision(
        playerTwo.x,
        playerTwo.y,
        playerTwo.size,
        smallCircleRef.current.x,
        smallCircleRef.current.y,
        smallCircleRef.current.size
      );

      if (percWithPlayerOneCollision) {
        perkCircleRef.current?.perkFn(playerOne, playerTwo);
        updatePerkCircle();
      }

      if (percWithPlayerTwoCollision) {
        perkCircleRef.current?.perkFn(playerTwo, playerOne);
        updatePerkCircle();
      }

      if (playerOneWithPlayerTwoCollision) {
        resetPlayerPositions(playerOne, playerTwo);
      }

      if (playerOneCollisionWithCircle) {
        setPlayerOneScore((prevScore) => prevScore + 1);
        updateSmallCircle(smallCircleRef);
      }

      if (playerTwoCollisionWithCircle) {
        setPlayerTwoScore((prevScore) => prevScore + 1);
        updateSmallCircle(smallCircleRef);
      }
    };

    const updatePerkCircle = () => {
      perkCircleRef.current = {
        ...generateRandomPosition(),
        ...getRandomPerk(perks),
      };
    };

    const draw = () => {
      clearRect(context, canvas);
      drawPlayerOne(context, playerOne);
      drawPlayerTwo(context, playerTwo);
      drawSmallCircle(context, smallCircleRef);
      drawPerkCircle(context, perkCircleRef);

      detectCollision();
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      removeKeyboardHandlers();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={defaultCanvasStyle}
        width={defaultCanvasSize}
        height={defaultCanvasSize}
      />
      <div>Player One Score: {playerOneScore}</div>
      <div>Player Two Score: {playerTwoScore}</div>
    </div>
  );
};

export default Canvas;
