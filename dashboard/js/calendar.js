var calendarEl = document.getElementById("calendarioAgendamentos");
var calendar = new FullCalendar.Calendar(calendarEl, {
  themeSystem: "bootstrap5",
  initialView: "timeGridWeek",
  hiddenDays: [0, 6],
  firstDay: 1,
  slotMinTime: "07:00:00",
  slotMaxTime: "18:00:00",
  expandRows: true,
  allDaySlot: false,
  headerToolbar: {
    left: "prev,next",
    center: "title",
    right: "timeGridWeek,timeGridDay",
  },
  locale: "pt-br",

  datesSet: function () {
    const titulo = document.querySelector('.fc-toolbar-title');
    if (titulo) {
      if (window.innerWidth <= 576) {
        
        titulo.style.setProperty('font-size', '1rem', 'important');
        titulo.style.setProperty('margin', '0 12px', 'important');
        titulo.style.setProperty('text-align', 'center', 'important');
      } else {
        
        titulo.style.setProperty('font-size', '28px', 'important');
      }
    }
  },

  events: [
    {
      title: "Consulta com João",
      start: "2026-03-03T10:00:00",
      end: "2026-03-03T11:00:00",
    },
    {
      title: "Consulta com Maria",
      start: "2026-03-05T14:00:00",
      end: "2026-03-05T15:00:00",
    },
    {
      title: "Consulta com Carlos",
      start: "2026-03-06T09:00:00",
      end: "2026-03-06T10:30:00",
    },
  ],
  eventClick: function (info) {
    window.location.href = "consulta-medica/";
  },
});

document.addEventListener("DOMContentLoaded", function () {
  calendar.render();

  setTimeout(() => {
    calendar.updateSize();
  }, 100);
});

window.addEventListener("hashchange", () => {
  if (window.location.hash == "#agendamentos") calendar.updateSize();
});
