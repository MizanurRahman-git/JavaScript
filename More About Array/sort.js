const num = [8,4,3,6,7,1,9,2,5];

// console.log (num);
// num.sort()
// console.log(num);






const friends = ['hridoy', 'mizanur', 'rahman', 'ringki', 'nazat', 'nuha'];

// friends.sort()
// console.log(friends)







const my_Home_Membars_Age = [23,100,65,19,33,29,15,9,12,3];

// my_Home_Membars_Age.sort()

// console.log(my_Home_Membars_Age)

// Ans:     100, 12, 15, 19, 23,29,  3, 33, 65,  9

// এটা কি সাজানো হয়েছে।         উত্তর হলো না । কিন্তু কেনো ? 
//  আসলে এই "sort()" কাজ করে ইংরেজি অক্ষরের ধারাবাহিকতার উপর যেমনঃ a,b,c,d,e,f etc। এখন আমাদের ধারনা আছে a দিয়ে যতগুলো শব্দ থাকবে সেগুলো কিন্তু আগে আসবে right?

// like: alomgir, al-amin, alom etc     এই নাম গুলো আগেই আসবে 
// এবং "sort()" প্রতিটি ইনডেক্সে চেক করে আবার কথা  a আসে নাকি। যদি থাকে তাহলে, সে তাকেই আগে বসাবে 





// এখন আমরা দেখবো যদি কখন প্রয়োজন হয় যে আমি আমার নাম্বার ছোট থেকে বড় সাজাবো তাহলে কিভাবে করবো।    

//   চলো দেখা যাক 



// const ages = my_Home_Membars_Age.sort(function(a,b){return a - b})

// console.log(ages)

// Ans:  3,  9, 12, 15,  19,23, 29, 33, 65, 100

// এটাকে বলা হয় Ascending মানে ছোট থেকে বড়।


// আরও একটা আসে সেটা হলো descending অর্থাৎ বড় থেকে ছোট।           চলো দেখা যাক 




  const ages = my_Home_Membars_Age.sort(function(a,b){return b - a})

console.log(ages)


// Ans:     100, 65, 33, 29, 23,19, 15, 12,  9,  3

// সহজ একটু বুঝলে
   