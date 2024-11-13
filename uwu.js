document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (firstName && lastName && email && username && password) {
        alert(`Registration successful for ${firstName} ${lastName}`);
      
    } else {
        alert('Please fill in all fields.');
    }
});
