function sumOfNumber(number){
    let sum = 0;
    for (const numbers of number){
        console.log(numbers);
        sum = sum + numbers; 
    }
    return sum;
}


const nums = [43,55,254,23]
const sum = sumOfNumber(nums);
console.log('Sum of number is:',sum)