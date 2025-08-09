// প্রথমে আমরা For loop দিয়ে দেখি   তারপর While loop দিয়ে দেখবো। কেমন? 



const fruits = ['hridoy', 'mizanur', 'rahman', 'ringki', 'nazat', 'nuha'];

// for (let i =0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }



// মজার বিষয় হলোঃ এই যে i এর যেহেতু মান বারাচ্ছি for loop এর কন্ডিশন দিয়ে। অর্থাৎ i=০, ভেরিয়েভলে যেহেতু ৬ টা মান আছে তাহলে সে ৬ টা ০ আমাকে আউটপুট দিবে ওকে এখন আমি i কে i++ এর মাধ্যমে প্রতিবার ১ করে যোগ করে মান পরিবর্তন করে দিচ্ছি। এবং iএর মানকে আমি ইনডেক্সের জন্য ব্যাবহার করছি (fruits[i])হিসেবে।

// যেমন (fruits[0])= hridoy 
// যেমন (fruits[1])= mizanur 
// তুই চাইলে Run And Debug করে দেখতে পারিস। এটা করলে বুঝতে পারবি


//  এইভাবে কাজ করে। না বোঝার কিছু নাই একটু ঠাণ্ডা মাথায় ভাব তাহলে বুঝতে পারবি। 


//  নিচে এমন আরও একটি উদহারণ দেখঃ 


const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// for (let m = 0; m < numbers.length; m++){
//     console.log(numbers[m])
// }


// এবার আমরা While loop দিয়ে দেখবো 


let m = 0;
//  while (m < fruits.length){
//     console.log(fruits[m]);
//     m++;
//  }


while (m < numbers.length){
    console.log (numbers[m]);
    m++;
}