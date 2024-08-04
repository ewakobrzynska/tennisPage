import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddReservation from './AddReservation';
import { transformReservations } from './calendarUtils';
import './../../styles/calendar.css';
import './../../styles/style.css';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations', error);
      }
    };
    fetchReservations();
  }, []);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setShowDialog(true);
  };

  const handleAddReservation = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5002/api/reservations', formData);
      setReservations(prevReservations => [...prevReservations, response.data]);
      setShowDialog(false);
    } catch (error) {
      console.error('Error adding reservation', error);
    }
  };

  const calendarEvents = transformReservations(reservations);

  return (
    <div className="demo-app">
      <div className="calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
          }}
          buttonText={{
            today: 'Dzisiaj',
            month: 'Miesiąc',
            day: 'Dzień',
            week: 'Tydzień'
          }}
          locale="pl"
          weekends={true}
          selectable={true}
          nowIndicator={true}
          slotMinTime="09:00:00"
          slotMaxTime="19:00:00"
          slotDuration="00:30:00"
          slotLabelInterval="01:00:00"
          selectMirror={true}
          dateClick={handleDateSelect}
          select={handleDateSelect}
          events={calendarEvents}
          allDaySlot={false}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }}
        />
      </div>
      {showDialog && (
        <AddReservation 
          onSubmit={handleAddReservation}
          onClose={() => setShowDialog(false)} 
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
};

export default Reservations;
