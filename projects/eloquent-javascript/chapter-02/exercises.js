
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  for (let i = "#"; i.length <= number; i += "#") {
    console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){
         if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }    
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  let board = '';
  for (let i = 0; i < number; i++){
    for (let j = 0; j < number; j++){
      if ((i + j) % 2 == 0){
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  return board;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
