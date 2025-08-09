// function evenNumbersOnly(numbers){
//     const evens = []
//     for (const number of numbers){
//         if (number % 2 === 0){
//             console.log(number)
//             evens.push(number)
//         }
//     }
//     return evens
// }

// const numbers = [7,22,39,8,6];
// const even = evenNumbersOnly(numbers);
// console.log(even);




// এখন যদি আমি চাই শুধু জোর সংখ্যা গুলোর যোগ করতে তাহলে? 


function sumOfEvens(numbers){
    let sum = 0;
    for (const number of numbers){
        if (number % 2 === 0){
            console.log(number)
            sum = sum + number ;
        }
    }
    return sum ;
}


numbers = [7,22,39,8,6];
const even = sumOfEvens(numbers);
console.log('Sum:',even);