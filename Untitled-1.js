document.getElementById('diamond-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const amount = document.getElementById('amount').value;
    
    document.getElementById('confirmation-message').innerText = `Successfully topped up ${amount} diamonds for user ${username}!`;
    document.getElementById('top-up-form').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});
