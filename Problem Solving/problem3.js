// Task 3: Develop a way to think about solving problems
// Create a function countVowels which take a string as input and returns the total number of vowels in that string
// If the input is not a string return "Invalid"
// Input                         Output
// "data"                           2
// "Jhankar miA"                    3
// "Dulal uddin"                    4
// ["Jhankar miA"]                Invalid
// 109                            Invalid
// "108"                             0




function countVowels(str){

    if(typeof str !== "string"){
        return "Invalid" ;
    }

    let count = 0 ;

    str = str.toLowerCase();

    for(const latter of str){
        if(latter == 'a' || latter == 'e' || latter == 'i' || latter == 'o' || latter == 'u'){
            count ++
        }
    }
    return count
}

const result1 = countVowels("data")
const result2 = countVowels("Jhankar miA")
const result3 = countVowels("Dulal uddin")
const result4 = countVowels(109)
const result5 = countVowels(["Jhankar miA"])
const result6 = countVowels("108")
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)