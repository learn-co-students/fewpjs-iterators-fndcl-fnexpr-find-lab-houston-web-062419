const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winner = arr.find(x => x.result ==='W')
  if(winner)
    return winner.year
}