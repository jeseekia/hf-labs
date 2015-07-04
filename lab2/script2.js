// Grocery array
var groceryList = [];


// Grocery item constructor

function grocery(name,price) {
  this.name = name;
  this.price = price;


}

// Grocery items
var kale = new grocery('Kale',3.50);
var avocado = new grocery('Avocado',1.30);


// Grocery List
groceryList.push(kale,avocado);


//I would like to add a function the constructor that automatically pushes a new
//grocery object to the groceryList array.


//Exercise 3

// Loop through array to add an item to the html page


  var newTotal = 0;

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
