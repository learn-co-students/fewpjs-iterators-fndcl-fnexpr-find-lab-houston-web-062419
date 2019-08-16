// const testVar = {}

// function testFunc() {
//   return "hi"
// }
// record = [year, result]

function superbowlWin(record){
  let winningGame = record.find((game) => game.result === "W")
  // if (winningGame) {
  //   return winningGame.year
  // }

  return winningGame ? winningGame.year : undefined



}
