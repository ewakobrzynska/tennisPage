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
    const selectedDate = new Date(selectInfo.start);
    selectedDate.setMinutes(0, 0, 0); 
    setSelectedDate({
      ...selectInfo,
      startStr: selectedDate.toISOString(),
    });
    setShowDialog(true);
  };

  const handleAddReservation = async (formData) => {
    const { courtNumber, date, time } = formData;
    const selectedDateTime = new Date(`${date}T${time}`);

    const existingReservation = reservations.find(reservation => {
      const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
      return reservation.courtNumber === courtNumber && 
             reservationDateTime.getTime() === selectedDateTime.getTime();
    });

    if (existingReservation) {
      alert('A reservation already exists for this court at the selected time.');
      return;
    }

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
    <div className="reservation-container">
      <div className="demo-app">
        <div className="info-column">
          <div className="image-column">
            <img src="https://storage.googleapis.com/a1aa/image/a055WceTFOVHHCc64JPI4ez2Q5ff6FeJyuoOsfOfYjneHKNfmA.jpg" alt="Placeholder" className="reservation-image" />
          </div>
          <div className="text-column">
            <p>
              Witaj w naszym systemie rezerwacji kortów tenisowych! Jesteśmy podekscytowani, że wybrałeś naszą aplikację do rezerwacji kortów. Mamy do zaoferowania 4 korty tenisowe, gotowe do użytku w każdej chwili. Za pomocą naszego kalendarza, możesz sprawdzić dostępność kortów na wybrany dzień i zarezerwować swój termin gry. Zarezerwowane dni są wyróżnione na kalendarzu, abyś mógł łatwo zaplanować swoją grę.
              <br /><br />
              Jeśli masz jakiekolwiek pytania lub wątpliwości, prosimy o kontakt z nami przez zakładkę "Kontakt". Chętnie pomóżemy w rozwiązaniu Twoich problemów i odpowiedzimy na wszystkie pytania.
            </p>
          </div>
        </div>
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
            slotDuration="01:00:00"
            slotLabelInterval="01:00:00"
            selectMirror={true}
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
            reservations={reservations}
          />
        )}
      </div>
    </div>
    
  );
};

export default Reservations;