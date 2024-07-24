import React from 'react';
import AddReservation from './components/AddReservation';
import ReservationList from './components/ReservationList';

const App = () => {
    return (
        <div>
            <h1>Scheduler</h1>
            <AddReservation />
            <ReservationList />
        </div>
    );
};

export default App;
