const testVar = {}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  
]
function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	
	let winner = array.find(o => {
		return o.result === "W"
	})
	return winner ? winner.year : winner
}

superbowlWin(record)
