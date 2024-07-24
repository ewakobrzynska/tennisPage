import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

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

    return (
        <div>
            <h1>Reservation List</h1>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation._id}>
                        Court {reservation.courtNumber} - {reservation.playerName} - {reservation.date} - {reservation.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
