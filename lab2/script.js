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

// Print grocery List
for(var i=0; i<groceryList.length; i++) {
  console.log(groceryList[i].name + " " + groceryList[i].price);
}
