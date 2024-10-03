document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cell = document.getElementById('cell').value;
    const comments = document.getElementById('comments').value;
  
    if (!name || !email || !cell || !comments) {
      alert('Please fill in all fields.');
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  