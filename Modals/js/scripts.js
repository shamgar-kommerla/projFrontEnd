let sign = document.getElementById('signUpModal');
let modalContainer = document.getElementsByClassName('modal-container-1');
let closeBtn = document.getElementById('modal-close-btn');
console.log(closeBtn);
// console.log(modalContainer[0]);
    
sign.addEventListener('click', ()=> {
    modalContainer[0].style.zIndex = 3;
    modalContainer[0].style.backgroundColor = '#f1f1f1';
    if(modalContainer[0].children[0].classList.length <=1){
        modalContainer[0].children[0].classList.add('modal-transition');
    }else{
        modalContainer[0].children[0].classList.remove('modal-transition');
    } 
})

closeBtn.addEventListener('click', () => {
    // modalContainer[0].classList.remove('modal-add-ons');
    if(modalContainer[0].children[0].classList.length > 1){
        modalContainer[0].children[0].classList.remove('modal-transition');
        setTimeout(()=> {
            modalContainer[0].style.zIndex = -1;
            modalContainer[0].style.backgroundColor = '#fff';
        },100);
        
    }
})