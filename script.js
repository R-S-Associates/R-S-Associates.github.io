// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Set 'About Company' tab as active by default
  document.getElementById('about-company').classList.add('active');
  document.getElementById('about-company').style.display = 'block';
});

function openTab(tabName) {
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
