function add (a , b){
    console.log(arguments)
    const params = [...arguments]
    console.log(params)
}

add(2,5,8,9,4)