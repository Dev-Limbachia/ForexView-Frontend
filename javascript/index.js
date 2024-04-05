// To change website theme from light to dark 

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const logoImg = document.getElementById('logo-img');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.classList.remove('fa-toggle-off');
            themeToggle.classList.add('fa-toggle-on');
            themeToggle.style.color = '#ffffff'; // Change moon color
            logoImg.src = "./image/LogoDark.png"; // Change logo to dark mode
        } else {
            themeToggle.classList.remove('fa-toggle-on');
            themeToggle.classList.add('fa-toggle-off');
            themeToggle.style.color = '#1f1f1f'; // Change sun color
            logoImg.src = "./image/LogoLight.png"; // Change logo to light mode
        }
    });
});

// Activate the pill button 
function toggleActive(button) {
    // Remove 'active' class from all buttons
    var buttons = document.querySelectorAll('.pill-button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// For active button
function switchToArea() {
    Plotly.react("myPlot", areaData, layout);
    setActiveButton(this);
}

function switchToCandlestick() {
    Plotly.react("myPlot", candlestickData, layout);
    setActiveButton(this);
}

function maximize() {
    // Your maximize screen logic here
    setActiveButton(this);
}

function setActiveButton(button) {
    // Remove active class from all icons
    document.querySelectorAll('.graph-icon').forEach(icon => {
        icon.classList.remove('active-icon');
    });
    // Add active class to the clicked icon
    if(button) {
        button.classList.add('active-icon');
    }
}

// Adding passive event listener
document.querySelectorAll('.graph-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        setActiveButton(icon);
    }, { passive: true });
});



// Script for Graph plotting
const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
                const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 16, 17, 18, 18, 19];
                const openArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 16, 17, 17, 18, 18];
                const closeArray = [8, 9, 10, 9, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 18, 19];
                const lowArray = [6, 7, 8, 8, 8, 9, 9, 10, 12, 13, 14, 15, 16, 17, 17, 18];
                const highArray = [9, 10, 10, 11, 10, 11, 12, 13, 15, 15, 16, 17, 18, 19, 19, 20];
        
                // Define Area Graph Data
                const areaData = [{
                    x: xArray,
                    y: yArray,
                    fill: 'tozeroy',
                    type: "scatter",
                    mode: "lines+markers",
                    name: 'Area Graph'
                }];
        
                // Define Candlestick Chart Data
                const candlestickData = [{
                    x: xArray,
                    open: openArray,
                    close: closeArray,
                    high: highArray,
                    low: lowArray,
                    type: 'candlestick',
                    name: 'Candlestick Chart'
                }];
        
                // Define Layout
                const layout = {
                    xaxis: { range: [40, 210], title: "Time (hours)" },
                    yaxis: { range: [5, 20], title: "DailyFX price" },
                    title: "EUR to USD"
                };
        
                // Initial Plot using Area Graph
                Plotly.newPlot("myPlot", areaData, layout);
        
                // Function to switch to Area Graph
                function switchToArea() {
                    Plotly.react("myPlot", areaData, layout);
                }
        
                // Function to switch to Candlestick Chart
                function switchToCandlestick() {
                    Plotly.react("myPlot", candlestickData, layout);
                }
        
                // Function to maximize screen
                function maximize() {
                    // Your maximize screen logic here
                }



