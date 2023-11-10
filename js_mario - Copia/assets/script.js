
var mario = document.querySelector(".mario")

function pular(){
    mario.classList.add('pulo')
    
    setTimeout(() => {
        mario.classList.remove('pulo')  
    },500)
}

document.addEventListener("keydown", pular)