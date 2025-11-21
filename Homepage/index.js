window.addEventListener("DOMContentLoaded", function () {
  const icons = [
    {
      id: "calendar-bison",
      normal: "Images/bisons/Calendar.png",
      hover: "Images/bisons_effects/CalendarHover.png",
    },
    {
      id: "clubs-bison",
      normal: "Images/bisons_effects/ClubsHover.png",
      hover: "Images/bisons/Clubs.png",
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
  const imgEl = document.getElementById(icon.id); // Get the image element

  if (imgEl) {
    // Attach listeners directly to the image element (imgEl)
    imgEl.addEventListener("mouseover", function () {
      imgEl.src = icon.hover; // Change the image source
    });

    imgEl.addEventListener("mouseout", function () {
      imgEl.src = icon.normal; // Revert the image source
    });
  }
});
});