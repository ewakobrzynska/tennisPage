import React, { useState } from 'react';

const AddReservation = ({ onSubmit, onClose, selectedDate }) => {
  const [courtNumber, setCourtNumber] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Log selectedDate for debugging
    console.log('selectedDate:', selectedDate);
  
    if (!selectedDate || !selectedDate.dateStr) {
      console.error('Invalid selectedDate:', selectedDate);
      return;
    }
  
    // Extract date and time from dateStr
    const dateTime = selectedDate.dateStr.split('T');
    const date = dateTime[0]; // 'YYYY-MM-DD'
    const time = dateTime[1] ? dateTime[1].split('+')[0] : ''; // 'HH:MM:SS', removing timezone part
  
    // Ensure courtNumber is a number
    const courtNumberValue = parseInt(courtNumber, 10);
  
    // Construct formData object
    const formData = {
      courtNumber: courtNumberValue,
      date: date || '',
      time: time || '',
      playerName,
      duration: 1
    };
  
    // Debugging: log the formData
    console.log('Submitting formData:', formData);
  
    // Call the onSubmit function
    onSubmit(formData);
  };
  
  

  return (
    <div className="dialog-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <h2>Dodaj Nową Rezerwację</h2>
          <input 
            type="number" 
            placeholder="Numer Kortu" 
            value={courtNumber} 
            onChange={(e) => setCourtNumber(e.target.value)} 
            required 
          />
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
