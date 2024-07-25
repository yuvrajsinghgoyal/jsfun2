const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

let minProduct={name:"",price:Number.MIN_VALUE};
let maxProduct={name:"",price:Number.MAX_VALUE};

for(let product of products){
  if(product.price>minProduct.price){
    minProduct=product;
  }
  if(product.price<maxProduct.price){
    maxProduct=product;
  }
}


console.log(`your product name is ${minProduct.name} with price ${minProduct.price} `)
console.log(`your product name is ${maxProduct.name} with price ${maxProduct.price} `)


