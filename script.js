function sumTwoNums() {
    var x = parseInt(document.getElementById("first-number").innerHTML)
    var y = parseInt(document.getElementById("second-number").innerHTML)
    document.getElementById('sum').innerHTML = x + y

}
function bgChange(bg) {
    document.body.style.background = bg;
  }