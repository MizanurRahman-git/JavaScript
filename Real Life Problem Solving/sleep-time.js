function calculateSleepTime(numners){
    let sum = 0 ;

    for (const number of numners){
        if(typeof number !== "number"){
            return "Invalid"
        }
        sum = sum + number;
    }

    let totalSecond = sum;

    let hour = Math.floor(totalSecond / 3600);

    sleepSecond = totalSecond % 3600;

    let minute = Math.floor(sleepSecond / 60);

    sleepSecond = sleepSecond % 60;



    let result = {
        Hour : hour,
        Minute : minute,
        Second : sleepSecond
    }

    return result
}


console.log(calculateSleepTime([1000, 499, 519, 300] ))
console.log(calculateSleepTime([1000, 2000, 725]))
console.log(calculateSleepTime([100, 3800] ))
console.log(calculateSleepTime([]))
console.log(calculateSleepTime([5600]))
console.log(calculateSleepTime([100, 3800, "90" ]))