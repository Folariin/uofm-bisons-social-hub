// ---------- Reusable helper functions ----------
function buildGCalUrl(e) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  // Convert ISO-with-offset to UTC Z format without punctuation: YYYYMMDDTHHMMSSZ
  const toGCalUTC = iso =>
    new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const dates = `${toGCalUTC(e.startLocal)}/${toGCalUTC(e.endLocal)}`;

  const params = new URLSearchParams({
    text: e.title,
    dates,               
    details: e.details,
    location: e.location,
    ctz: e.timeZone       // shows local time correctly in GCal UI
  });

  return `${base}&${params.toString()}`;
}

function buildICS(e) {
  const uid = `event-${Date.now()}@uofm-social-hub`;
  const dtStamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const toUTC = iso =>
    new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//UofM Social Hub//Event//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `SUMMARY:${e.title}`,
    `DESCRIPTION:${(e.details || "").replace(/\n/g, "\\n")}`,
    `DTSTART:${toUTC(e.startLocal)}`,
    `DTEND:${toUTC(e.endLocal)}`,
    `LOCATION:${e.location || ""}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}

function initAddToCalendar(eventData) {
  const g = document.querySelector(".add-to-gcal");
  const i = document.querySelector(".add-to-ics");
  if (g) g.href = buildGCalUrl(eventData);
  if (i) i.href = buildICS(eventData);
}


