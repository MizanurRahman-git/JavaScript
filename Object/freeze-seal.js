// freeze এটা আসলে আপনার Object-এর মানকে কোনো ভাবেই কোনো কিছু পরিবর্তন হতে দিবে না। 

// That means, it's totaly locked. it will not change.


const identity = {
    firstName: 'Mizanur',
    latName: 'Rahman',
    age: 23,
    address: 'Rangpur',
    married: 'Unmarried',
    bloodGroup: 'B+'
};

// Object.freeze(identity);

// Attempt to modify the object  অর্থাৎ, এখন যদি আমি মান পরিবর্তন করি। তাহলে আসলে পরিবর্তন হবে না 


// identity.firstName = 'rinki';
// identity.latName = 'akter';
// identity.age = 20;
// identity.address = 'burirhat';
// identity.married = 'Married';
// identity.bloodGroup = 'A+';


// console.log(identity);

// Ans:  {
//          firstName: 'Mizanur',
//          latName: 'Rahman',
//          age: 23,
//          address: 'Rangpur',
//          married: 'Unmarried',
//          bloodGroup: 'B+'
//        }


//  উপরে দেখো মানগুলো পরিবর্তন করে দেওয়ার পরেও console.log-এ একটি মানও পরিবর্তন হয় নাই । কারণ আমি পুরো Object-কে  freeze করে দিয়েছি। যার কারনে সেটাকে আর পরিবর্তন করতে পারছি না। 





//  নর্মাল ভাবে কি হয়, একটা Object-কে আমরা কোনো কিছু পাল্টাতে পারি না। কিন্তু কখন কখন কিছু মান পরিবর্তন করার সুযোগ করে দিতে হয়।      
//  একজন ইউজার যদি তার নাম, পাসওয়ার্ড পরিবর্তন করতে না পারে তাহলে হলো না। তাই আমরা যা করতে পারি তা হলো  freeze-এর পরিবর্তে আমরা seal ব্যাবহার করতে পারি 



Object.seal(identity)



identity.firstName = 'rinki';      
identity.latName = 'akter';        
identity.age = 20;                  
identity.address = 'burirhat';      
identity.married = 'Married';       
identity.bloodGroup = 'A+';         


console.log(identity);



// Ans: {
//        firstName: 'rinki',
//        latName: 'akter',
//        age: 20,
//        address: 'burirhat',
//        married: 'Married',
//        bloodGroup: 'A+'
//      }



//  আমি চাইলে সবগুলো প্রপার্টির মান পরিবর্তন করতে পারি, আবার চাইলে একক কোনো প্রপার্টির মানকে পরিবর্তন করতে পারি