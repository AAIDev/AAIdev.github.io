/*
Main Script
*/
//Hide and seek!
var p1 = document.getElementByID(p1);
function to1() {
  document.getElementById("p1").innerHTML = 'Whether you came for the great free arduino projects, the libraries, the generators, or the pizza.... <span style="font-weight: bold;">WAIT A MINUTE- WE DONT HAVE PIZZA</span>';
  document.getElementById("members").className = "selected";
  document.getElementById("contact").className = "";
  document.getElementById("projects").className = "";
}
function to2() {
  document.getElementById("p1").innerHTML = "Welcome to the homepage of the most innovative developers in the galaxy.";
  document.getElementById("projects").className = "selected";
  document.getElementById("members").className = "";
  document.getElementById("contact").className = "";
}
