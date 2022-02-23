const hamburgerMenu = document.querySelector('#menuBtn');
const headerOverlay = document.querySelector('.header-overlay');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    console.log('click menu');
    if(headerOverlay.classList.contains('open-close-overlay')) {

        headerOverlay.classList.remove('open-close-overlay')  
        body.classList.remove('no-scroll')  
    } 
    else {
        
        body.classList.add('no-scroll')  
        headerOverlay.classList.add('open-close-overlay');
    }

})

// todo fixed navbar 

const nav = document.querySelector('.header-wrap')

window.addEventListener('scroll', () => {
   if(window.pageYOffset > nav.getBoundingClientRect().height){
       nav.classList.add('add-bg-header')
   }
   else {
        nav.classList.remove('add-bg-header')
   }
})