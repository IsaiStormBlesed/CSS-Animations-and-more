const thumbnails = document.querySelectorAll('.slider li')
const bg = document.querySelector('.bg')
const hamburgerMenu = document.querySelector('.toggle')
const nav = document.querySelector('.navigation')

//Change the bg color
const changeBgColor = color => {
    bg.style.background = color
}

//Insert the img on imgBox
const fruitSlider = (fruit) => {
    document.querySelector('.fruitContainer').src = fruit
}



//Add 'activee' class 
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(thumb => thumb.classList.remove('activee'))
        thumb.classList.add('activee')
    })
})

hamburgerMenu.onclick = () => {
    hamburgerMenu.classList.toggle('active')
    nav.classList.toggle('active')
}


