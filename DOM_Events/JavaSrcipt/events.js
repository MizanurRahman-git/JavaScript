function makeYellow(){
            document.body.style.backgroundColor = 'yellow';
}




// Use ID selector

const btnMakeBlue = document.getElementById('btn-make-blue')
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue'
}





// Optional 


 const btnMakePurple = document.getElementById('btn-make-purple')

        btnMakePurple.onclick = makePurple;

        function makePurple(){
            document.body.style.backgroundColor = 'purple'
}




// ********AddEventListener Most Useble method*********

document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green'
})




// I use the Anonymous function. Thats means there are no function name

document.getElementById('btn-make-gold').addEventListener('click', function(){
            document.body.style.backgroundColor = 'gold'
})