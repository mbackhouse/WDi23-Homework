// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example
//
// // Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let add = 0;

const cashRegister = function (shoppingCart) {
  for (let val in cartForParty) {
  let a =  parseFloat(cartForParty[val]);
  add += a;
}
console.log(`add = ${add}`);
return add;
};

cashRegister(cartForParty);
