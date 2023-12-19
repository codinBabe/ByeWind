// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
//Function to toggle menu
function toggleMenu() {
    const navBars = document.querySelectorAll('.navbar');
    navBars.forEach(navBar => {
        navBar.classList.toggle('hidden');
    });
}

// Function to toggle user profile sub-drop-down
function toggleUserProfile() {
    const userProfile = document.querySelector('.pages-sub-dropdown');
    userProfile.classList.toggle('hidden');
}

document.querySelector('#logo').addEventListener('click', toggleMenu);
document.querySelector('#collape').addEventListener('click', toggleUserProfile);
document.querySelector('#toggle').addEventListener('click', toggleDarkMode);