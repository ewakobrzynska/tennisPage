import React, { useState, useEffect } from 'react';

const AddReservation = ({ onSubmit, onClose, selectedDate, reservations }) => {
  const [courtNumber, setCourtNumber] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [availableCourts, setAvailableCourts] = useState([1, 2, 3, 4]);

  useEffect(() => {
    if (selectedDate) {
      const selectedDateTime = new Date(selectedDate.start);
      selectedDateTime.setMinutes(0, 0, 0); // Round down to the nearest full hour

      const reservedCourts = reservations
        .filter(reservation => {
          const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
          return reservationDateTime.getTime() === selectedDateTime.getTime();
        })
        .map(reservation => reservation.courtNumber);

      const available = [1, 2, 3, 4].filter(court => !reservedCourts.includes(court));
      setAvailableCourts(available);
    }
  }, [selectedDate, reservations]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedDate.startStr) {
      console.error('Invalid selectedDate:', selectedDate);
      return;
    }

    const dateTime = selectedDate.startStr.split('T');
    const date = dateTime[0]; // 'YYYY-MM-DD'
    const time = dateTime[1] ? dateTime[1].split('+')[0] : ''; // 'HH:MM:SS'

    const courtNumberValue = parseInt(courtNumber, 10);

    const formData = {
      courtNumber: courtNumberValue,
      date: date || '',
      time: time || '',
      playerName,
      duration: 1
    };

    onSubmit(formData);
  };

  return (
    <div className="dialog-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <h2>Dodaj Nową Rezerwację</h2>
          <select value={courtNumber} onChange={(e) => setCourtNumber(e.target.value)} required>
            <option value="">Wybierz Kort</option>
            {availableCourts.map(court => (
              <option key={court} value={court}>{court}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Imię Gracza" 
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)} 
            required 
          />
          {selectedDate && selectedDate.startStr && (
            <>
              <p>Data: {selectedDate.startStr.split('T')[0]}</p>
              <p>Godzina: {selectedDate.startStr.split('T')[1]}</p>
            </>
          )}
          <button type="submit">Dodaj Rezerwację</button>
        </form>
      </div>
    </div>
  );
};

export default AddReservation;
