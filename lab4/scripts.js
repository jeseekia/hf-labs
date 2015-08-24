// Add listening function for ".btn-succes".onclick to show an html form
// Try Use visibility: hidden or display: none and use function to change value on form
var reservationForm = document.getElementById('reservation');
var reserveButton = document.getElementsByClassName('btn-success');
// var reserveButton = document.getElementById('btn');
// var reserveButton = document.getElementsByTagName('button');

var clickedButtonName;
var clickedButton;

for (var i=0; i < reserveButton.length; i++) {
  reserveButton[i].onclick = function(event){
    // event.preventDefault();
    reservationForm.style.visibility='visible';
    // var clickedButtonName = reserveButton[i].name;
    clickedButtonName = this.name;
    clickedButton = this;
    console.log(clickedButton);
    return clickedButton;
  }
}

// Reserved Seat List Array
var reservedSeatList = [];

//Reserved Seat Constructor
function reservedSeat(firstName,lastName,seatNumber,email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.seatNumber = seatNumber;
  this.email = email;
  reservedSeatList.push(this);
}

// Outcome is the new reserved seat object created
var outcome;
// formItems is the submit button element
var formItems = document.getElementById('addbutton');
// Listening for a click on the submit button
formItems.onclick= function(event){
  event.preventDefault();
  var fname = document.getElementById('firstName').value;
  // console.log(fname);
  var lname = document.getElementById('lastName').value;
  // console.log(lname);
  var emaill = document.getElementById('email').value;
  // console.log(emaill);
  var seat = clickedButtonName;
  // console.log(seat);
  outcome = new reservedSeat(fname,lname,seat,emaill);
  // console.log(outcome);
  // Add class .btn-danger and .disabled to clicked button when form is submitted
  // Removeclass .btn-success to clicked button when form is submitted
  $(clickedButton).removeClass('btn-success').addClass('btn-danger disabled');
}


// Adding jQuery functionality

// When hovering over .btn-danger show values for corresponding reservedSeat object
