const d = document;
const body = d.querySelector("body");

function runFunctions() {
    activateHamburgerButton();
    calendar();
}
runFunctions();


function activateHamburgerButton() {
    const hamburgerBtn = d.querySelector("#hamburgerBtn");
    const navigationBar = d.querySelector("#navigationBar");
    const linesOfBtn = hamburgerBtn.querySelectorAll(".line")
    hamburgerBtn.addEventListener("click",(e)=>{
        if(e.target.id === "hamburgerBtn"|| e.target.parentNode.id === "hamburgerBtn"){
            navigationBar.classList.toggle("active");
            body.classList.toggle("no-scroll");
            linesOfBtn.forEach(item => {
                item.classList.toggle("active")
            })
        }
    })
}

//try to print all the days in the actual month
function calendar() {
    const daysMonthContainer = d.querySelector(".days-month");



    const dateToday = new Date;
    const actualMonth = dateToday.getMonth();
    const daysActualMonth = new Date(dateToday.getFullYear(), actualMonth + 1, 0).getDate();
    const daysPrevMonth = new Date(dateToday.getFullYear(), actualMonth, 0).getDate();
    const dayOfWeekFirstDay = new Date(dateToday.getFullYear(), actualMonth, 1).getDay();

    console.log(dayOfWeekFirstDay);

    for (let i = 1; i <= daysActualMonth; i++) {
        if(i < (dayOfWeekFirstDay - 1)){
            const dayPrevMonth = d.createElement("p");
            dayPrevMonth.textContent = i + 27;
            dayPrevMonth.classList.add("day");
            daysMonthContainer.appendChild(dayPrevMonth);
        }
        
        const day = d.createElement("p");
        day.textContent = i;
        day.classList.add("day")
        
        daysMonthContainer.appendChild(day)
    }
}

