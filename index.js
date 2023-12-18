// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const navImgs = document.querySelectorAll('.nav img');
    navImgs.forEach(navImg => {
        navImg.classList.toggle('.dark-mode');
    });
    const anchorTags = document.querySelectorAll('.left a');
    anchorTags.forEach(tag => {
        tag.classList.toggle('dark-mode');
    });
    const anchorImgs = document.querySelectorAll('dropdown-content img');
    anchorImgs.forEach(anchorImg => {
        anchorImg.classList.toggle('dark-mode');
    });
    const containers = document.querySelectorAll('.dark-mode-container');
    containers.forEach(container => {
        container.classList.toggle('dark-mode');
    });
}

function toggleMenu() {
    const navBars = document.querySelectorAll('.navbar');
    navBars.forEach(navBar => {
        navBar.classList.toggle('hidden');
    });
}
document.querySelector('#logo').addEventListener('click', toggleMenu);
document.querySelector('#toggle').addEventListener('click', toggleDarkMode);