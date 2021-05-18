var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("list-group-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      //funcion para el contenido
      let info = document.getElementsByClassName("contenido");
      
      if (btns.style.display === "none") {
          btns.style.display = "block";
      } else {
          btns.style.display = "none";
      }
      //funcion para sidebar
  var current = header.getElementsByClassName("activeRed");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" activeRed", " ");
  }
  this.className += " activeRed";

  });
}