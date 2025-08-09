// function doubleIt(number){
//   const  doubled = number * 2
//     console.log(doubled)
// }

// doubleIt(10)
// console.log('____________________________')
// doubleIt(55)
// console.log('____________________________')
// doubleIt(88)


// এটা হলো কোনো একটা সংখ্যা দিয়ে অন্য  আর একটা সংখ্যার গুন 



// এখন যদি আমাকে বর্গ বা Square করতে বলা হয় তাহলে কেমনে করবো?

// Square বা বর্গ আসলে একই সংখ্যা দিয়ে গুণ করা 


// function square (number){
//   const  squared = number * number;
//     console.log(squared)
// }

// square(4)
// console.log('____________________________')
// square(16)
// console.log('____________________________')
// square(33)




// এখন আমরা দেখবো function দিয়ে কিভাবে যোগ বা বিয়োগ করে 




// function add (num1, num2){
//     const additional = num1 + num2;
//     console.log (additional)
// }

// add(2, 4);
// console.log('____________________________')
// add(10, 30);
// console.log('____________________________')
// add(80 ,20);



// এখন যদি এমন হয় আমি ৪ টা বা তারও বেশী সংখ্যা দিয়ে আমি যোগ করতে চাই তাহলে কি হবে। 

// তাহলে আমি যতগুলো সংখ্যা দরকার ওতগুলো parameter নিব।    note: তবে মনে রাখতে হবে যতগুলো parameter আমি যতগুলো নিব ততগুলো আমাকে মান বা Argument বসাতে হবে। টা না হলে ভেজাল হয়ে যাবে অর্থাৎ NaN dekhabe ।          চলো দেখা যাক 




function addAll(a,b,c,d,e){
    const sum = a+b+c+d+e ;
    console.log(sum);
}

addAll(5,6,7,3,1);

