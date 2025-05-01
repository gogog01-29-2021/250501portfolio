// Themes cycle list
const themes = ["light-theme", "dark-theme", "pastel-theme"];

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
    injectThemeToggle();
});

// Function to cycle through themes
function toggleTheme() {
    const currentTheme = themes.find(theme => document.body.classList.contains(theme));
    let nextTheme;

    if (currentTheme) {
        const currentIndex = themes.indexOf(currentTheme);
        nextTheme = themes[(currentIndex + 1) % themes.length];
        document.body.classList.remove(currentTheme);
    } else {
        nextTheme = themes[0]; // default to first theme
    }

    document.body.classList.add(nextTheme);
    localStorage.setItem('theme', nextTheme);
}

// Dynamically inject the toggle button
function injectThemeToggle() {
    const header = document.querySelector('header');
    if (header) {
        const button = document.createElement('button');
        button.textContent = "Switch Theme";
        button.onclick = toggleTheme;
        button.style.marginLeft = "10px";
        button.style.padding = "5px 10px";
        header.appendChild(button);
    }
}
