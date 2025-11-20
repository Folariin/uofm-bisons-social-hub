/* Navigation sidebar */
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar on hamburger click
hamburger.onclick = () => {
  sidebar.classList.toggle("closed");
};


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

    eventClassNames: function (info) {
      return ['cat-' + info.event.extendedProps.category];
    },

    headerToolbar: {
      left: 'filterButton',
      center: 'title',
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
        category: "career"
      },
      {
        title: 'Aerospace Monday Night Hired',
        start: '2025-11-17',
        end: '2025-11-17',
        url: '../Event/event.html',
        category: "career"
      },
      {
        title: 'KGS Monday Night Hired',
        start: '2025-10-27',
        end: '2025-10-27',
        url: '../Event/event.html',
        category: "career"
      },
      {
        title: 'Networking Night',
        start: '2025-11-19',
        end: '2025-11-19',
        url: '../Event/event.html',
        category: "academic"
      },
      {
        title: 'Pave Your Path',
        start: '2025-11-25',
        end: '2025-11-25',
        url: '../Event/event.html',
        category: "academic"
      },
      {
        title: 'Actuary Panel',
        start: '2025-11-18',
        end: '2025-11-18',
        url: '../Event/event.html',
        category: "academic"
      },
      {
        title: '.dev Games 1',
        start: '2025-09-25',
        end: '2025-09-25',
        url: '../Event/devagmes1.html',
        category: "clubs"
      },
      {
        title: '.dev Games 2',
        start: '2025-10-01',
        end: '2025-10-01',
        url: '../Event/devgames2.html',
        category: "clubs"
      }
      ,
      {
        title: '.dev Games 3',
        start: '2025-11-20',
        end: '2025-11-20',
        url: '../Event/devgames3.html',
        category: "clubs"
      },
      {
        title: 'Path to Medical School',
        start: '2025-11-18',
        end: '2025-11-18',
        url: '../Event/event.html',
        category: "clubs"
      },
      {
        title: 'Research Week',
        start: '2025-11-06',
        end: '2025-11-06',
        url: '../Event/event.html',
        category: "clubs"
      },
      {
        title: 'Chess Tournament',
        start: '2025-11-22',
        end: '2025-11-22',
        url: '../Event/event.html',
        category: "clubs"
      },
      {
        title: 'Actuary Karaoke Night',
        start: '2025-11-13',
        end: '2025-11-13',
        url: '../Event/event.html',
        category: "clubs"
      }
    ],

    height: '100%',

    eventDidMount: function (info) {
      const eventCategory = info.event.extendedProps.category;

      if (currentFilter !== "all" && eventCategory !== currentFilter) {
        info.el.style.display = "none";
      } else {
        info.el.style.display = "";
      }
    }
  });

  calendar.render();

  // Find the custom button element FullCalendar created
  const filterButtonEl = document.querySelector('.fc-filterButton-button');

  // Replace the placeholder button with a styled dropdown
  filterButtonEl.innerHTML = `
    <select id="toolbarFilter" class="fc-filter-dropdown">
      <option value="all">Filter</option>
      <option value="academic">Academic</option>
      <option value="career">Careers</option>
      <option value="community">Community</option>
      <option value="entertainment">Entertainment</option>
      <option value="social">Social</option>
      <option value="sports">Sports</option>
      <option value="clubs">UMSU Clubs</option>
    </select>
  `;

  // Add event listener to filter events dynamically
  const toolbarFilter = document.getElementById('toolbarFilter');
  toolbarFilter.addEventListener('change', function () {
    currentFilter = this.value;

    // Use setProp('display') to filter dynamically
    calendar.getEvents().forEach(event => {
      const category = event.extendedProps.category;
      event.setProp('display', (currentFilter === 'all' || category === currentFilter) ? 'auto' : 'none');
    });
  });
});