// Add listening function for ".btn-succes".onclick to show an html form
// Try Use visibility: hidden or display: none and use function to change value on form
var reservationForm = document.getElementById('reservation');
var reserveButton = document.getElementsByClassName('btn-success');
// var reserveButton = document.getElementById('btn');
// var reserveButton = document.getElementsByTagName('button');


for (var i=0; i < reserveButton.length; i++) {
  reserveButton[i].onclick = function(event){
    // event.preventDefault();
    reservationForm.style.visibility='visible';
  }
}
