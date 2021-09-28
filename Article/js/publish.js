
const prel =document.getElementById('preloader');
window.addEventListener('load',() => {
    setTimeout(()=> {
        prel.parentElement.removeChild(prel.parentElement.children[0]);
    },500);
});