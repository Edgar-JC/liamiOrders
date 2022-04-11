import {d,b} from './variables.js';

export default function hamburgerMenu() {
    activateHamburgerButton();
    openAsideBar();
}

const navigationBar = d.querySelector("#navigationBar");

function activateHamburgerButton() {
    const hamburgerBtn = d.querySelector("#hamburgerBtn");
    const linesOfBtn = hamburgerBtn.querySelectorAll(".line")
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
    const arrowsIcon = d.querySelector(".icon-arrows-aside");
    const test = d.querySelectorAll(".nav-bar__text");//<------- delete this line
    //TRY TO FIND THE WAY TO SHOW THE TEXT OF EACH LI, BUT REMOVE THEM WHEN ASIDE IS CLOSED
    openAsideBtn.addEventListener("click",e=>{
        if(e.target === openAsideBtn || e.target.parentNode.contains(openAsideBtn)){
            navigationBar.classList.toggle("active-desktop")
            arrowsIcon.classList.toggle("active");
            test.forEach(item =>{item.style.display = "block"}) //<------ Delete this line
        }
    })
}