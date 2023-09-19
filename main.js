let button = document.querySelector('.button');
let form = document.querySelector('.form');

button.addEventListener('click', function(){
    if (form.classList.contains('butt')){
        form.classList.remove('butt')
    } else {
        form.classList.add('butt')
    }
});
