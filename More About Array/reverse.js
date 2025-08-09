// reverse ৪/৫ ভাবে করা যায় আমরা সহজ থেকে শুরু করি 


const numbers = [1,2,3,4,5,6,7,8,9]


numbers.reverse()
console.log(numbers)


// এটার মানে হলো সে পুরো ভেরিয়েবলের মানকে উল্টায় দেয়। ব্যাছ 



const reverse =[];

// for (let i =0; i < numbers.length; i++){
//     // console.log(numbers[i]);
//     reverse.unshift(numbers[i])
// }

// console.log(reverse)


//  কোডটা ঠাণ্ডা মাথায় বোঝার চেষ্টা করো খুবেই সহজ আছে।



// Another Way



// for (let i = numbers.length-1; i >= 0; i--){
//     reverse.push(numbers[i])
// }

// console.log(reverse)



// সেই মজা মামা।




// try with ----> for of 

// for(const num of numbers){
//     reverse.unshift(num)
// }

// console.log(reverse)




