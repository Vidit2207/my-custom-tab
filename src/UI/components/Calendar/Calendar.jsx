import React, { useEffect, useState } from "react";

// const daysTag = document.querySelector(".days"),
// currentDate = document.querySelector(".current-date"),
// prevNextIcon = document.querySelectorAll(".icons span");
// // getting new date, current year and month
// let date = new Date(),
// currYear = date.getFullYear(),
// currMonth = date.getMonth();
// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // const [firstDay, setFirstDay] = useState(new Date(new Date().getYear(), new Date().getMonth(), 1).getDay())
  // const [lastDate, setLastDate] = useState(new Date(new Date().getYear(), new Date().getMonth()+1, 0).getDate())
  // const renderCalendar = () => {
  //     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
  //     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
  //     lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
  //     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  //     let liTag = "";
  //     for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
  //         liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  //     }
  //     for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
  //         // adding active class to li if the current day, month, and year matched
  //         let isToday = i === date.getDate() && currMonth === new Date().getMonth()
  //                      && currYear === new Date().getFullYear() ? "active" : "";
  //         liTag += `<li class="${isToday}">${i}</li>`;
  //     }
  //     for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
  //         liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
  //     }
  //     currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  //     daysTag.innerHTML = liTag;
  // }

  // useEffect(()=>{
  //     renderCalendar()
  // },[])

  const renderCalendar = (currentMonth, currentYear) => {
    const currentDate = new Date();
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth, 0).getDate();
    console.log(currentMonth, currentYear, firstDay, lastDate);
    let dates = document.getElementsByClassName("calendar__date");
    for (let i = 0; i < dates.length; i++) {
      dates[i].innerText = null;
      dates[(i + firstDay) % 35].classList.remove("calendar__date--active");
    }
    for (let i = 0; i < lastDate; i++) {
      dates[(i + firstDay) % 35].innerText = i + 1;

      if (
        currentDate.getDate() === i + 1 &&
        currentMonth === currentDate.getMonth() + 1 &&
        currentYear === currentDate.getFullYear()
      ) {
        dates[(i + firstDay) % 35].classList.add("calendar__date--active");
      }
    }
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    // renderCalendar(12, 2023)
    renderCalendar(currentMonth, currentYear);
  }, []);

  const handleNextMonth = () => {
    let nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    let nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;

    setCurrentMonth(nextMonth);
    setCurrentYear(nextYear);

    renderCalendar(nextMonth, nextYear);
  };
  const handlePreviousMonth = () => {
    let prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    let prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    setCurrentMonth(prevMonth);
    setCurrentYear(prevYear);

    renderCalendar(prevMonth, prevYear);
  };

  const handleYearTextChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
    renderCalendar(currentMonth, parseInt(e.target.value));
  };
  return (
    <div className="calendar-container">
      <div className="calendar-controls">
        <div
          className="calendar-controls__arrow calendar-controls__arrow--left"
          onClick={handlePreviousMonth}
        >
          {" "}
          &#11164;{" "}
        </div>

        <div className="calendar-controls__current">
          <p className="calendar-controls__current--text calendar-controls__current--month">
            {months[currentMonth - 1]}
          </p>
          <input
            type="number"
            name="controlYear"
            id="controlYear"
            className="calendar-controls__current--text calendar-controls__current--year"
            value={currentYear}
            onChange={handleYearTextChange}
          />
        </div>
        <div
          className="calendar-controls__arrow calendar-controls__arrow--right"
          onClick={handleNextMonth}
        >
          {" "}
          &#11166;{" "}
        </div>
      </div>

      <div className="calendar">
        <p className="calendar__day">S</p>
        <p className="calendar__day">M</p>
        <p className="calendar__day">T</p>
        <p className="calendar__day">W</p>
        <p className="calendar__day">T</p>
        <p className="calendar__day">F</p>
        <p className="calendar__day">S</p>

        {/* <p className="calendar__date"></p>
                <p className="calendar__date"></p>
                <p className="calendar__date"></p>
                <p className="calendar__date"></p>
                <p className="calendar__date"></p>
                <p className="calendar__date"></p>
                <p className="calendar__date"></p> */}
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
        <p className="calendar__date"></p>
      </div>
    </div>
    // <div class="wrapper">
    //   <header>
    //     <p class="current-date"></p>
    //     <div class="icons">
    //       <span id="prev" class="material-symbols-rounded">chevron_left</span>
    //       <span id="next" class="material-symbols-rounded">chevron_right</span>
    //     </div>
    //   </header>
    //   <div class="calendar">
    //     <ul class="weeks">
    //       <li>Sun</li>
    //       <li>Mon</li>
    //       <li>Tue</li>
    //       <li>Wed</li>
    //       <li>Thu</li>
    //       <li>Fri</li>
    //       <li>Sat</li>
    //     </ul>
    //     <ul class="days"></ul>
    //   </div>
    // </div>
  );
};

export default Calendar;
