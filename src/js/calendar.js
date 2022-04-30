import {d,b} from './variables.js'

export default function calendar (){
    createDays(counterMonths,counterYears);
    displayCurrentday();
}

const daysMonthContainer = d.querySelector(".days-month");
const containerCurrentDate = d.querySelector(".calendar__current-date");
const containerHeaderCalendar = d.querySelector(".heading-month-container");
const dateToday = new Date;
const headingDateCalendar = d.querySelector(".date-calendar")
const prevBtn = d.querySelector(".prev-btn");
const nextBtn = d.querySelector(".next-btn");
const pickerCalendar = d.querySelector("#inputCalendar");
let counterMonths = dateToday.getMonth();
let counterYears = dateToday.getFullYear();
const daysOfWeek = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


function createDays(month, year) {
    containerHeaderCalendar.innerHTML = "";
    daysMonthContainer.innerHTML = "";



    const lastDayCurrentMonth = new Date(year, month + 1, 0).getDate();
    const lastDayPrevMonth = new Date(year, month, 0).getDate();
    const indexFirstDayOfCurrentMonth = new Date(year, month, 1).getDay();
    const indexLastDayOfCurrentMonth = new Date (year, month, lastDayCurrentMonth).getDay();
    const numDaysNextMonth = 6 - indexLastDayOfCurrentMonth;
   

    headingDateCalendar.textContent = "test";
// Create a function outside this function, to get month and year from counters, and at the finish run de main function to upload the numbers in counter variables

//then create heading in this function and get outside the picker from the heading container

   // dateDisplayCalendar.textContent = `${months[counterMonths]}${year}`;
//   inputCalendar.value = `${year}-${month <= 8 ? ""+0+(month+1) : month+1}`;

   

    //listener to change date when user set a date in input calendar
    // inputCalendar.addEventListener("change",()=>{
    //     console.log(parseInt(inputCalendar.value.split("-")[0]));
    //     counterMonths = parseInt(inputCalendar.value.split("-")[1]) - 1;
    //     counterYears = parseInt(inputCalendar.value.split("-")[0]);
    //     dateDisplayCalendar.textContent = `${months[month]}${year}`;
    // })
    

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

//events listeners

pickerCalendar.addEventListener("change",(e)=>{
    
})


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

function displayCurrentday() {
    const currentDate = d.createElement("a");
    currentDate.href = "#";
    currentDate.classList.add("full-current-date")
    currentDate.textContent = `${daysOfWeek[dateToday.getDay()]} ${dateToday.getDate()}, ${months[dateToday.getMonth()]}, ${dateToday.getFullYear()}`
    containerCurrentDate.appendChild(currentDate);
}




