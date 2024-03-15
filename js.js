let counter = 0;
let counter2 = 0;
document.getElementById("plusButton").onclick = function () {
  counter += 1;
  counter2 += 1;
  document.getElementById("count").innerHTML = counter;
  document.getElementById("count2").innerHTML = counter;
};
document.getElementById("resetButton").onclick = function () {
  counter = 0;
  document.getElementById("count").innerHTML = counter;
};
