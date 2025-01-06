const button = document.querySelector('.love')
const heart = document.querySelector('.heart')
const move = document.querySelector('.i')
const you = document.querySelector('.you')
const dark = document.querySelector('.dark')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const check = document.querySelector('.check')
const me = document.querySelector('.me')
const display = document.querySelector('.display')
const key = document.querySelector('.key')
const textarea = document.getElementById('textarea')
const totalC = document.querySelector('.totalC')
const totalR = document.querySelector('.totalR')

let isTogggled = false;

me.addEventListener('click', ()=>{
  if(check.type === 'password'){
    check.type = 'text'
    me.innerHTML = 'hide'
    

  }else{
    check.type = 'password'
    me.innerHTML = 'show'
  }
})

dark.addEventListener('click',()=>{
    body.classList.toggle('active')
    if(dark.innerHTML === 'darkmode'){
        dark.innerHTML = 'Lightmode'
        move.style.color = 'red'

    }else if(dark.innerHTML === 'Lightmode'){
        dark.innerHTML = 'darkmode'
        move.style.color = 'black'
    }
})


button.addEventListener('click',()=>{
    heart.classList.toggle('active')
    move.classList.toggle('active')

  if(heart.classList.toggle === 'active'){
    heart.classList.toggle = ''
  }else if(button.innerHTML === 'love'){
    button.innerHTML = 'favour'
    button.style.color = 'red'
    button.style.backgroundColor = 'orange'
    
  }else if(button.innerHTML === 'favour' && button.style.color === 'red'){
    button.innerHTML = 'love'
    button.style.color = 'black'
    button.style.backgroundColor = 'white'
  }
  
})

function appendToDisplay(input){
  display.value = display.value + input;
}

function calculate(){
  display.value = eval(display.value)
}

function clearDisplay(){
  display.value = ''
}

textarea.addEventListener('keydown', () =>{
   updateCounter();

})

function updateCounter(){
  totalC.innerHTML = textarea.value.length;
  totalR.innerHTML = textarea.getAttribute('maxlength') - totalC.innerHTML;

  
}

// dark.addEventListener('click',()=>{
//     isTogggled = !isTogggled
//     body.style.setProperty('--value',
//       isTogggled ? 'black' : 'white')
// })

