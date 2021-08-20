const menuElements = document.querySelectorAll('.nav__list > li > a');
const clearClasses = () => menuElements.forEach(e => e.classList.remove('active'));

menuElements.forEach(el => el.addEventListener('click', e => {
    clearClasses();
    e.target.classList.add('active') 
}))
