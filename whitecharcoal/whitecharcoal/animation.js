var element = document.querySelectorAll('.animate');

for (let i = 0; i < element.length; i++) {
    window.addEventListener('scroll', (e) => {
        var positionY = element[i].getBoundingClientRect().top - (window.innerHeight / 2);
        
        if (positionY <= 0) {
            element[i].classList.add('active');
        } else {
            element[i].classList.remove('active');
        }
    })
}