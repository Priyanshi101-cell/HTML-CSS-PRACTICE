// SOS
function triggerSOS() {
  document.getElementById("sosModal").style.display = "flex";
  alert("🚨 SOS Alert Sent!");
}

// Close modal
function closeModal() {
  document.getElementById("sosModal").style.display = "none";
}

// Location
function getLocation() {
  const text = document.getElementById("locationText");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        text.innerText =
          "Latitude: " + pos.coords.latitude +
          " | Longitude: " + pos.coords.longitude;
      },
      () => {
        text.innerText = "Permission denied.";
      }
    );
  } else {
    text.innerText = "Geolocation not supported.";
  }
}

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
