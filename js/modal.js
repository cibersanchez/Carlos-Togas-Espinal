let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let registro = document.getElementsByClassName("registro_base")

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// registro.addEventListener('click', (e) => {
//   e.preventDefault();
//   alert('registro de usuario exitoso');
// });
