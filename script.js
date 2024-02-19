// Initialize the audio element
let audio = new Audio('beep.wav');

// Function to play the beep sound
function playBeep() {
    audio.play();
}

// Function to control the leg lifting timer
function legLiftTimer() {
    // Initial beep to start the timer
    playBeep();

    // Loop to repeat the timer
    setInterval(() => {
        // Beep to lift the leg
        playBeep();

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

// Call the legLiftTimer function to start the timer
legLiftTimer();

