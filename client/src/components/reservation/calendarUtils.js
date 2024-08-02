export const transformReservations = (reservations) => {
    return reservations.map(reservation => ({
      id: reservation._id,
      title: `${reservation.courtNumber} - ${reservation.playerName}`,
      start: `${reservation.date}T${reservation.time}`,
      end: `${reservation.date}T${addDurationToTime(reservation.time, reservation.duration)}`,
      allDay: false,
      status: reservation.status
    }));
  };
  
  const addDurationToTime = (time, duration) => {
    const [hours, minutes] = time.split(':').map(Number);
    const endDate = new Date();
    endDate.setHours(hours, minutes + duration);
    return endDate.toISOString().substring(11, 16);
  };
  