window.addEventListener("DOMContentLoaded", function () {
  const icons = [
    {
      id: "calendar-bison",
      normal: "Images/bisons/Calendar.png",
      hover: "Images/bisons_effects/Calendar2.png",
    },
    {
      id: "clubs-bison",
      normal: "Images/bisons/ClubsAndOrgs.png",
      hover: "Images/bisons_effects/clubAndOrg2.png",
    },
    {
      id: "social-bison",
      normal: "Images/bisons/Social.png",
      hover: "Images/bisons_effects/Social2.png",
    },
    {
      id: "search-bison",
      normal: "Images/bisons/Search.png",
      hover: "Images/bisons_effects/search2.png",
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
