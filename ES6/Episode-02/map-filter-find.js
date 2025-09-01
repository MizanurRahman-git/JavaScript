const students =[
    {ID:1, name: 'Mizanur', Marks: 50},
    {ID:2, name: 'Rahman', Marks: 60},
    {ID:3, name: 'Hridoy', Marks: 70},
    {ID:4, name: 'Emon', Marks: 80},
    {ID:5, name: 'Lion', Marks: 90},
]


const names  = students.map(student => student.name)
 
const marks  = students.map(student => student.Marks)

const incoursemarks  = students.map(student => student.Marks * 0.75)

const goodStudents  = students.filter(student => student.Marks > 65)

const goodStudent  = students.find(student => student.Marks > 65)


console.log(names)
console.log(marks)
console.log(incoursemarks)
console.log(goodStudents)
console.log(goodStudent)