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



//Test case
// console.log(groceryList[0]);
// console.log(groceryList[0].name);

// Print grocery List with Total
function printGroceryList(){
  var total = 0;

  for(var i=0; i<groceryList.length; i++) {
    console.log(groceryList[i].name + " " + groceryList[i].price);
    total += groceryList[i].price;
  }

    console.log("Total: " + total);
}

printGroceryList();


//I would like to add a function the constructor that automatically pushes a new
//grocery object to the groceryList array.
