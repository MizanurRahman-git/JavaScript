// const capital = 'Dhaka';
// console.log(capital.length);

// Ans: 5   অর্থাৎ ওই স্ট্রিং এর ভিতরে কতগুলো ক্যারেক্টার আসে 




// এখন যদি আমি এই স্ট্রিং এর ভিতরে কোথাও একটা গ্যাপ দিই তাহলে কি হবে ? 


// const capital = 'Dha ka';
// console.log(capital.length);

// Ans: 6           তারমানে length-দিয়ে যে সবসময় কতগুলো ক্যারেক্টার বোঝাবে তা কিন্তু নয়। Note: স্ট্রিং এর Length     মানে হলো স্ট্রিং এর ভিতরে কতগুলো যায়গা নেয়া আসে





// const capital = 'Dhaka';

// console.log(capital[0]);
// console.log(capital.includes('k'))
// console.log(capital.indexOf('aka'))
// console.log(capital.indexOf('why'))


// Ans: D , true  ,   2     ,      -1    




// const capital = 'Dhaka';

// capital[0] = 'd'

// console.log(capital)


// Ans: Dhaka               উত্তর ঢাকাই আসছে কারণঃ স্ট্রিং হচ্ছে Immutable. That means not-mutable/not-changeable




// const capital = 'Dhaka';

// console.log(capital[capital.length -1]);


// Ans: a           অর্থাৎ, কোনো একটা স্ট্রিং এর ভিতরের শেষে কি আছে তা বের করলাম