const stringValues = document.querySelectorAll('.btns-wrap')
const displayNum = document.querySelector('#displayNum')
const calculateNum = document.querySelector('#calculateNum')


let display = ''

stringValues.forEach(x=>{
    x.addEventListener('click',(y)=>{
        display += y.target.innerHTML
        displayNum.innerHTML = display
        
    })
})
const clearAll = ()=>{
    
    displayNum.innerHTML = '0'
    display = ''
    calculateNum.innerHTML = ''
}


const calculateSum = ()=>{
    calculateNum.innerHTML = eval(display)
}

const backspace = () =>{
    
  
    display = display.substring(0,display.length-1)
    displayNum.innerHTML = display
    
    if(display==='') {
        displayNum.innerHTML = 0
    }
   
   
}
