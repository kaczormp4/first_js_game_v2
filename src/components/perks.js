const changeOtherPlayerPosition = (player, x, y) => {
  player.x = x;
  player.y = y;
};

const changePlayerSize = (player, size) => {
  player.size = size;
  setTimeout(() => {
    player.size = 50; //def size
  }, 3000);
};

const changeOtherPlayerSpeed = (player, speed) => {
  player.speed = speed;
  setTimeout(() => {
    player.speed = 10; //def speed
  }, 3000);
};

const increasePlayerSpeed = (player, speed) => {
  player.speed = speed;
  setTimeout(() => {
    player.speed = 10; //def speed
  }, 3000);
};

const perks = [
  {
    fn: (_, playerTwo) => changeOtherPlayerPosition(playerTwo, 0, 600),
    color: "red",
  },
  {
    fn: (playerOne, _) => changePlayerSize(playerOne, 100),
    color: "blue",
  },
  {
    fn: (_, playerTwo) => changeOtherPlayerSpeed(playerTwo, 2),
    color: "green",
  },
  {
    fn: (playerOne, _) => increasePlayerSpeed(playerOne, 40),
    color: "pink",
  },
  //   {
  //     fn: ,
  //     color: ,
  //     description:,
  //   },
];

export default perks;
