function validContact(number){

    if(typeof number !== "string"){
        return "Invalid"
    }

    if(number.length === 11 && number[0]== 0 && number[1]== 1 && number !== " "){
        return true;
    }
    else {
        return false;
    }
}

console.log(validContact("01819234567"))
console.log(validContact("0181923 4567"))
console.log(validContact("018192345679"))
console.log(validContact(["01987654321"]))
console.log(validContact("01345678900"))
console.log(validContact("02145678900"))
console.log(validContact(true))