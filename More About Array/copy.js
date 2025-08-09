// let price = 25;

// let com_price = price


// price = 11;
// com_price = 33;


// console.log(price)
// console.log(com_price)



// let price = 25; এটাকে কপি করে আরও একটা ভেরিয়েবলে রাখা হয়েছে। হিসাব অনুযায়ী মুল ভেরিয়েভলে কোনো পরিবর্তন আনলে উভয় জায়গায় পরিবর্তন হওয়ার কথা। কিন্তু না উভয় জায়গায় পরিবর্তন হবে না। 
//  কারণ ভেরিয়েবলের মান একক বা একটি তাই।  -------> এটাকে বলা হয় ----->Primitive type<----- 


// তুমি চাইলে একটা ---(অ্যারে বা অবজেক্ট)--- নিয়ে এটা করতে পারো । যে আমি যেকোনো একটাতে পরিবর্তন আনলে উভয় যায়গায় পরিবর্তন আসবে। 


// এটাকে বলা হয় ------->non primitive<-------




// const products = [22, 33, 44, 55, 66];
// const comp_products = products;


// products[0] = 11;
// comp_products[1] = 99


// console.log (products);
// console.log (comp_products);




//  এখন যদি কখন আমাকে কোনো---(অ্যারে বা অবজেক্ট)--- এর কোনো একটা মানকে বা কোনো ইনডেক্স এর মানকে পরিবর্তন করতে হয় এবং শুধু ওই ইনডেক্সে পরিবর্তন হবে অন্য কোনো জায়গায় হবে না তাহলে কি ভাবে করব। 

// অনেক ভাবে করা যায় সহজ/কঠিন দুই ভাবে করা যায়




// const products = [22, 33, 44, 55, 66];
// const comp_products = [];

// for (const product of products){
//     comp_products.push(product);
// }


// products[1] = 99;
// comp_products[2] = 88;


// console.log(products)
// console.log(comp_products)



// আরও কিছু নিয়মে দেখা যাক।




const numbers = [1,2,3,4,5];

// const new_number = Array.from(numbers)
// const new_number = [].concat(numbers)
// const new_number = [...numbers]

new_number.unshift(15)


console.log(numbers)
console.log(new_number)