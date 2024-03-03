// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import persons from "./modules/persons";
persons();

import steps from "./modules/steps";

steps();
















// function show(index){
//     cards[imageIndex].classList.remove("active");
//     cards[index].classList.add("active");
//     imageIndex = index;
// }

// controls.forEach((e)=>{
//     e.addEventListener("click",()=>{
//     if(event.target.classList.contains("persons__arrow-left")) {
//         let index=imageIndex-1;
//         if(index < 0) {
//             index = cards.length-1;
//         }
//         show(index);
//     } else if (event.target.classList.contains("persons__arrow-right")){
//         let index=imageIndex + 1;
//         if(index>=cards.length) {
//             index=0;
//         }
//         show(index)
//     }
//     })
// })

// show(imageIndex)