function sendMessage(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare form data
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send AJAX request
    fetch('./khwopaChat/sendMessage.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            updateMessageForms(data.message);
        } else {
            updateMessageForms(data.message);
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        updateMessageForms('An error occurred. Please try again later.');
    });
}

function updateMessageForms(message) {
    var messageForms = document.getElementsByClassName('messageForm');
    for (var i = 0; i < messageForms.length; i++) {
        messageForms[i].innerHTML = message;
    }
}
