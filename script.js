// menu button
const menu = document.getElementById("menu");
document.getElementById("menu-button").addEventListener("click", () => menu.classList.toggle("hidden"));

const deadline = new Date("2024-07-17T13:00");

const msPerSecond = 1000;
const msPerMinute = 60 * 1000;
const msPerHour = 60 * 60 * 1000;
const msPerDay = 24 * 60 * 60 * 1000;

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const today = new Date();
  const remainingMillis = deadline - today;

  const remainingDays = Math.floor(remainingMillis / msPerDay);
  const remainingHours = Math.floor((remainingMillis - remainingDays * msPerDay) / msPerHour);
  const remainingMinutes = Math.floor((remainingMillis - msPerDay * remainingDays - msPerHour * remainingHours) / msPerMinute);
  const remainingSeconds = Math.floor((remainingMillis - msPerDay * remainingDays - msPerHour * remainingHours - msPerMinute * remainingMinutes) / msPerSecond);

  daysElement.innerHTML = remainingDays;
  hoursElement.innerHTML = remainingHours;
  minutesElement.innerHTML = remainingMinutes;
  secondsElement.innerHTML = remainingSeconds;
}

setInterval(updateCountdown, 1000);

