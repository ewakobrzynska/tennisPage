// calendarUtils.js

export const addDurationToTime = (startTime, duration) => {
  const [hours, minutes] = startTime.split(':').map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes + duration);
  return date.toTimeString().split(' ')[0];
};

export const transformReservations = (reservations) => {
  return reservations.map(reservation => {
    const startDateTime = new Date(reservation.date);
    const startTime = reservation.time;
    const endTime = addDurationToTime(startTime, reservation.duration);

    const start = `${startDateTime.toISOString().split('T')[0]}T${startTime}`;
    const end = `${startDateTime.toISOString().split('T')[0]}T${endTime}`;

    return {
      id: reservation._id,
      title: `${reservation.playerName} (Court ${reservation.courtNumber})`,
      start: start,
      end: end
    };
  });
};
