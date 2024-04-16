//login to index.html
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Redirect to the home page
  window.location.href = "./index.html";
});

//contact-us to index.html
function redirectToHomePage() {
  // Redirect to the home page
  window.location.href = "./index.html";
  return false; // Prevent the default form submission behavior
}

