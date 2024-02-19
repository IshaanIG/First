let audio = new Audio('beep.wav');

let timer;
let reps = 0;

function playBeep() {
    audio.play();
}

function updateTimer(seconds) {
    document.getElementById('timer').innerText = `Timer: ${seconds}s`;
}

function updateReps() {
    document.getElementById('repCounter').innerText = `Reps: ${reps}`;
}

function startTimer() {
    // Beep to start
    playBeep();

    // Set initial values
    reps = 0;
    updateReps();
    updateTimer(0);

    // Start the timer loop
    timer = setInterval(() => {
        // Beep to lift the leg
        playBeep();

        // Increment reps counter
        reps++;
        updateReps();

        // Wait for 5 seconds
        setTimeout(() => {
            // Beep to lower the leg
            playBeep();
        }, 5000); // 5000 milliseconds = 5 seconds

        // Wait for 2 seconds (pause)
        setTimeout(() => {
            // Beep to signal the next leg lift
            playBeep();
        }, 2000); // 2000 milliseconds = 2 seconds
    }, 7000); // 7000 milliseconds = 7 seconds
}

function stopTimer() {
    // Stop the timer loop
    clearInterval(timer);

    // Beep to signal the end
    playBeep();
}

// Optional: Reset the timer and counter
function resetTimer() {
    clearInterval(timer);
    reps = 0;
    updateReps();
    updateTimer(0);
}
