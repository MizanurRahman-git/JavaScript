const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const players = [{},{},{},{}]

const employes = [
    {name : 'Mizanur', designation : 'content writer', salary : 25000},
    {name : 'Rahman', designation : 'web developer', salary : 29000},
    {name : 'Hridoy', designation : 'manager', salary : 30000},
]

// console.log (employes[0])
// console.log (employes[0].designation)
// console.log (employes[2].designation)


// you can change any keys value 

employes[1].designation = 'Developer'





//  try with------> Loop 


for (const employe of employes){
    console.log(employe.designation,': ', employe.salary)
}