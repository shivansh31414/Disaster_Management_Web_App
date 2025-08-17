// Signup Page JavaScript - Emergency Alert System v3
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const authMessage = document.getElementById('auth-message');
    const submitBtn = signupForm.querySelector('.auth-btn');

    // Form submission handler
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(signupForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Validate form data
        if (!userData.name || !userData.email || !userData.password) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (userData.password.length < 6) {
            showMessage('Password must be at least 6 characters long', 'error');
            return;
        }

        // Show loading state
        setLoadingState(true);
        
        try {
            // Make API call to signup endpoint
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showMessage('Account created successfully! Redirecting to weather app...', 'success');
                
                // Clear form
                signupForm.reset();
                
                // Redirect to main app after 2 seconds
                setTimeout(() => {
                    window.location.href = 'emergency_app.html';
                }, 2000);
                
            } else {
                showMessage(result.message || 'Signup failed. Please try again.', 'error');
            }

        } catch (error) {
            console.error('Signup error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            setLoadingState(false);
        }
    });

    // Show message function
    function showMessage(message, type) {
        authMessage.textContent = message;
        authMessage.className = `auth-message ${type}`;
        authMessage.style.display = 'block';
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                authMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Set loading state
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Create Account';
        }
    }

    // Real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Name validation
    nameInput.addEventListener('blur', function() {
        if (this.value.trim().length < 2) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });

    // Email validation
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(this.value)) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });

    // Password validation
    passwordInput.addEventListener('blur', function() {
        if (this.value.length < 6) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });

    console.log('Signup page loaded successfully!');
});
