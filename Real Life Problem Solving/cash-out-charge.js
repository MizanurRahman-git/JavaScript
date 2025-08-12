function cashOut(money){
    const cashOutCharge = money * 1.75 / 100;

    if(typeof money === "string" || money < 0 ){
        return "Invalid"
    }
    return cashOutCharge;
}

console.log(cashOut(2000))
console.log(cashOut(100))
console.log(cashOut(999))
console.log(cashOut(-350))
console.log(cashOut(0))
console.log(cashOut("101"))
console.log(cashOut("mewauu"))