const numbers = [23, 45, 26, 94, 78 ,100]

// console.log(numbers)
// console.log(...numbers)



// const numbers2 = Math.max(...numbers)

// console.log(numbers2)



const first = [1, 2, 3, 4, 5, 6]
const second = [...first]

second.push(7)

const third = [0 , ...first, 23, 45, 78]



console.log(first)
console.log(second)
console.log(third)