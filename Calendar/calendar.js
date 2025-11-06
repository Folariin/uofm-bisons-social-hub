document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Monday Night Hired',
        start: '2025-11-10',
        url: 'event.html'   // 👈 link to another page
      },
      {
        title: 'Monday Night Hired',
        start: '2025-11-14',
        end: '2025-11-16',
        url: 'event.html' // 👈 another link
      }
    ]
  });

  calendar.render();
});