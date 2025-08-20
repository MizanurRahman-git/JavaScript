//  কোনো কিছুর মধ্যে সর্বোচ্চ সংখ্যা বের করার সহজ টেকনিক।
 

const max = Math.max(12, 23, 33, 44)

console.log(max)



function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return "Mizanur The Rael Proggramar"
    }
    else if (num2 > num1 && num2 > num3){
        return "Rahman The Rael Proggramar"
    }
    else{
        return "Hridoy The Rael Proggramar"
    }
}

const mizanur = 82;
const rahman = 83;
const hridoy = 84;

console.log(maxOfThree(mizanur,rahman,hridoy))





// Find the max number of Array


function maxOfArray(array){
    let max = array[0];
    for (const num of array){
        if(num > max){
            max = num
        }
    }
    return max
}

const numbers = [22,33,44,55,66,77,88,99];

console.log(maxOfArray(numbers))