const numbers = [1,2,3,4,5,6];

const tournament_runs = [[], [], [], []]

const exam_marks = [
    [78, 76, 98, 71, 88],
    [93, 95, 83, 77, 81],
    [97, 87, 84, 95, 79],
    [80, 74, 80, 98, 86]
]


// console.log(exam_marks[1]);
// console.log(exam_marks[0][3])

//  Arrayএর ভিতরে Array দিয়ে কিছু মান তৈরি করে সেই মানগুলোকে আমি ইনডেক্স দিয়ে চেক করছি। আবার চাইলে আমি মানগুলোকে পরিবর্তন করতে পারি। 




// exam_marks[2][3] = 56;

// console.log (exam_marks[2])





// আমি চাইলে push/pop করতে পারি



// exam_marks[0].pop()
// exam_marks[0].push(33)
// console.log(exam_marks)



// আমরা চাইলে এই ধরনের Array এর লুপ চালাতে পারি

for (const exam of exam_marks){
    console.log(exam[1])
}