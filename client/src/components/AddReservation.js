import React, { useState } from 'react';
import api from '../api/api';

const AddReservation = () => {
    const [courtNumber, setCourtNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/', { courtNumber, date, time, playerName, duration });
            setCourtNumber('');
            setDate('');
            setTime('');
            setPlayerName('');
            setDuration('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Reservation</h2>
            <input 
                type="number" 
                placeholder="Court Number" 
                value={courtNumber} 
                onChange={(e) => setCourtNumber(e.target.value)} 
                required 
                id="courtNumber"
                name="courtNumber"
            />
            <input 
                type="date" 
                placeholder="Date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
                id="date"
                name="date"
            />
            <input 
                type="time" 
                placeholder="Time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required 
                id="time"
                name="time"
            />
            <input 
                type="text" 
                placeholder="Player Name" 
                value={playerName} 
                onChange={(e) => setPlayerName(e.target.value)} 
                required 
                id="playerName"
                name="playerName"
            />
            <input 
                type="number" 
                placeholder="Duration (minutes)" 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                required 
                id="duration"
                name="duration"
            />
            <button type="submit">Add Reservation</button>
        </form>
    );
};

export default AddReservation;
