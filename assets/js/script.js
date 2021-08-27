let menu = document.querySelector('.menu_mobile')
menu.addEventListener('click', () => {
    let ul = document.querySelector('ul')
    if(ul.style.display == 'flex'){
        ul.style.display = 'none'
    } else {
        ul.style.display = 'flex'
    }
})