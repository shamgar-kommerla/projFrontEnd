const x = document.getElementById('toggler')
const y = document.getElementById('nav-toggled')
// console.log(x.children[0].children);
let children = x.children[0].children;
console.log(children);
// children[0].classList.add('l1-trans');

x.addEventListener('click', ()=> {
    console.log("toggled");
    if(y.classList.length === 0){
        console.log('no classes');
        y.classList.add('trans-effect');
    }else{
        console.log('yes classes');
        y.classList.remove('trans-effect');
    }
   for(var i = 0; i<children.length;i++){
        if((children[i].classList.length <= 1) && (i == 0)){
            children[i].classList.add('l1-trans')
        }else{
            children[i].classList.remove('l1-trans')
        }
        if((children[i].classList.length <= 1) && (i == 1)){
            children[i].classList.add('l2-trans')
        }else{
            children[i].classList.remove('l2-trans')
        }
        if((children[i].classList.length <= 1) && (i == 2)){
            children[i].classList.add('l3-trans')
        }else{
            children[i].classList.remove('l3-trans')
        }
   }
    
})
