// function for toggle class

let selector= function(element){
    return document.querySelector(element);
}

let menuToggle = selector('.menu-toggle');
let body = selector('body');

menuToggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

