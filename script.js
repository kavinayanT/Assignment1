document.getElementById('contact-form').addEventListener('submit', function(event) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const cell = document.getElementById('cell');
  const comments = document.getElementById('comments');

  // Clear previous error classes and messages
  clearErrors();

  let valid = true;

  // Validate Name
  if (!name.value) {
    showError(name, 'name-error');
    valid = false;
  }

  // Validate Email
  if (!email.value || !validateEmail(email.value)) {
    showError(email, 'email-error');
    valid = false;
  }

  // Validate Cell
  if (!cell.value) {
    showError(cell, 'cell-error');
    valid = false;
  }

  // Validate Comments
  if (!comments.value) {
    showError(comments, 'comments-error');
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});

function showError(inputField, errorId) {
  inputField.classList.add('error');
  document.getElementById(errorId).style.display = 'block';
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(message) {
    message.style.display = 'none';
  });

  const errorFields = document.querySelectorAll('.error');
  errorFields.forEach(function(field) {
    field.classList.remove('error');
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
