// Makes arrays with all the items that have this class name
var regularItems = document.querySelectorAll(".regular");
var doubleItems = document.querySelectorAll(".double");
var halfItems = document.querySelectorAll(".half");

console.log(regularItems);

// Node: want to make the highlight color on which ever button is selected
function regular() {
  // For each will repeat whats in the curly braces for each item in the given array
  regularItems.forEach(
    (item) => {
      item.style.display = "inline"
    }
  );
  document.getElementById("regular").classList.add("active");
  
  doubleItems.forEach(
    (item) => {
      item.style.display = "none"
    }
  );
  if(document.getElementById("double") != null){
    document.getElementById("double").classList.remove("active");
  }
  halfItems.forEach(
    (item) => {
      item.style.display = "none"
    }
  );
  if(document.getElementById("half") != null){
    document.getElementById("half").classList.remove("active");
  }
  
}
function double() {
  regularItems.forEach(
    (item) => {
      item.style.display = "none";
    }
  );
    document.getElementById("regular").classList.remove("active");
  doubleItems.forEach(
    (item) => {
      item.style.display = "inline";
    }
  );
    document.getElementById("double").classList.add("active");
  halfItems.forEach(
    (item) => {
      item.style.display = "none";
    }
  );
  if(document.getElementById("half") != null){
     document.getElementById("half").classList.remove("active");
  }
 
}
function half() {
  regularItems.forEach(
    (item) => {
      item.style.display = "none";
    }
  );
    document.getElementById("regular").classList.remove("active");
  doubleItems.forEach(
    (item) => {
      item.style.display = "none"
    }
  );
  if(document.getElementById("double") != null){
    document.getElementById("double").classList.remove("active");
  }
  halfItems.forEach(
    (item) => {
      item.style.display = "inline";
    }
  );
  document.getElementById("half").classList.add("active");
}