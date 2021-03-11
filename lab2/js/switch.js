const img1 = document.querySelector('#img_1')
const img_text = document.querySelector('.image_text')

function imgAnimate(time){//переход автоматически
    let count = 0
    setInterval(() => {
        ++count
        if(count%2==0) img1.className = 'image'
        else img1.className = 'image1'
    }, time);
}
let count = 0
    //переход при нажатии
function imgClick(){         
    setTimeout(() => {
        ++count
        if(count%2==0) {
            img1.className = 'image'
            img_text.innerHTML = 'welcom to<br> colorlib'
        }
        else {
            img1.className = 'image1'    
            img_text.innerHTML = 'free bootstrap 4<br> templates'
        } 
    }, 1000);
}     
