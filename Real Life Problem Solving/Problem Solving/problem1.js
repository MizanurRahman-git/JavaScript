// Task 1 :
// Create a Function sum which take 2 value and return the sum of 2 number
// Create a Function multiply which take 2 value and return the sum of 2 number
// Suppose you have 2 numbers a , b print the sum of ( a + b) and ( a x b ) using sum and multiply function.


//      a           b           Output
//      2           3           11
//      4           5           29






function sum(input1, input2){
    let sum = input1 + input2 ;

    return sum
}


function multiply(input1, input2){
    let result = input1 * input2 ;

    return result
}

// multiply(12, 13)
// sum(12, 13);

let a = 4;
let b = 5;


let result = sum(a, b) + multiply(a, b);
console.log(result)