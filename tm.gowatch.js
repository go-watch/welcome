const darkModeToggle = document.getElementById('tm');
const body = document.body;


const isDarkMode = localStorage.getItem('darkMode') === 'enabled';


if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}


darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});
