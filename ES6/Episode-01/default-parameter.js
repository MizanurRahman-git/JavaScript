
// amar joto gulo parameter thakbe totogulo ami Arguments dibo.


// function sum(num1 , num2){
//     const total = num1 + num2 
//     console.log(total)
// }

// sum(2, 3)




// ekhon jodi ami parameter songkhar theke beshi Arguments diye thaki tahole?


// function sum(num1 , num2){
//     const total = num1 + num2 
//     console.log(total)
//     console.log(num1 , num2, total)
// }

// sum(2, 3, 4, 5, 6, 7)




// okay so.  ekhon jodi emon hoy je ami parameter songkhar theke kom Arguments diyechi tahole ki hobe?


// function sum(num1 , num2){
//     const total = num1 + num2 
//     console.log(total)
//     console.log(num1 , num2, total)
// }

// sum(2)

// Answer: (undefined), (NaN)      Dekhay



// Tahole eta soluetion  korara upay ki colo dekha jak


// amake ekta default value ba man boshate hobe 



// function sum(num1 = 0 , num2 = 0){
//     const total = num1 + num2 
//     console.log(total)
//     console.log(num1 , num2, total)
// }

// sum(2 , 9)

// Ans: 2 9 11




// ekhon default man ki sob somoy 0 dibo? Ans= Na   amake bujhe dite hobe. 

// Example: 

// function multiply(num1 = 1 , num2 = 1){
//     const result = num1 * num2
//     console.log(result)
//     console.log(num1 , num2 , result)
// }


// multiply(20, 20)





// Okay Ekhon jodi String ba Boolean hoy tahole

function fullName(name1 = '', name2 = ''){
    const fullName = name1 + name2;
    console.log(fullName)
    console.log(name1 , name2, fullName)
}

fullName('mizanur')