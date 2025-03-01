export let interval;
export let millisecondes = 0;
export let seconds = 0;
export let minutes = 0;

export function updateTimer() {
  const elementMilliseconds = document.querySelector(".miliseg");
  const elementSeconds = document.querySelector(".seg");
  const elementMinutes = document.querySelector(".min");

  elementMilliseconds.textContent = `${millisecondes}`.padStart(2, "0");
  elementSeconds.textContent = `${seconds}`.padStart(2, "0");
  elementMinutes.textContent = `${minutes}`.padStart(2, "0");
}

export function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      if (millisecondes < 99) {
        millisecondes++;
      } else {
        millisecondes = 0;
        seconds++;
      }

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      updateTimer();
    }, 10);
  }
}

export function resetTimer() {
  clearInterval(interval);
  interval = null;
  millisecondes = 0;
  seconds = 0;
  minutes = 0;
  updateTimer();
}

export function pauseTimer() {
  clearInterval(interval);
  interval = null;
}
