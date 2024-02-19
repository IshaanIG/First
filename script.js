let audio = new Audio('beep.wav');

let timer;
let reps = 0;

function playBeep() {
    audio.play();
}

function updateTimer(seconds) {
    document.getElementById('timer').innerText = `Timer: ${seconds}s`;
}

function updateReps(reps) {
    document.getElementById('repCounter').innerText = `Reps: ${reps}`;
}

function countOperation(reps) {
        // Increment reps counter
        reps++;
        updateReps(reps);

    
        // Beep to lift the leg every 6 seconds


        // Wait for 6 seconds (lift) or 2 seconds (pause)
        setTimeout(() => {
            // Update the timer display every second
            for (let i = 1; i <= 6; i++) {
                setTimeout(() => {
                    updateTimer(i);
                }, i * 1000); // Update the timer every second
            }

            // Beep to signal the next leg action every 6 seconds
            
                playBeep();
            
        }, 6000);

        setTimeout(() => {
            // Update the timer display every second
            for (let i = 1; i <= 2; i++) {
                setTimeout(() => {
                    updateTimer(i);
                }, i * 1000); // Update the timer every second
            }

            // Beep to signal the next leg action every 6 seconds

                playBeep();
            
        }, 8000);
    }

function startTimer() {
    // Beep to start
    playBeep();

    // Set initial values
    updateReps(0);
    updateTimer(0);
    reps = 0;

    // Start the timer loop
    countOperation(reps)
    timer = setInterval(countOperation(reps) , 8000); // 8000 milliseconds = 8 seconds
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
