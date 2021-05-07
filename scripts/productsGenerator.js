let productsArr = [];

const getRandomProd = (min, max) =>
  Math.round(Math.random() * (max - min) + min);
console.log(getRandomProd(1, 10));

function Product(name, adj, price, qts) {
  this.name = name;
  this.adj = adj;
  this.price = price;
  this.qts = qts;
}

const randomProducts = (nouns, adjectives, total) => {
  console.log(nouns.length);
  console.log(adjectives.length);

  for (let i = 0; i < total; i++) {
    productsArr.push(
      new Product(
        nouns[getRandomProd(0, nouns.length)] +
          “-” +
          adjectives[getRandomProd(0, adjectives.length)],
        adjectives[getRandomProd(0, adjectives.length)],
        getRandomProd(5, 1000),
        getRandomProd(0, 100)
      )
    );
  }
  return productsArr;
};

const nouns = [
  “Chair”,
  “Fish”,
  “Computer”,
  “Desk”,
  “Table Tennis”,
  “Salad”,
  “Shirt”,
  “Gloves”,
  “Bike”,
  “Pizza”,
  “Chips”,
  “Keyboard”,
  “Lamp”,
  “Book”,
];
const adjectives = [
  “Unbranded”,
  “Wooden”,
  “Intelligent”,
  “Soft”,
  “Granite”,
  “Tasty”,
  “Handmade”,
  “Concrete”,
  “Sleek”,
  “Practical”,
  “Ergonomic”,
  “Fresh”,
  “Generic”,
  “Small”,
  “Fantastic”,
  “Licensed”,
  “Frozen”,
  “Unique”,
  “Fancy”,
  “Pink”,
];
randomProducts(nouns, adjectives, 16);

console.log(productsArr);

let lowestProdArr = [];

const getLowestProd = (arr) => {
  arr.map((x, i) => {
    console.log(x.qts <= 30 && x.qts >= 1);
    if (x.qts <= 30 && x.qts >= 1) lowestProdArr.push(x);
  });
  return lowestProdArr;
};

console.log(getLowestProd(productsArr));