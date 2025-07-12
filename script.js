const API_URL = 'https://website-0554.onrender.com//api';
let token = localStorage.getItem('token');

// Redirect to login if no token on protected pages
if (['pantry.html', 'recipes.html'].includes(window.location.pathname.split('/').pop()) && !token) {
    window.location.href = 'index.html';
}

// Display error messages
function showError(elementId, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    const container = document.getElementById(elementId)?.parentElement || document.querySelector('.container');
    container.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                localStoragehormation, go to the "Data Controls" section of settings and disable the memory feature.
