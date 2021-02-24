const textCenter = document.querySelector('.text_center')
const contentBlockList = document.querySelectorAll('.content_block')
const lastBlock = document.querySelectorAll('#last')
const lastText = document.querySelector('#last_text')
const img_2 = document.querySelector('#img_2')
const img_3 = document.querySelector('#img_3')
const footer_text = document.querySelector('#footer_text')
window.addEventListener('scroll', function() {
    if(pageYOffset < 140){
        textCenter.style.opacity = 0
        img_2.style.opacity = 0
        img_3.style.opacity = 0
        contentBlockList.forEach(element => {
            element.style.opacity = 0
            element.style.transform = 'translate(0,0)'
        });
    }
    if(pageYOffset < 3700){
        lastText.style.opacity = 0
        lastBlock.forEach((element,index) => {
            element.style.opacity = 0
            element.style.transform = 'translate(0,0)'
            
        });
        
    }
    else textCenter.style.opacity = 1
    if(pageYOffset > 200){
        contentBlockList.forEach((element,index) => {
            element.style.transition = `all ${(index+1)*0.5}s ease 0s`
            element.style.opacity = 1
            element.style.transform = 'translate(0,-60%)'
        });
        
    }
    if(pageYOffset > 700){
        img_2.style.opacity = 1
    }   
    if(pageYOffset > 1000){
        img_3.style.opacity = 1
    }   
    if(pageYOffset > 4000){
        lastBlock.forEach((element,index) => {
            lastText.style.opacity = 1
            lastText.style.transition = '1s'
            element.style.transition = `all ${(index+1)*0.3}s ease 0s`
            element.style.opacity = 1
            element.style.transform = 'translate(0,-35%)'
        });
        
    }
    if(this.pageYOffset<4500){
        footer_text.style.opacity = 0
        footer_text.style.transform = 'translate(0,0)'
    }
    if(this.pageYOffset>4900){
        footer_text.style.opacity = 1
        footer_text.style.transform = 'translate(0,-10%)'
    }
})