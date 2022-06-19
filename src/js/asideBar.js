import {d,body} from './variables.js';

export default function hamburgerMenu() {
    activateHamburgerButton();
    openAsideBar();
    openUserModal();
    closeUserModal();
}

const navigationBar = d.querySelector("#navigationBar");
const userModal = d.querySelector(".user-modal")

function activateHamburgerButton() {
    const hamburgerBtn = d.querySelector("#hamburgerBtn");
    const linesOfBtn = hamburgerBtn.querySelectorAll(".line")
    
    //listener to active mobile class
    hamburgerBtn.addEventListener("click",(e)=>{
        if(e.target.id === "hamburgerBtn"|| e.target.parentNode.id === "hamburgerBtn"){
            navigationBar.classList.toggle("active-mobile");
            body.classList.toggle("no-scroll");
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



function openUserModal() {
    const userButton = d.querySelector(".user-info");
    d.addEventListener("click",(e)=>{
        if(userButton.contains(e.target)){
            userModal.toggleAttribute("open");
            return;
        }
        if(!userModal.contains(e.target)){
            userModal.close();   
        }      
    })
}

function closeUserModal() {
    const closeModalBtn = d.querySelector("#closeModalBtn");
    closeModalBtn.addEventListener("click",()=>{
        userModal.close();
    })
}



