import {d,b} from './variables.js'

export default function calendar (){
    runEventListeners();
    createDays(counterMonths,counterYears);
    displayCurrentday();
}

const daysMonthContainer = d.querySelector(".days-month");
const containerCurrentDate = d.querySelector(".calendar__current-date");
const headingMonthContainer = d.querySelector(".heading-month-container")
const dateToday = new Date;
const prevBtn = d.querySelector(".prev-btn");
const nextBtn = d.querySelector(".next-btn");
let counterMonths = dateToday.getMonth();
let counterYears = dateToday.getFullYear();
const daysOfWeek = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


function createDays(month, year) {

    daysMonthContainer.innerHTML = "";
    headingMonthContainer.innerHTML= "";



    const lastDayCurrentMonth = new Date(year, month + 1, 0).getDate();
    const lastDayPrevMonth = new Date(year, month, 0).getDate();
    const indexFirstDayOfCurrentMonth = new Date(year, month, 1).getDay();
    const indexLastDayOfCurrentMonth = new Date (year, month, lastDayCurrentMonth).getDay();
    const numDaysNextMonth = 6 - indexLastDayOfCurrentMonth;
   

    //display in header of calendar the month user is seeing
    const monthInCalendar = d.createElement("h3");
    monthInCalendar.textContent = `${months[month]} ${year}`;
    monthInCalendar.classList.add("month-calendar");
    headingMonthContainer.appendChild(monthInCalendar);
    

    
    //creating days of previous month
    for (let i = indexFirstDayOfCurrentMonth; i > 0; i--) {
        const prevMonthDay = d.createElement("p");
        prevMonthDay.textContent = lastDayPrevMonth - i + 1;
        prevMonthDay.classList.add("day","other-month-day");
        daysMonthContainer.appendChild(prevMonthDay);
        
    }


    // creating days of current month
    for (let i = 1; i <= lastDayCurrentMonth; i++) {
        const day = d.createElement("p");
        day.textContent = i;
        if(dateToday.getDate() === i && dateToday.getMonth() === month && dateToday.getFullYear() === year){
            day.classList.add("today");
        }
        day.classList.add("day")
        daysMonthContainer.appendChild(day)
    }

    //creating days of next month
    for (let i = 1; i <= numDaysNextMonth; i++) {
        const nextMonthDay = d.createElement("p");
        nextMonthDay.textContent = i;
        nextMonthDay.classList.add("day","other-month-day")
        daysMonthContainer.appendChild(nextMonthDay)
    }
    

    

    
}

function runEventListeners() {
    prevBtn.addEventListener("click",()=>{
        counterMonths = counterMonths -  1; 
        if(counterMonths < 0){
            counterMonths = 11;
            counterYears = counterYears - 1;
            createDays(counterMonths, counterYears);
        } else {
            createDays(counterMonths, counterYears);
        }
    })
    
    nextBtn.addEventListener("click",()=>{
        counterMonths = counterMonths + 1; 
        if(counterMonths > 11){
            counterMonths = 0;
            counterYears = counterYears + 1;
            createDays(counterMonths, counterYears);
        } else {
            createDays(counterMonths, counterYears);

        }
    })

    containerCurrentDate.addEventListener("click",e=>{
        if(e.target.classList.contains("full-current-date")){
            counterMonths = dateToday.getMonth();
            counterYears = dateToday.getFullYear(); 
            createDays(counterMonths,counterYears);
        }
    })

}

function displayCurrentday() {
    const currentDate = d.createElement("a");
    currentDate.href = "#";
    currentDate.classList.add("full-current-date")
    currentDate.textContent = `${daysOfWeek[dateToday.getDay()]} ${dateToday.getDate()}, ${months[dateToday.getMonth()]}, ${dateToday.getFullYear()}`
    containerCurrentDate.appendChild(currentDate);
}




