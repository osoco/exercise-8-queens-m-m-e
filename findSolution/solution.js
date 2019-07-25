// Go through each row
// Go through each column in the row
// Is there already a queen in that row, or column, move on to the next one
// See if a queen can be placed there - test if it will threaten another queen or not - if it will, move on to next square, if not, place a queen. If a queen is placed, put a 1 and add location to the list, if no, leave it as a 0.

const board = {
  queens: {
    numberOfQueens: 0,
    positions: []
  },
  rows: {
    1: [0,0,0,1,0,0,0,0],
    2: [0,1,0,0,0,0,0,0],
    3: [0,0,0,0,0,0,0,1],
    4: [0,0,0,0,0,0,0,0],
    5: [0,0,0,0,0,0,0,0],
    6: [0,0,0,0,0,1,0,0],
    7: [0,0,0,0,0,0,0,0],
    8: [0,0,1,0,0,0,0,0]
  }
};

n = 8;

const findQueenInRow = (row,n) => {
  // Set isqueen to false before searching row
  let isQueen;
  // Go through each column in the row
  for (let i=0 ; i<n; i++){
    //  if it has a queen already,change isqueen to true
    if (row[1][i] === 1){
      isQueen = true;
      board.queens.numberOfQueens += 1;
      board.queens.positions.push([row[0], row[1][i]]);
      break;
    } else {
      isQueen = false;
    }
  }
  return isQueen;
};

const findQueenInColumn = n => {
  let isQueen;
  for (let i=0 ; i<n; i++){
    // check the other rows in that column for queens
    for (row of Object.entries(board.rows)){
      // console.log(row[1][i]);
      if (row[1][i] === 1){
        isQueen = true;
        break;
      } else {
        isQueen = false;
      }
    }
  }
  return isQueen;
};

const tryQueen = (row,n) => {
  let isQueen;
  for (let i=0 ; i<n; i++){
    if (row[i-1] === 1){
      isQueen = true;
      break;
    } else {
      row[i] = 1;
      isQueen = true;
      board.queens.numberOfQueens += 1;
      board.queens.positions.push([row[0], row[1][i]]);
    }
  }
  // let isQueen = findQueenInColumn(n);
  return isQueen;
  // row[i] = 1;
  // board.queens.numberOfQueens += 1;
  // board.queens.positions.push([row, row[i]]);
    // threats = board.threats();
    // // if there are threats, remove the queen
    // if (threats === true) {
    //   row[i] = 0;
    // } else {
    //   board.queens.numberOfQueens += 1;
    //   board.queens.positions.push([row,row[i]]);
    //   board.solution;
    //   break;
    // }
}

const addQueens = n => {
  console.log(board.rows[1]);
  // Go through each row
  for (row of Object.entries(board.rows)){
    let isQueen = findQueenInRow(row,n);
    // If there is a queen in the row already, move on to the next row
    if (isQueen === true){
      continue;
    } 
    else {
      // add a queen in that position and check the board for potential threats
      const addQueen = tryQueen(row,n);
      
    // else {
    //   // Go through each column in the row
    //   // let isQueen = findQueenInColumn(n);
    //   if (isQueen === true){
    //     board.queens.numberOfQueens += 1;
    //     continue;
    //   } else {
    //     // add a queen in that position and check the board for potential threats
    //     for (let i=0 ; i<n; i++){
    //       // const addQueen = tryQueen(i);
    //     }
    //   }
    }
  }

  // console.log(board.rows);
  console.log('number of queens: ', board.queens.numberOfQueens, 'queen positions: ', board.queens.positions);
  // solution = board.solution;
  // if (solution === false){
  //   board.queens.numberOfQueens = 0;
  //   board.queens.positions = [];
  //   addQueens
  // }
}

addQueens(n);