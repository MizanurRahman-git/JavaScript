// While-loop And for-loop এর মধ্যে কোনো পার্থক্য নেই, শুধু syntex বা লেখার সিস্টেম ছাড়া দুইটা loop-এর কাজ একই //

// Example: //


// for (let num = 1; num <= 10; num++) {
//     console.log(num)
// }


// once more //

// for (let i = 0; i <= 5; i++) {
//     console.log (i)
// }



// _______How can you use this for Sum________ //

// let sum = 0;

// for (let i = 1; i <= 10; i++){
//     sum = sum + i;
// }

// console.log('Total:', sum)

// Answer: Total:55 //







// _____এখন আমরা for-loop-দিয়ে জোর-বিজোড় সংখ্যার loop-এর শর্ত দেখবো_____ //



// __Code for Even Numbers__ // 

// for (let i = 0; i <= 20 ; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }


// Use Not-Equal Syne 

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 != 1){
//         console.log(i)
//     }
// }


// Just for use 

// for (let i = 2; i < 20; i+=2){
//     console.log(i)
// }

// Answer: 0,2,4,6,8,10,12,14,16,18,20




//__code for Odd Numbers__//


// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 1){
//         console.log(i)
//     }
// }


// Use Not-Equal Syne 

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 != 0){
//         console.log(i)
//     }
// }


// just for use 

// for (let i = 1; i < 20; i+=2){
//     console.log(i)
// }


// Answer: 1,3,5,7,9,11,13,15,17,19 //






// ______for-loop-দিয়ে আমি কিভাবে বিভাজ্য করতে পারি______///


// Note: 5-দিয়ে বিভাজ্য করার নিয়ম

// for (let i = 1; i <= 30; i++) {
//     if(i % 5 == 0){
//         console.log(i)
//     }
// }

// Answer: 5,10,15,20,25,30




// Note: 3-দিয়ে বিভাজ্য করার নিয়ম

// for (let i = 1; i <= 30; i++) {
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }

// Answer: 3,6,9,12,15,18,21,24,27,30





// ____Note: (OR || ) use_____//

// for (let i = 1; i <= 30; i++) {
//     if(i % 3 == 0 || i % 5 == 0){
//         console.log(i)
//     }
// }

// Answer: 3,5,6,9,10,12,15,18,20,21,24,25,27,30





// ____Note: (AND && ) use_____// (তুমি আমাকে এমন সংখ্যা দেখাও যাকে ৩-দিয়ে ভাগ করা যায় আবার ৫-দিয়েও ভাগ করা যায়)

// for (let i = 1; i <= 30; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i)
//     }
// }

// Answer: 15,30 




// Note: বিভাজ্য ফলাফলের যোগফল 
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i)
//         sum = sum + i;
//     }
// }

// console.log('sum:', sum)


// Answer: 45