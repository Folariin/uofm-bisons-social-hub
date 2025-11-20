/* Navigation sidebar */
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar on hamburger click
hamburger.onclick = () => {
  sidebar.classList.toggle("closed");
};

document.getElementById('goBackButton').addEventListener('click', function() {
    window.history.back(); 
});


document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = "../Homepage/homepage.html";
});