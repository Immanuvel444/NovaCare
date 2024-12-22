// // script.js

// function validateForm() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;
//     const statusMessage = document.getElementById('status-message');

//     // Basic validation
//     if (name === "" || email === "" || subject === "" || message === "") {
//         statusMessage.textContent = "Please fill out all fields.";
//         return false;
//     }

//     // Email format validation
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         statusMessage.textContent = "Please enter a valid email address.";
//         return false;
//     }

//     // Success message
//     statusMessage.style.color = "green";
//     statusMessage.textContent = "Your message has been sent successfully!";
//     return false; // Prevents actual form submission for demo
// }
