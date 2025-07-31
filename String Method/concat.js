const first = 'Mizanur';
const middle = 'Rahman';
const last = 'Hridoy';

const fullName1 = first + middle + last;
const fullName2 = first.concat(" ",middle," ", last)

console.log(fullName1);
console.log(fullName2);


// Ans:  MizanurRahmanHridoy                নর্মাল ভাবে 
//       Mizanur Rahman Hridoy              concat কে ব্যাবহার করে 


// Easyest think 

const like = "I".concat(" Love", " JavaScript")

console.log(like);


// Ans: I Love JavaScript       Love এবং JavaScript এর একটা স্পেস দিতে হয়েছে 