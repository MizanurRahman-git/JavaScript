// Task 2:
// Create a function sumOfArray which takes an array and returns the sum of that array. If the input is not an array and if any data not a number found in the array , it will return ‘Invalid’

// Input                        Output
// [1,2,3]                         6
// [3 , 7 , 8 ]                    29
// [3 , 5 , "eksho" , 3 ]        Invalid
// 10                            Invalid






function sumOfArray(array){

    let sum = 0;
    if(Array.isArray(array) == false){
        return 'Invalid';
    }
    for(const number of array){
        if(typeof number !== 'number'){
            return 'Invalid'
        }
        sum = sum + number;
    }
    return sum;
}

const result1 = sumOfArray([1,2,3]);
const result2 = sumOfArray([3 , 7 , 8 ]);
const result3 = sumOfArray([3 , 5 , "eksho" , 3 ]);
const result4 = sumOfArray(10);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);