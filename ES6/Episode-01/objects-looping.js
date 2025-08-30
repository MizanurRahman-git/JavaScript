const numbers = [1, 2, 3, 4, 5, 6, 7]

for(const num of numbers){
    console.log(num)
}



const employee = {
    name: 'Mianur Rahman',
    designation: 'Web Dev',
    salary: 20000,
    experience: 1
}

for (const key in employee){
    const value = employee[key];
    console.log(key, value)
}