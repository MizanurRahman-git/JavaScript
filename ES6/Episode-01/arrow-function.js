// const addtional = function (num1 , num2){
//     return num1 + num2;
// }

// console.log(addtional(2,3))





// Arrow Function multiline


const add = (num1 , num2) => num1 + num2;

const mult = (a , b) => a * b ;
const isBig = (a , b) => a > b ;
const percen = (amount , taxRate) => amount * taxRate/100 ;

console.log(add(2,31))
console.log(mult(2,3))
console.log(isBig(8,3))
console.log(percen(80, 7))




// single Parameter 


const squar = (x) => x*x;
const getHalf = x => x/2;
const firstEle = x => x[1];


console.log(squar(6))
console.log(getHalf(30))
console.log(firstEle([30, 21, 98, 34]))




// Anonymous Function 


document.getElementById('btn').addEventListener('click', () => {

})

document.getElementById('btn').addEventListener('click', event => {

})