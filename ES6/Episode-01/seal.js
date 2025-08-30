const employee = {
    name: 'Mianur Rahman',
    designation: 'Web Dev',
    salary: 20000,
    experience: 1
}


Object.seal(employee)

// delete employee.designation
// delete employee.experience

employee.salary = employee.salary + 1000
employee.location = 'Dhaka'
console.log(employee)