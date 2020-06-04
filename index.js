const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr) {
  const a = arr.find(game=> game.result === 'W')
  if(a){
    return a.year
  }
  
}