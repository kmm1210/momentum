const clockTitle = document.querySelector(".js-clock");

function handleCalChrismas() {
  const today = new Date();
  const xmasDay = new Date(`${today.getFullYear()}-12-25 00:00:00`);
  let diffTime = xmasDay.getTime() - today.getTime();

  var unitSecond = 1000;
  var unitMinute = unitSecond * 60;
  var unitHour = unitMinute * 60;
  var unitDay = unitHour * 24;

  const diffDays = Math.floor(diffTime / unitDay);
  const strDays = String(diffDays).padStart(2, "0");

  const diffHours =Math.floor((diffTime / unitMinute) % 24);
  const strHours = String(diffHours).padStart(2, "0");

  const diffMinutes = Math.floor((diffTime / unitMinute) % 60);
  const strMinutes = String(diffMinutes).padStart(2, "0");

  const diffSeconds = Math.floor((diffTime / unitSecond) % 60);
  const strSeconds = String(diffSeconds).padStart(2, "0");

  clockTitle.innerText = `${strDays}d ${strHours}h ${strMinutes}m ${strSeconds}s`;
}

handleCalChrismas();
setInterval(handleCalChrismas, 1000);
