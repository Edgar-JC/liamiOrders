import {d,b} from './variables.js';

export default function hamburgerMenu() {
    activateHamburgerButton();
    openAsideBar();
}

const navigationBar = d.querySelector("#navigationBar");

function activateHamburgerButton() {
    const hamburgerBtn = d.querySelector("#hamburgerBtn");
    const linesOfBtn = hamburgerBtn.querySelectorAll(".line")
    
    //listener to active mobile class
    hamburgerBtn.addEventListener("click",(e)=>{
        if(e.target.id === "hamburgerBtn"|| e.target.parentNode.id === "hamburgerBtn"){
            navigationBar.classList.toggle("active-mobile");
            b.classList.toggle("no-scroll");
            linesOfBtn.forEach(item => {
                item.classList.toggle("active-mobile")
            })
        }
    })
}

function openAsideBar() {
    const openAsideBtn = d.querySelector(".open-aside-btn");
    openAsideBtn.addEventListener("click",e=>{
        if(e.target === openAsideBtn || e.target.parentNode.contains(openAsideBtn)){
            navigationBar.classList.toggle("active-desktop")
        }
    })
}