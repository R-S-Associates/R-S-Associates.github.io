<script src="script.js"></script>
  <script>
    // JavaScript to set 'About Company' tab as active by default
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById('about-company').classList.add('active'); // Ensure 'active' class is added
      document.getElementById('about-company').style.display = 'block'; // Ensure 'display' is set to 'block'
    });

    function openTab(tabName) {
      var tabcontent = document.getElementsByClassName("tab-content");
      for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    }
  </script>
