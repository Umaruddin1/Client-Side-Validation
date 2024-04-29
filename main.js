document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const usernameGuidance = document.getElementById('username-guidance');
    const emailGuidance = document.getElementById('email-guidance');
    const passwordGuidance = document.getElementById('password-guidance');
    const submitButton = document.querySelector('button[type="submit"]');

    function validateUsername() {
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            usernameError.textContent = 'Username is required';
            usernameInput.classList.remove('valid');
            usernameInput.classList.add('invalid');
            return false;
        } else if (!/^[a-zA-Z0-9]{6,}$/.test(usernameValue)) {
            usernameError.textContent = 'Username must be alphanumeric and at least 6 characters long';
            usernameInput.classList.remove('valid');
            usernameInput.classList.add('invalid');
            return false;
        } else {
            usernameError.textContent = '';
            usernameInput.classList.remove('invalid');
            usernameInput.classList.add('valid');
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
            return false;
        } else if (passwordValue.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
            return false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            return true;
        }
    }

    function validateForm() {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        // Enable submit button only if all fields are valid
        submitButton.disabled = !(isUsernameValid && isEmailValid && isPasswordValid);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateUsername() && validateEmail() && validatePassword()) {
            // If all validations pass, submit the form
            form.submit();
        }
    });

    // Event listeners for input fields
    usernameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});