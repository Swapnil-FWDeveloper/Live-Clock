function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';


    hours = hours % 12;
    hours = hours ? hours : 12; 

    // Format the time
    let timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + " " + ampm;

    // Display the time in the 'time' element
    document.getElementById('time').innerText = timeString;

    // month and year
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();

    // Display the date in the 'date' element
    document.getElementById('date').innerText = month + ' ' + now.getDate() + ', ' + year;

    // clock every second
    setTimeout(updateClock, 1000);
}

// Function to format time (pad with zero)
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// themetoggle

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('day-theme');
}

updateClock();

