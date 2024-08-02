import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReservationCalendar = ({ reservations }) => {
    const reservedDates = reservations.map(reservation => new Date(reservation.date).toDateString());
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            return reservedDates.includes(date.toDateString()) ? 'highlight' : null;
        }
        return null;
    };

    return (
        <div>
            <h2>Reservation Calendar</h2>
            <Calendar
                tileClassName={tileClassName}
                showNeighboringMonth={false}
            />
        </div>
    );
};

export default ReservationCalendar;
