```
Go through each row
Go through each column in the row
Is there already a queen in that row, or column, move on to the next one
See if a queen can be placed there - test if it will threaten another queen or not - if it will, move on to next square, if not, place a queen. If a queen is placed, put a 1 and add location to the list, if no, leave it as a 0.

board = {
  queens: {
    numberOfQueens: 0,
    positions: []
  },
  rows: {
    1: [0,1,0,0,0,0,0,0],
    2: [0,0,0,0,0,0,0,0],
    3: [0,0,0,0,0,0,0,0],
    4: [0,0,0,0,0,0,0,0],
    5: [0,0,0,0,0,0,0,0],
    6: [0,0,0,0,0,0,0,0],
    7: [0,0,0,0,0,0,0,0],
    8: [0,0,0,0,0,0,0,0]
  }
}

n = 8;

function addQueens(n){
  <!-- Go through each row -->
  for (row of board.rows){
    <!-- See if row already has a queen in it -->
    isQueen = row.includes(1);
    if (isQueen === true){
      <!-- Go through each column in the row -->
      for (i=0; i '<'n;i++){
        <!-- if it has a queen already,add to number of queens and save its position -->
        if (row[i] === 1){
          board.queens.numberOfQueens += 1;
          position = queen.position()
          board.queens.positions.push(position);
          break;
        }
      }
      <!-- If there is a queen in the row already, move on to the next row -->
      break;
    } else {
      <!-- Go through each column in the row -->
      for (i=0; i '<'n;i++){
        <!-- add a queen in that position and check the board for potential threats -->
        row[i] = 1;
        threats = board.threats();
        if (threats === true) {
          <!-- if there are threats, remove the queen -->
          row[i] = 0;
        } else {        
          <!-- if there are no threats, add to number of queens and save its position -->
          board.queens.numberOfQueens += 1;
          position = queen.position();
          board.queens.positions.push(position);
          board.solution;
          break;
        }
      }
    }
  }
  solution = board.solution();
  if (solution === false){
    addQueens(start from 2 instead of 1);
  }
}
```
