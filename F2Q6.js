const productDetails={
    name:"apple 2020 mackbook air",
    price:82200,
    color:"gray",
    hardDisk:"256GB"
};

console.log("Below are the product details.");
for(let keys of Object.keys(productDetails)){
    console.log(keys ,":", productDetails[keys])
}