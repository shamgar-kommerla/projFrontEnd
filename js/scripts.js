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
    // console.log(toggler.children);
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



    let navSelect = document.querySelector('nav');
    let barSelect = document.querySelector('#hm');
    console.log(barSelect.children);
    
    let scrollChange = () => {
      var headSec = document.querySelector('header');
      // console.log(headSec);
      document.addEventListener('scroll', () => {
        var headPos = headSec.getBoundingClientRect().top;
        // console.log(headPos);
        if(headPos <= -650 ){
          navSelect.classList.add('n-change');
          for(let i=0;i<3;i++){
            barSelect.children[i].style.backgroundColor= '#3f007a';
          }
        }else{
          navSelect.classList.remove('n-change');
          for(let i=0;i<3;i++){
            barSelect.children[i].style.backgroundColor= '#fff';
          }
        }
      });
    }

    scrollChange();