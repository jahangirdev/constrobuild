document.addEventListener('scroll', () =>{
    var header = document.querySelector('header.site-header');
    if(scrollY>100) {
        header.classList.add('sticky-header');
    }
    else if(scrollY<1){
        header.classList.remove('sticky-header');
    }
});