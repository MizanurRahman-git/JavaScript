let data;
data =0
data  = ''          //empty sring is falsy
data  = ' '         // has an white space
data  = '0'   
data = false   
data = true   
data = null   
data = {}   
data = []   
data = true 

console.log('value of data-->', data)


if(data){
    console.log('value of data is truthy')
}
else {
    console.log( data, ' is falsy')
}


// if i need to capture the falsy value to go inside if block
// use logical not (!)


if (!data){
    console.log('inside if with a falsy value')
}



// capture all positive value
// double logical not (!!)
// capture any value to boolean (true false)

if(!!data){
    console.log('only true inside the double not')
}