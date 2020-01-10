const total_racks = 8;
const total_files = 8;
const GRID_ID = 'grid';
const blackQueenPosition = [[0, 3]];
const blackKingPosition = [[0, 4]];
const blackBishopPosition = [[0, 2], [0, 5]];
const blackKnightPosition = [[0, 1], [0, 6]];
const blackRookPosition = [[0, 0], [0, 7]];

const whiteQueenPosition = [[7, 3]];
const whiteKingPosition = [[7, 4]];
const whiteBishopPosition = [[7, 2], [7, 5]];
const whiteKnightPosition = [[7, 1], [7, 6]];
const whiteRookPosition = [[7, 0], [7, 7]];
const blackPawnPositions = [0, 1, 2, 3, 4, 5, 6, 7].map((file_Id) => [1, file_Id])
const whitePawnPositions = [0, 1, 2, 3, 4, 5, 6, 7].map((file_Id) => [6, file_Id])

const getGrid = () => document.getElementById(GRID_ID);

const getBoxId = (rack_Id, file_Id) => `${rack_Id}-${file_Id}`;

const getBox = (rack_Id, file_Id) =>
  document.getElementById(getBoxId(rack_Id, file_Id));

const createBox = function (grid, rack_Id, file_Id) {
  const box = document.createElement('div');
  if ((rack_Id + file_Id) % 2 == 0) {
    box.className = "black_box"
  } else {
    box.className = "white_box";
  }
  box.id = getBoxId(rack_Id, file_Id);
  grid.appendChild(box);
}
const addCoin = ([rack_Id, file_Id], image, nameOfClass) => {
  const box = getBox(rack_Id, file_Id);
  const coin = document.createElement('img');
  box.appendChild(coin);
  coin.src = image;
  coin.classList.add(nameOfClass);
};

const drawCoins = function () {
  blackPawnPositions.forEach((position) =>
    addCoin(position, 'chess_pieces/black_pawn.png', 'coin')
  );
  whitePawnPositions.forEach((position) =>
    addCoin(position, 'chess_pieces/white_pawn.png', 'coin')
  );
  whiteBishopPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/white_bishop.png', 'power')
  });
  blackBishopPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/black_bishop.png', 'power')
  });
  whiteKnightPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/white_knight.png', 'power')
  });
  blackKnightPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/black_knight.png', 'power')
  });
  whiteRookPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/white_rook.png', 'power')
  });

  blackRookPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/black_rook.png', 'power')
  });
  blackKingPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/black_king.png', 'power')
  });
  whiteKingPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/white_king.png', 'power')
  });
  blackQueenPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/black_queen.png', 'power')
  });
  whiteQueenPosition.forEach((position) => {
    addCoin(position, 'chess_pieces/white_queen.png', 'power')
  });
}

const createBoard = function () {
  const grid = getGrid();
  for (let rack_Id = 0; rack_Id < total_racks; rack_Id++) {
    for (let file_Id = 0; file_Id < total_files; file_Id++) {
      createBox(grid, rack_Id, file_Id);
    }
  }
}



const main = function () {
  createBoard();
  drawCoins();
}
