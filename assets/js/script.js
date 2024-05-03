let btn = document.querySelectorAll('.container-stars button');
let tanks = document.querySelector('.end-result');
let rate = 0;

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        removeClass();
        btn[i].classList.add('active');
        rate = i + 1;
    })
}

rating.onclick = function(){
    if(rate == 0) {
        alert('Please select a rating')
    }else {
        tanks.classList.add('active');
        rated.innerText = rate;
    }
}
function removeClass () {
    // remove a class active
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('active');
    }
}