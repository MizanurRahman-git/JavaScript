const numbers = [1, 2, 3, 4, 5, 6]

// let sum = 0; 
// for(const num of numbers){
//     sum = sum + num
// }

// console.log(sum)



const total = numbers.reduce((acc, curr) => acc + curr)

console.log(total)