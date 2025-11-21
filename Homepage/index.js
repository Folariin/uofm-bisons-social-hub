window.addEventListener("DOMContentLoaded", function () {
  const icons = [
    {
      id: "calendar-bison",
      normal: "Images/bisons/Calendar.png",
      hover: "Images/bisons_effects/CalendarHover.png",
    },
    {
      id: "clubs-bison",
      normal: "Images/bisons/Clubs.png",
      hover: "Images/bisons_effects/ClubsHover.png",
    },
    {
      id: "social-bison",
      normal: "Images/bisons/Social.png",
      hover: "Images/bisons_effects/SocialHover.png",
    },
    {
      id: "search-bison",
      normal: "Images/bisons/Search.png",
      hover: "Images/bisons_effects/SearchHover.png",
    },
  ];

  icons.forEach(function (icon) {
    const el = document.getElementById(icon.id);
    if (el) {
      el.addEventListener("mouseover", function () {
        el.src = icon.hover;
      });
      el.addEventListener("mouseout", function () {
        el.src = icon.normal;
      });
    }
  });
});
