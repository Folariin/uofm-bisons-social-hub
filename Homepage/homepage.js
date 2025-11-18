window.addEventListener("DOMContentLoaded", function () {
  const icons = [
    {
      id: "calendar_bison",
      normal: "Images/bisons/Calendar.png",
      hover: "Images/bisons_effects/Calendar2.png",
    },
    {
      id: "clubs_bison",
      normal: "Images/bisons/Club and org.png",
      hover: "Images/bisons_effects/clubAndOrg2.png",
    },
    {
      id: "social_bison",
      normal: "Images/bisons/Social.png",
      hover: "Images/bisons_effects/Social2.png",
    },
    {
      id: "search_bison",
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
