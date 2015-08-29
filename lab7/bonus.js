// Grocery array
var groceryList = [];


// Grocery item constructor
function grocery(name,price) {
  this.name = name;
  this.price = price;
  groceryList.push(this); //Method that automatically pushes new item to groceryList array
}


// Grocery items
var kale = new grocery('Kale',3.50);
var avocado = new grocery('Avocado',1.30);


// Outcome is the new grocery object created
var outcome;
// formItems is the submit button element
var formItems = document.getElementById('addbutton');
// Listening for a click on the submit button
formItems.onclick= function(event){
  event.preventDefault();
  var name = document.getElementById('namez').value;
  // console.log(name);
  var price = document.getElementById('pricez').value;
  price = parseInt(price);
  // console.log(price);
  outcome = new grocery(name,price);
  // console.log(outcome);

  //Delete the current contents of the list by removing the <li>'s
  var listElement = document.getElementById("list");
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  // Clear total so it can be recalculated in showGroceryList()
  newTotal = 0;
  // Show the new grocery list
  showGroceryList();
}


// Loop through array to add an item to the html page
var newTotal = 0;
function showGroceryList(){
  for(var i=0; i<groceryList.length; i++) {

    var newListElement = document.createElement('li');
    var newText = document.createTextNode(groceryList[i].name + " " + groceryList[i].price);
    newListElement.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newListElement);
    // console.log(groceryList[i].name + " " + groceryList[i].price);
    newTotal += groceryList[i].price;
  }
  document.getElementById('total').innerText = newTotal;
}
showGroceryList();
.
