import { updateTimer, startTimer, resetTimer, pauseTimer } from "./timer.js";

const timerApp = document.querySelector(".timer");

export function appTimer() {
  createAppTimer();
}

function createAppTimer() {
  const timerContainer = document.createElement("div");
  timerContainer.classList.add("timer__container");

  const minutesBlock = createElementsTimerBlock("min");
  const secondsBlock = createElementsTimerBlock("seg");
  const millisecondesBlock = createElementsTimerBlock("miliseg");

  timerContainer.appendChild(minutesBlock);
  timerContainer.appendChild(secondsBlock);
  timerContainer.appendChild(millisecondesBlock);

  const timerButtons = document.createElement("div");
  timerButtons.classList.add("timer__buttons");

  const resetBtn = createButtons("reset");
  resetBtn.onclick = resetTimer;
  const playBtn = createButtons("play");
  playBtn.onclick = startTimer;
  const pauseBtn = createButtons("pause");
  pauseBtn.onclick = pauseTimer;

  timerButtons.appendChild(resetBtn);
  timerButtons.appendChild(playBtn);
  timerButtons.appendChild(pauseBtn);

  timerApp.appendChild(timerContainer);
  timerApp.appendChild(timerButtons);

  updateTimer();
}

function createElementsTimerBlock(description) {
  const timerBlock = document.createElement("div");
  timerBlock.classList.add("timer__block");

  const timerNumber = document.createElement("p");
  timerNumber.classList.add("timer__number");
  timerNumber.classList.add(description);

  const timerDescription = document.createElement("p");
  timerDescription.classList.add("timer__description");
  timerDescription.textContent = description;

  timerBlock.appendChild(timerNumber);
  timerBlock.appendChild(timerDescription);

  return timerBlock;
}

function createButtons(imgName) {
  const imgButton = document.createElement("img");
  imgButton.classList.add("timer__btn");
  imgButton.src = `../assets/${imgName}.png`;

  return imgButton;
}
