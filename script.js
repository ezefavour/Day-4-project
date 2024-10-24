// Select elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Variables for calculation
let currentInput = '';
let operator = '';
let previousInput = '';

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.textContent;

        if (value === 'C') {
            // Clear the display
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value = '';
        } else if (value === '=') {
            // Perform calculation
            if (currentInput && previousInput && operator) {
                const result = eval(`${previousInput}${operator}${currentInput}`);
                display.value = result;
                currentInput = result;
                operator = '';
                previousInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Store operator and previous input
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            // Append number to current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Theme toggle function
themeToggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark');

    if (isDarkMode) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.classList.replace('text-yellow-500', 'text-gray-400');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.classList.replace('text-gray-400', 'text-yellow-500');
        localStorage.setItem('theme', 'dark');
    }
}

// Load the theme from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);

    if (savedTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.classList.replace('text-gray-400', 'text-yellow-500');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.classList.replace('text-yellow-500', 'text-gray-400');
    }
});
