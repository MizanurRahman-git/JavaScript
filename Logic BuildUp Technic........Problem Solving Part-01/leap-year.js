// function isLeapYear(year){
//     if (year % 4 === 0){
//         return true
//     }

//     else {
//         return false
//     }
// }



// const isLeap1 = isLeapYear(2043)
// const isLeap2 = isLeapYear(2052)

// console.log(isLeap1)
// console.log(isLeap2)


// Ans:         false
//              true






// Advanced Lavel 

// মামা লজিক না বুঝলে হবে না। তো বইয়ের ১৬৭,১৬৮,১৬৯ পৃষ্ঠা দেখে এবং বুঝে আসো।


function isLeapYear(year){
    if (year % 400 === 0){
        return true;
    }

    else if (year % 100 === 0){
        return false;
    }

    else if (year % 4 === 0){
        return true;
    }

    else {
        return false;
    }
}



const isLeap1 = isLeapYear(2100)
const isLeap2 = isLeapYear(2400)
const isLeap3 = isLeapYear(1900)
const isLeap4 = isLeapYear(2052)

console.log(isLeap1,isLeap2,isLeap3,isLeap4)



// Ans:     false , true , false , true