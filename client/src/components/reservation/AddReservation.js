import React, { useState } from 'react';

const AddReservation = ({ onSubmit, onClose, selectedDate }) => {
  const [courtNumber, setCourtNumber] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!selectedDate || !selectedDate.dateStr) {
      console.error('Invalid selectedDate:', selectedDate);
      return;
    }
  
    const dateTime = selectedDate.dateStr.split('T');
    const date = dateTime[0];
    const time = dateTime[1] ? dateTime[1].split('+')[0] : '';
  
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
    <div className="dialog-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <h2>Dodaj Nową Rezerwację</h2>
          <select 
            value={courtNumber} 
            onChange={(e) => setCourtNumber(e.target.value)} 
            required
          >
            <option value="">Wybierz Numer Kortu</option>
            <option value="1">Kort 1</option>
            <option value="2">Kort 2</option>
            <option value="3">Kort 3</option>
            <option value="4">Kort 4</option>
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
