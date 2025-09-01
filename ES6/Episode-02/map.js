const numbers = [4, 5, 6, 7, 8]




// const doubled1 = []

// for(const num of numbers){
//     const result = num *2
//     doubled.push(result)
// }

// console.log(doubled1)




// const doubledIt  = x => x*3      // this is arrow function
// const doubled2 = numbers.map(doubledIt)

// console.log(doubled2)





// const doubled3 = numbers.map(x => x*4)
// const fiveTimes = numbers.map(num => num*5)
// const squared = numbers.map(num => num*num)

// console.log(doubled3)
// console.log(fiveTimes)
// console.log(squared)





// if i have some friend



const friends = ['Mizanur', 'Rahman', 'Hridoy']



const nameLength = friends.map(x => x.length)
const firstLetter = friends.map(x => x[0])
const capital = friends.map(x => x.toUpperCase())
const lower = friends.map(x => x.toLowerCase())

const result = numbers.map((num, index) => {
    console.log( num * index)
})


console.log(nameLength)
console.log(firstLetter)
console.log(capital)
console.log(lower)