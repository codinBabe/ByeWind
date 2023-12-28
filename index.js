// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateColors();
}
function updateColors() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Define color sets for light and dark mode
    const lightColors = ["#1C1C1C", "#BAEDBD", "#95A4FC", "#C6C7F8"];
    const darkColors = ["#C6C7F8", "#BAEDBD", "#B1E3FF", "#95A4FC"];
    const gapColor = isDarkMode ? 'black' : 'white'; // Adjust gap color based on dark mode

    // Set the colors based on the mode
    CustomDoughnut.colors = isDarkMode ? darkColors : lightColors;
    CustomDoughnut.gapColor = gapColor;

    // Redraw the doughnut chart
    CustomDoughnut.draw();
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

//draw doughnut chart 
const canvas = document.getElementById("myCanvas");
canvas.width = 100;
canvas.height = 100;

const ctx = canvas.getContext("2d");
ctx.lineCap = "round"
const PI = Math.PI;
const TAU = PI * 2;

function drawSlice(x, y, radius, startAngle, endAngle, color, lineWidth) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth
    ctx.arc(x, y, 40, startAngle, endAngle);
    ctx.stroke();
}

class Doughnut {
    constructor(options) {
        this.options = options;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.colors = options.colors;
        this.totalValue = [...Object.values(this.options.data)].reduce((a, b) => a + b, 0);
        this.radius = Math.min(this.x, this.y) - options.padding;
    }

    draw() {
        const DELTA = TAU - this.options.padding * Object.keys(this.options.data).length
        let colorIndex = 0;
        let startAngle = -PI / 2;

        for (const i in this.options.data) {
            const value = this.options.data[i];
            const sliceAngle = (DELTA * value) / this.totalValue;

            // draw the white padding
            drawSlice(this.x, this.y, this.radius, startAngle, startAngle + this.options.padding, this.gapColor, 15);
            startAngle += this.options.padding;
            const endAngle = startAngle + sliceAngle - this.options.spacing / 100;
            // draw the actual color
            drawSlice(this.x, this.y, this.radius, startAngle, endAngle, this.colors[colorIndex % this.colors.length], 15);

            startAngle += sliceAngle;
            colorIndex++;
        }
        // redraw the initial color to complete overlap
        drawSlice(this.x, this.y, this.radius, -PI / 2, -PI / 2 + this.options.padding, this.gapColor, 15);
        drawSlice(this.x, this.y, this.radius, -PI / 2 + this.options.padding, -PI / 2 + 2 * this.options.padding, this.colors[0], 15);
    }
}

let CustomDoughnut = new Doughnut({
    padding: 0.1,
    spacing: 0,
    data: {
        USA: 38.6, Mexico: 30.8, Others: 8.1, Canada: 22.5
    },
    colors: ["#1C1C1C", "#BAEDBD", "#95A4FC", "#F7F9FB"],
});

CustomDoughnut.draw();
updateColors();