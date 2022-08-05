import {roll} from "./helper.js"

let newRoll = roll()

let toHit = dc => {
    if (newRoll > dc) {
        return "success"
    } else {
        return "fail"
    }
}

console.log(toHit(10))





//let button = document.querySelector('#button');
//let image = document.querySelector('#img')

//button.addEventListener('click', ()=> {
//    image.classList.toggle('reveal');
//})





