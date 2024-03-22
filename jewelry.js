function redirectToContact() {
    window.location.href = "contactus.html";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var name = document.getElementById('name').value;

    // Display thank you message
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = "Thank you for your feedback, " + name;
    thankYouMessage.style.display = "block";

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
