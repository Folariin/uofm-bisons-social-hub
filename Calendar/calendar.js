/*
This part of the code makes the calendar.
You can add an event using the same format as in the events array
*/
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  //const filterSelect = document.getElementById("eventFilter");
  let currentFilter = "all";

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',

    headerToolbar: {
      left: 'filterButton',
      center: 'title',
      //center: 'filterButton',
      right: 'prev,next'
    },
    //  customButtons: {
    //       filterButton: {
    //         text: '', // placeholder, will be replaced with dropdown
    //         click: function () {} // no click needed; dropdown handles events
    //       }
    //     },

    events: [
      {
        title: 'Monday Night Hired',
        start: '2025-11-10',
        url: '../Event/event.html',
        category: "career"
      },
      {
        title: 'Monday Night Hired',
        start: '2025-11-17',
        end: '2025-11-17',
        url: '../Event/event.html',
        category: "holiday"
      }
    ],

    height: '100%',

    eventDidMount: function (info) {
      const eventCategory = info.event.extendedProps.category;

      if (currentFilter !== "all" && eventCategory !== currentFilter) {
        info.el.style.display = "none";
      }
      else {
        info.el.style.display = "";

      }
    }
  });

  calendar.render();

  //

  // Find the custom button element FullCalendar created
  const filterButtonEl = document.querySelector('.fc-filterButton-button');

  // Replace button content with a styled dropdown
  // filterButtonEl.innerHTML = `
  //   <select id="toolbarFilter" style="
  //     border: none;
  //     background: transparent;
  //     color: inherit;
  //     font-size: 1rem;
  //     font-family: inherit;
  //     cursor: pointer;
  //   ">
  //     <option style="color:black;" value="all">Filter</option>
  //     <option style="color:black;"value="career">Careers</option>
  //     <option style="color:black;"value="holiday">Holidays</option>
  //     <option style="color:black;"value="class">Classes</option>
  //   </select>
  // `;

  // Replace button content with a dropdown and a class
  filterButtonEl.innerHTML = `
    <select id="toolbarFilter" class="fc-filter-dropdown">
      <option value="all">Filter</option>
      <option value="career">Careers</option>
      <option value="holiday">Holidays</option>
      <option value="class">Classes</option>
    </select>
  `;
  // Add event listener to filter events
  const toolbarFilter = document.getElementById('toolbarFilter');
  toolbarFilter.addEventListener('change', function () {
    currentFilter = this.value;

    calendar.getEvents().forEach(event => {
      const category = event.extendedProps.category;
      event.setProp('display', (currentFilter === 'all' || category === currentFilter) ? 'auto' : 'none');
    });
  });

});