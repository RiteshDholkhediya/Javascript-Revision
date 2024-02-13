const myNums = [1, 2, 3, 4, 5];

let init = 0;

const myTotal = myNums.reduce((accumulator, currVal) => {
  return accumulator + currVal;
}, init);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Mobile dev course",
    price: 5000,
  },
  {
    itemName: "Python course",
    price: 4000,
  },
  {
    itemName: "Datascience course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
