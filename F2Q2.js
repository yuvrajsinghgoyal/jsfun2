function totalValueCalc(){
    let totalValue=0;
    for(let i=0;i<arguments.length;i++){
        totalValue+=arguments[i]
    }
    console.log("Your total bill is :",totalValue)
    return totalValue

}
totalValueCalc(10,22,25,2)

