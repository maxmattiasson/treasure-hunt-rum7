// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //
// Exempel: skatt 1

const treasure1 = document.getElementById("treasure1");
treasure1.addEventListener("click", () => {
  if (treasure1.classList.contains("found")) return;
  treasure1.classList.add("found");

  treasure1.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure2 = document.getElementById("treasure2");
treasure2.addEventListener("click", () => {
  if (treasure2.classList.contains("found")) return;
  treasure2.classList.add("found");
  treasure2.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure3 = document.getElementById("treasure3");
treasure3.addEventListener("click", () => {
  if (treasure3.classList.contains("found")) return;
  treasure3.classList.add("found");
  treasure3.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure4 = document.getElementById("treasure4");
treasure4.addEventListener("click", () => {
  if (treasure4.classList.contains("found")) return;
  treasure4.classList.add("found");
  treasure4.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure5 = document.getElementById("treasure5");
treasure5.addEventListener("click", () => {
  if (treasure5.classList.contains("found")) return;
  treasure5.classList.add("found");
  treasure5.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure6 = document.getElementById("treasure6");
treasure6.addEventListener("click", () => {
  if (treasure6.classList.contains("found")) return;
  treasure6.classList.add("found");
  treasure6.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure7 = document.getElementById("treasure7");
treasure7.addEventListener("click", () => {
  if (treasure7.classList.contains("found")) return;
  treasure7.classList.add("found");
  treasure7.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure8 = document.getElementById("treasure8");
treasure8.addEventListener("click", () => {
  if (treasure8.classList.contains("found")) return;
  treasure8.classList.add("found");
  treasure8.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure9 = document.getElementById("treasure9");
treasure9.addEventListener("click", () => {
  if (treasure9.classList.contains("found")) return;
  treasure9.classList.add("found");
  treasure9.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
const treasure10 = document.getElementById("treasure10");
treasure10.addEventListener("click", () => {
  if (treasure10.classList.contains("found")) return;
  treasure10.classList.add("found");
  treasure10.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

document.getElementById("opendia").addEventListener("click", () => {
  document.getElementById("dialog").showModal();
});
