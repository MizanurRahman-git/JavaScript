const student = {
    name: 'Mizanur Rahman',
    1:40,
    family:{
        title: 'Chowdhury',
        // mother: {
        //     name: 'let. Rumi',
        //     age: 45
        // }
    },
    marks: 90,
    'home-address': 'rangpur'
}


// console.log(student.family.mother.age)

// এখন ধরো, কোনো কারনে কারো যদি মা না থাকে তাহলে কিন্তু error  খাবা । তাহলে উপায় কি।

console.log(student.family.mother?.age)     //etake bole optional chain


// এখন কিন্তু আর আমাকে error দিবে না। আমাকে শুধু undefined দিবে