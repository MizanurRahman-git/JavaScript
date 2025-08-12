const students = ['abul', 'kabul', 'babul', 'cabul', 'abul', 'kabul', 'dabul']
const stdRollNum = [11,26,33,47,55,63,79,81,91,11,26,33,47]

function noDuplicate(array){
    const unique = []
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

console.log(noDuplicate(students))
console.log(noDuplicate(stdRollNum))