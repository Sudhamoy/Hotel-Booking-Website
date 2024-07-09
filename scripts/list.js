/* function toggleSection("content-2") {
  const section = document.getElementById("map");

  if (section.style.display === "none") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
      section.scrollIntoView({ behavior: "smooth", block: "center"}); // Scroll to the section
  }
} */

  function toggleView() {
    const listView = document.getElementById('content-2');
    const mapView = document.getElementById('content-3');
    const listViewBtn = document.getElementById('btnradio1');
    const mapViewBtn = document.getElementById('btnradio2');

    if (listViewBtn.checked) {
      listView.style.display = 'block';
      mapView.style.display = 'none';
    } else if (mapViewBtn.checked) {
      listView.style.display = 'none';
      mapView.style.display = 'block';
    }
  }

  // Initial toggle based on the default checked radio button
  toggleView();

  // Add event listeners to radio buttons
  document.getElementById('btnradio1').addEventListener('change', toggleView);
  document.getElementById('btnradio2').addEventListener('change', toggleView);
