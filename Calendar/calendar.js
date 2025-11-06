/*
This part of the code makes the calendar.
You can add an event using the same format as in the events array
*/
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Monday Night Hired',
        start: '2025-11-10',
        url: '../Event/event.html'
      },
      {
        title: 'Monday Night Hired',
        start: '2025-11-17',
        end: '2025-11-17',
        url: '../Event/event.html'
      }
    ],
    height: '100%',
  });
  calendar.render();
});