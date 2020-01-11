const total_racks = 8;
const total_files = 8;
const GRID_ID = 'grid';
const blackPieces = {};
const whitePieces = {};
blackPieces.king = { positions: [[0, 4]], image: 'chess_pieces/black_king.png' };
blackPieces.queen = { positions: [[0, 3]], image: 'chess_pieces/black_queen.png' };
blackPieces.bishop = { positions: [[0, 2], [0, 5]], image: 'chess_pieces/black_bishop.png' };
blackPieces.knight = { positions: [[0, 1], [0, 6]], image: 'chess_pieces/black_knight.png' };
blackPieces.rook = { positions: [[0, 0], [0, 7]], image: 'chess_pieces/black_rook.png' };
blackPieces.pawn = { positions: [0, 1, 2, 3, 4, 5, 6, 7].map((file_Id) => [1, file_Id]), image: 'chess_pieces/black_pawn.png' };

whitePieces.king = { positions: [[7, 4]], image: 'chess_pieces/white_king.png' };
whitePieces.queen = { positions: [[7, 3]], image: 'chess_pieces/white_queen.png' };
whitePieces.bishop = { positions: [[7, 2], [7, 5]], image: 'chess_pieces/white_bishop.png' };
whitePieces.knight = { positions: [[7, 1], [7, 6]], image: 'chess_pieces/white_knight.png' };
whitePieces.rook = { positions: [[7, 0], [7, 7]], image: 'chess_pieces/white_rook.png' };
whitePieces.pawn = { positions: [0, 1, 2, 3, 4, 5, 6, 7].map((file_Id) => [6, file_Id]), image: 'chess_pieces/white_pawn.png' };

const getGrid = () => document.getElementById(GRID_ID);

const getBoxId = (rack_Id, file_Id) => `${rack_Id}-${file_Id}`;

const getBox = (rack_Id, file_Id) =>
  document.getElementById(getBoxId(rack_Id, file_Id));

const createBox = function (grid, rack_Id, file_Id) {
  const box = document.createElement('div');
  const nameOfClass = (rack_Id + file_Id) % 2 == 0 ? "white_box" : "black_box";
  box.className = nameOfClass;
  box.id = getBoxId(rack_Id, file_Id);
  grid.appendChild(box);
}

const createBoard = function () {
  const grid = getGrid();
  for (let rack_Id = 0; rack_Id < total_racks; rack_Id++) {
    for (let file_Id = 0; file_Id < total_files; file_Id++) {
      createBox(grid, rack_Id, file_Id);
    }
  }
}

const addCoin = function ([rack_Id, file_Id], image, nameOfClass) {
  const box = getBox(rack_Id, file_Id);
  const coin = document.createElement('img');
  box.appendChild(coin);
  coin.src = image;
  coin.classList.add(nameOfClass);
};

const drawPieces = function (pieces) {
  const piecesNames = Object.keys(pieces);
  piecesNames.forEach(piecesName => {
    pieces[piecesName].positions.forEach((position) => {
      addCoin(position, pieces[piecesName].image, 'piece')
    });
  });
}


const main = function () {
  createBoard();
  drawPieces(blackPieces)
  drawPieces(whitePieces)
}
