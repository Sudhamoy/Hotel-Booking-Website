console.log("NWXNWXNJNKLNM")


const cityCard1=document.querySelector(".image-section");

cityCard1.addEventListener("click",function(){
  window.location.href="list.html";
})


/*const exampleModal = document.getElementById('exampleModal');
  exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget;
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-bs-whatever');

            // Update the modal's content
            const modalTitle = exampleModal.querySelector('.modal-title');
            const modalForm = exampleModal.querySelector('#modal-form');

            if (recipient === 'Contact') {
              modalTitle.textContent = 'Contact Us';
              modalForm.innerHTML = `
                <div class="mb-3">
                  <label for="contact-name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="contact-name" placeholder="Your Name">
                </div>
                <div class="mb-3">
                  <label for="contact-email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="contact-email" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                  <label for="contact-message" class="form-label">Message</label>
                  <textarea class="form-control" id="contact-message" rows="3"></textarea>
                </div>
              `;
            } else if (recipient === 'Login') {
              modalTitle.textContent = 'Login';
              modalForm.innerHTML = `
                <div class="mb-3">
                  <label for="login-email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="login-email" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                  <label for="login-password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="login-password" placeholder="Password">
                </div>
              `;
            }
          }); */