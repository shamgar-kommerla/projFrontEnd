// const hamb = document.getElementById('hamburger');
// const navBg = document.getElementById('nav-bg');
// const navList = document.getElementById('nav-list');
// // console.log(hamb.children);
// hamb.addEventListener('click', ()=> {
//     // console.log('clicked');
//     if(hamb.children[0].classList.length<=1){
//         hamb.children[0].classList.add('bar1-change');
//         hamb.children[1].classList.add('bar2-change');
//         hamb.children[2].classList.add('bar3-change');
//         navBg.classList.add('nav-bg-change');
//         setTimeout(()=>{
//             navList.classList.add('nav-list-change');
//         },300)
//     }else{
//         hamb.children[0].classList.remove('bar1-change');
//         hamb.children[1].classList.remove('bar2-change');
//         hamb.children[2].classList.remove('bar3-change');
//         navList.classList.remove('nav-list-change');
//         setTimeout(() => {
//             navBg.classList.remove('nav-bg-change')
//         },300);
//     }
    
// })




document.body.style.position = 'fixed';
const prel =document.getElementById('preloader');
window.addEventListener('load',() => {
    setTimeout(()=> {
        prel.parentElement.removeChild(prel.parentElement.children[0]);
        document.body.style.position = '';
    },1000);
});



let toggler = document.getElementById('hm');
    let bgc = document.getElementsByClassName('bg');
    let list = document.getElementsByClassName('list');
    // console.log(list[0].classList.length);
    console.log(toggler.children);
    toggler.addEventListener('click', () =>{
      if(bgc[0].classList.length <= 1){
        bgc[0].classList.add('bg-change');
        // console.log(bgc[0].classList);
      }else{
        bgc[0].classList.remove('bg-change');
      }

      if(list[0].classList.length <=1){
        list[0].classList.add('list-change')
      }else{
        list[0].classList.remove('list-change')
      }


      if(toggler.children[0].classList.length<=1){
            toggler.children[0].classList.add('bar1-change');
            toggler.children[1].classList.add('bar2-change');
            toggler.children[2].classList.add('bar3-change');
        }else{
            toggler.children[0].classList.remove('bar1-change');
            toggler.children[1].classList.remove('bar2-change');
            toggler.children[2].classList.remove('bar3-change');
            
        }

    });