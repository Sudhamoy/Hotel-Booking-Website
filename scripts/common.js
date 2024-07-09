/* //login to index.html
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Redirect to the home page
  window.location.href = "./index.html";
}); */

//contact-us-modal and login-modal  to index.html
function redirectToHomePage() {
  // Redirect to the home page
  window.location.href = "./index.html";
  return false; // Prevent the default form submission behavior
}

// For Loader:
document.addEventListener('DOMContentLoaded', () => {
  // Simulate content loading delay
  setTimeout(() => {
    // Add loaded class to body when content is loaded
    document.body.classList.add('loaded');
  }, 100000); // Adjust the delay as needed
});


//For login button function
/* $(document).ready(function() {
  $('#login').click(function() {
      $('#exampleModal').modal('show');
      $('.modal-body').load('login.html');
  });
}); */