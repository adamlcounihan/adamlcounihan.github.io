document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const openMenuButton = document.getElementById('open-sidebar');
    const closeMenuButton = document.getElementById('close-sidebar');
    const githubIcon = document.getElementById('github-icon');
    const body = document.body;

    const userPreference = localStorage.getItem('themePreference');
    if (userPreference === 'light') {
        body.classList.add('light-mode-enabled');
        body.classList.add('light-mode');
        themeToggleButton.setAttribute('fill', '#171616');
        openMenuButton.setAttribute('fill', '#171616');
        closeMenuButton.setAttribute('fill', '#171616');
        githubIcon.setAttribute('fill', '#171616');
    }

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode-enabled');

        if (body.classList.contains('light-mode-enabled')) {
            body.classList.add('light-mode');
            themeToggleButton.setAttribute('fill', '#171616');
            openMenuButton.setAttribute('fill', '#171616');
            closeMenuButton.setAttribute('fill', '#171616');
            githubIcon.setAttribute('fill', '#171616');
            localStorage.setItem('themePreference', 'light');
        } else {
            body.classList.remove('light-mode');
            themeToggleButton.setAttribute('fill', '#e8eaed');
            openMenuButton.setAttribute('fill', '#e8eaed');
            closeMenuButton.setAttribute('fill', '#e8eaed');
            githubIcon.setAttribute('fill', '#e8eaed');
            localStorage.setItem('themePreference', 'dark');
        }
    });
});
