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
    const textButtons = d.querySelectorAll(".link-btn__text");
    const menuButtons = d.querySelectorAll(".link-btn");
    const logoAsideBar = d.querySelector(".aside-logo");
    const toolTip = d.querySelectorAll(".tooltip");
    const pageContent = d.querySelector(".page-content");

    openAsideBtn.addEventListener("click",e=>{
        if(e.target === openAsideBtn || e.target.parentNode.contains(openAsideBtn)){
            navigationBar.classList.toggle("active-desktop")


            //openAsideBtn.classList.toggle("aside-active");
            logoAsideBar.classList.toggle("aside-active");
            textButtons.forEach(item =>{item.classList.toggle("aside-active")})
            menuButtons.forEach(item =>{item.classList.toggle("aside-active")})
            toolTip.forEach(item =>{item.classList.toggle("aside-active");})
            pageContent.classList.toggle("aside-active")
        }
    })
}