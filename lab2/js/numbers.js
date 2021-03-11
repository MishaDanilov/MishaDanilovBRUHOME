const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
let count1 = 1.0
let count2 = 1.0
window.addEventListener("scroll",()=>{
    if(pageYOffset>3000){
        let interval = setInterval(() => {
            if(count1>49.02) {
                clearInterval(interval)
                return 
            }
            count1+=0.11
            count2+=0.5
            num1.innerHTML = parseFloat(count1).toFixed(3)
            num2.innerHTML = parseInt(count2)
        }, 1000);
    }
    
})
