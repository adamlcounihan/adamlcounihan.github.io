document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode-enabled');

        // Check if light mode is enabled
        if (body.classList.contains('light-mode-enabled')) {
            body.classList.add('light-mode');
            themeToggleButton.setAttribute('fill', '#171616');
        } else {
            body.classList.remove('light-mode');
            themeToggleButton.setAttribute('fill', '#e8eaed');
        }
    });
});
