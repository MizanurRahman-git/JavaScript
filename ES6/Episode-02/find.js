const numbers = [4, 5, 6, 7, 8]

const firstEven = numbers.find(x => x%2 === 0)
console.log(firstEven)


const greaterThan10 = numbers.find(x => x > 10) ;
console.log(greaterThan10)


const greaterThan6 = numbers.find(x => x > 6)
console.log(greaterThan6)