let defuserTextEl = document.getElementById("defuserText");
let timerEl = document.getElementById("timer");

let countDown = 10;

let intervalId = setInterval(() => {
    countDown -= 1;

    timerEl.textContent = countDown;

    if(countDown === 0) {
        timerEl.textContent = "Boom";
        clearInterval(intervalId);
    }
}, 1000);

defuserTextEl.addEventListener('keydown', (event) => {
    let bombDefuserText = event.target.value;

    if(event.key = "Enter" && bombDefuserText === 'defuse' && countDown !== 0 ) {
        timerEl.textContent = "You did it!";
        timerEl.style.color = 'green';
        clearInterval(intervalId);
    }
})














