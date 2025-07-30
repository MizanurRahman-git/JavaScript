// Shift / Unshift হচ্ছে Push / Pop  এর একদম বিপরীত যেমন: Push/Pop ভেলু এর সবার পিছনে কাজ করে আর Shift/Unshift একদম সামনে কাজ করে । 


// কয়েকটা উদহারণ দেখা যাক 


// এটা আমরা String দিয়ে ট্রাই করি 


// shift মুলত Pop এর মত কোনো ভেলু কে বাতিল করে । 



// const name = ['hridoy', 'mizanur', 'rahman', 'assad'];

// name.shift()

// console.log(name)


// Answer: [ 'mizanur', 'rahman', 'assad' ]




// এখন আমরা দেখতে চাই    আমি বাদ করলাম কাকে 


// const name = ['hridoy', 'mizanur', 'rahman', 'assad'];

// const shift1 = name.shift()

// console.log(shift1)


// Answer: 'hridoy'









// আমরা এখন কাজ করবো Unshift এর । এটা মূলত Push এর মত যুক্ত করে 


// const name = ['hridoy', 'mizanur', 'rahman', 'assad'];

// name.unshift('MD')

// console.log(name)


// Answer: [ 'MD', 'hridoy', 'mizanur', 'rahman', 'assad' ]