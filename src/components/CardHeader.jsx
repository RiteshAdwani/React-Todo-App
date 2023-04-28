import React from 'react';
import { useState, useEffect } from 'react';

function CardHeader() {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ];
  const days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  const now = new Date();
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(now.getMonth());
  const [day, setDay] = useState(now.getDay());
  const [year, setYear] = useState(now.getFullYear());

  // Update Date,Month and Day every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().getDate());
      setMonth(new Date().getMonth());
      setDay(new Date().getDay());
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-between mt-xs-5 mt-4 mb-3">
      <div className="d-flex">
        <h1 className="date-details pb-1">{date}</h1>
        <div className="month-year-details d-flex flex-column ps-1 pt-1">
          <div className="mb-0">{months[month]}</div>
          <div className="mb-0">{year}</div>
        </div>
      </div>
      <div>
        <h6 className="day-details pt-3">{days[day]}</h6>
      </div>
    </div>
  );
}

export default CardHeader;
