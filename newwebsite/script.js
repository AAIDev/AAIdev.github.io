/*
Main Script
*/
//Hide and seek!
var p1 = document.getElementByID(p1);
function to1() {
  document.getElementById("main").innerHTML = '<p id="p1">Whether you came for the great free arduino projects, the libraries, the generators, or the pizza.... <span style="font-weight: bold;">WAIT A MINUTE- WE DONT HAVE PIZZA</span></p>';
  document.getElementById("members").className = "selected";
  document.getElementById("contact").className = "";
  document.getElementById("projects").className = "";
  document.getElementById("home").className = "";
}
function to2() {
  document.getElementById("main").innerHTML = '<p id="p2">Welcome to the homepage of the most innovative developers in the galaxy. WAT?</p>';
  document.getElementById("projects").className = "selected";
  document.getElementById("members").className = "";
  document.getElementById("contact").className = "";
  document.getElementById("home").className = "";
}
function to3() {
  document.getElementById("main").innerHTML = '<p id="p3">Heymmmmmmammam</p>';
  document.getElementById("projects").className = "";
  document.getElementById("members").className = "";
  document.getElementById("contact").className = "selected";
  document.getElementById("home").className = "";
}
function to4() {
  document.getElementById("main").innerHTML = '<p id="p4">Welcome to the homepage of the most innovative developers in the galaxy.</p>';
  document.getElementById("projects").className = "";
  document.getElementById("members").className = "";
  document.getElementById("contact").className = "";
  document.getElementById("home").className = "selected";
}
