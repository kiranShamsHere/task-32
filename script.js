let pattern = "* ";
let row = 1;
let output = "";

while (row <= 10) {
  output += pattern + "<br>";
  pattern = pattern + " * ";
  row++;
}
document.getElementById("para").innerHTML = output;
