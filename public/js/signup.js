const signupForm = document.querySelector('#signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();

        if (!username || !password) {
            alert('Username and password are required.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters.');
            return;
        }

        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password, email }),
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();
            console.log('Sign-up response:', result);

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(result.message || 'Failed to sign up.');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert('An error occurred. Please try again.');
        }
    });
} else {
    console.error('Sign-up form not found.');
}