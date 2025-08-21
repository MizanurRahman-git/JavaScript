document.getElementById('btn-update-title').addEventListener('click', function(){
            const titleElement = document.getElementById('title-text')

            titleElement.innerText = 'Wow You did it'
})





document.getElementById('login-btn').addEventListener('click', function(){
            const changed = document.getElementById('change');

            changed.innerText = 'LogIn Succesfully'
})






document.getElementById('update-btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-text')
    const name = inputText.value
    const updateTitle = document.getElementById('update-title')
    updateTitle.innerText = name;
})