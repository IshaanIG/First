let timer;
let seconds = 0;
let reps = 1;

let audio = new Audio('beep.wav');

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        document.getElementById('timer-display').innerText = `Rep ${reps}: 
Lift leg for ${seconds} seconds`;

        if (seconds === 5) {
            clearInterval(timer);
            seconds = 0;
            reps++;
            document.getElementById('timer-display').innerText = `Rest for 
2 seconds`;
	audio.play();  // Play the beep sound
            setTimeout(() => {
                startTimer();
            }, 2000);
        } else {
            seconds++;
        }
    }, 1000);
}

