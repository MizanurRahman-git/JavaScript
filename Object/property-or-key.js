// const person = {
//     name: 'Mizanur Rahman',
//     age: 24,
//     profession: 'Developer',
//     salary: '25K',
//     married: false
// };

// console.log(person.profession);

// Ans: Developer



//  এখন ধরো, এমন কোনো Property বা key আমি ব্যাবহার করলাম, যেগুলোতে কোনো স্পেস বা বিশেষ চিহ্ন ব্যাবহার করতে হচ্ছে। তাহলে তখন আমি কিভাবে আউটপুট দিব?   




// const person = {
//     name: 'Mizanur Rahman',
//     age: 24,
//     profession: 'Developer',
//     salary: '25K',
//     married: false,
//     'fav food':['Jhalmuri','Cotpoti','Fuchka','Kalovuna']
// };

// console.log(person['fav food']);


// Ans:     ['Jhalmuri','Cotpoti','Fuchka','Kalovuna']





// const cricketer = {
//     position: 4,
//     specialty: 'Batter',
//     age: 28,
//     runs: 10000
// };

// console.log(cricketer.age);
// console.log(cricketer.specialty);
// console.log(cricketer.position);
// console.log(cricketer.runs);


// console.log(cricketer['age']);
// console.log(cricketer['specialty']);
// console.log(cricketer['position']);
// console.log(cricketer['runs']);



// Ans: yeah, answer is same        28   ,  Batter   ,   4   ,   10000






//   এখন যদি একটা Object আরো অনেক Object থাকে তাহলে কিভাবে সেগুলোর মান বের করা যায়




const college ={
    name: 'vnc',
    class:[11,12],
    events:['science fair','bijoy dibos','21 feb'],

    unique:{
        color: 'Blue',

        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}


console.log(college.unique.color)
console.log(college.unique.result.gpa)
console.log(college.events[1])

console.log(college.class[0] + college.class[1])
console.log(Object.keys(college))
console.log(Object.values(college))





// Ans:           Blue  ,   5   ,   bijoy dibos  
// Ans:         23  , ['name', 'class', 'events', 'unique' ]        all keys name


// Ans:     [
//             'vnc',
//             [ 11, 12 ],
//             [ 'science fair', 'bijoy dibos', '21 feb' ],
//             { color: 'Blue', result: { gpa: 5, merit: 'top' } }      all values 
//           ]
