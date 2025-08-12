function willSuccess(numbers){

    passMarks = 0;
    failMarks = 0;

    if(Array.isArray(numbers) == false){
        return "Invalid"
    }

    for (const number of numbers){
        if(number >= 50){
            passMarks++
        }

        else {
            failMarks++
        }
    }

    if(passMarks > failMarks){
        return true;
    }
    else {
        return false;
    }
}

console.log(willSuccess([60, 70, 80, 40, 30]))
console.log(willSuccess([48 , 48 , 92 , 100 ]))
console.log(willSuccess([48, 48, 50, 50, 100]))
console.log(willSuccess([]))
console.log(willSuccess([90]))
console.log(willSuccess([ 90 , 99 , 87 , 48 , 34 , 49 ]))
console.log(willSuccess("100 , 100"))
console.log(willSuccess(90))