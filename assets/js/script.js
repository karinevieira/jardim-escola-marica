let menu = document.querySelector('.menu_mobile')
menu.addEventListener('click', () => {
    let ul = document.querySelector('ul')
    if(ul.style.display == 'flex'){
        ul.style.display = 'none'
    } else {
        ul.style.display = 'flex'
    }
})

let totalSlides = document.querySelectorAll('.slider_item').length
let currentSlide = 0

let sliderWidth = document.querySelector('.slider').clientWidth

// document.querySelector('.slider_width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider_width').style.width = `${sliderWidth * totalSlides}px`

document.querySelector('.slider_controls').style.width = `${sliderWidth}px`
document.querySelector('.slider_controls').style.height = `${document.querySelector('.slider').clientHeight}px`

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }
    updateMargin()
}

function goNext(){
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin()
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider_item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.slider_width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000)