//1. We are gonna use the 'onchange' event. This is gonna execute some JS when an option in the select changes
//2. Using 'this' we are gonna send the option value too the function
//3. To insert the text we are gonna use the .options array 
//then we use th el .text to change the bg text

const bg = document.querySelector('.bg')
/* function changeColor(getColor) {
    const bg = document.querySelector('.bg')
    const color = getColor.value;
    bg.style.background = color
}
 */

const changeColor = select => {
    bg.style.backgroundColor = select.value
    const text = select.options[select.selectedIndex].text
    bg.innerHTML = text
}
