let timerInterval;

async function startTimer(minutes) {
  let seconds = 0;

  timerInterval = setInterval(async () => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      return;
    }

    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    await displayTime(minutes, seconds);
  }, 1000);
}

function displayTime(minutes, seconds) {
  return new Promise(resolve => {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    resolve();
  });
}

function resetTimer() {
  clearInterval(timerInterval);
  displayTime(0, 0);
}

document.getElementById('startBtn').addEventListener('click', async () => {
  const minutes = parseInt(document.getElementById('timeInput').value);
  await startTimer(minutes);
});

document.getElementById('resetBtn').addEventListener('click', resetTimer);