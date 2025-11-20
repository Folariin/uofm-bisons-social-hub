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
document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");

  //const filterSelect = document.getElementById("eventFilter");
  let currentFilter = "all";

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",

    eventClassNames: function (info) {
      return ["cat-" + info.event.extendedProps.category];
    },

    headerToolbar: {
      left: "filterButton",
      center: "title",
      right: "prev,next",
    },
    //  customButtons: {
    //       filterButton: {
    //         text: '', // placeholder, will be replaced with dropdown
    //         click: function () {} // no click needed; dropdown handles events
    //       }
    //     },

    events: [
      {
        title: "Monday Night Hired",
        start: "2025-11-10",
        url: "../Event/event.html",
        category: "career",
      },
      {
        title: "Monday Night Hired",
        start: "2025-11-17",
        end: "2025-11-17",
        url: "../Event/monday-night-hired-two.html",
        category: "career",
      },
      {
        title: "KGS Monday Night Hired",
        start: "2025-10-27",
        end: "2025-10-27",
        url: "../Event/kgs-monday-night-hired.html",
        category: "career",
      },
      {
        title: "Networking Night",
        start: "2025-11-19",
        end: "2025-11-19",
        url: "../Event/networking-night.html",
        category: "academic",
      },
      {
        title: "Bisons Women's Volleyball",
        start: "2025-11-22",
        end: "2025-11-22",
        url: "../Event/volleyball-game.html",
        category: "sports",
      },
      {
        title: "Pave Your Path",
        start: "2025-11-25",
        end: "2025-11-25",
        url: "../Event/pave-your-path.html",
        category: "academic",
      },
      {
        title: "Actuary Panel",
        start: "2025-11-18",
        end: "2025-11-18",
        url: "../Event/panel-event.html",
        category: "academic",
      },
      {
        title: ".dev Games 1",
        start: "2025-09-25",
        end: "2025-09-25",
        url: "../Event/devgames1.html",
        category: "clubs",
      },
      {
        title: ".dev Games 2",
        start: "2025-10-01",
        end: "2025-10-01",
        url: "../Event/devgames2.html",
        category: "clubs",
      },
      {
        title: ".dev Games 3",
        start: "2025-11-20",
        end: "2025-11-20",
        url: "../Event/devgames3.html",
        category: "clubs",
      },
      {
        title: "Path to Medical School",
        start: "2025-11-18",
        end: "2025-11-18",
        url: "../Event/path-to-med.html",
        category: "clubs",
      },
      {
        title: "Karaoke Night",
        start: "2025-12-02",
        end: "2025-12-02",
        url: "../Event/karaoke-night.html",
        category: "social",
      },
      {
        title: "Mens basketball",
        start: "2025-11-28",
        end: "2025-11-28",
        url: "../Event/mens-basketball.html",
        category: "sports",
      },
      {
        title: "Mens basketball",
        start: "2025-12-05",
        end: "2025-12-05",
        url: "../Event/mens-basketball-two.html",
        category: "sports",
      },
      {
        title: "U of M Tri-Choirs Performance",
        start: "2025-11-29",
        end: "2025-11-29",
        url: "../Event/um-choir.html",
        category: "entertainment",
      },
      {
        title: "UM Symphony Orchestra",
        start: "2025-11-25",
        end: "2025-11-25",
        url: "../Event/um-orchestra.html",
        category: "entertainment",
      },
      {
        title: "UM Concert Band",
        start: "2025-12-04",
        end: "2025-12-04",
        url: "../Event/umsu-concert.html",
        category: "entertainment",
      },
      {
        title: "UM SOMI – Winter Market",
        start: "2025-11-24",
        end: "2025-11-26",
        url: "../Event/um-winter-market.html",
        category: "community",
      },
      {
        title: "Volunteer Fair",
        start: "2025-11-05",
        end: "2025-11-05",
        url: "../Event/volunteer.html",
        category: "community",
      },
      {
        title: "Press Play Games Night",
        start: "2025-11-20",
        end: "2025-11-20",
        url: "../Event/games-night.html",
        category: "social",
      },
      {
        title: "South Asian Film Night",
        start: "2025-11-21",
        end: "2025-11-21",
        url: "../Event/film-night.html",
        category: "social",
      },
      {
        title: "UMAC Karaoke Night",
        start: "2025-11-13",
        end: "2025-11-13",
        url: "../Event/umac.html",
        category: "clubs",
      }
    ],

    height: "100%",

    eventDidMount: function (info) {
      const eventCategory = info.event.extendedProps.category;

      if (currentFilter !== "all" && eventCategory !== currentFilter) {
        info.el.style.display = "none";
      } else {
        info.el.style.display = "";
      }
    },
  });

  calendar.render();

  // Find the custom button element FullCalendar created
  const filterButtonEl = document.querySelector(".fc-filterButton-button");

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
  const toolbarFilter = document.getElementById("toolbarFilter");
  toolbarFilter.addEventListener("change", function () {
    currentFilter = this.value;

    // Use setProp('display') to filter dynamically
    calendar.getEvents().forEach((event) => {
      const category = event.extendedProps.category;
      event.setProp(
        "display",
        currentFilter === "all" || category === currentFilter ? "auto" : "none"
      );
    });
  });
});
