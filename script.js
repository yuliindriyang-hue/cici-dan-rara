
const music = document.getElementById("music");
const opening = document.getElementById("opening");
const gate = document.getElementById("gate");
const main = document.getElementById("main");

// TANGGAL PERNIKAHAN
// Format: Tahun, Bulan - 1, Tanggal, Jam
const weddingDate = new Date(2026, 11, 20, 8, 0, 0);

// NOMOR WHATSAPP
const whatsappNumber = "6283198108181";

// BUKA UNDANGAN
function openInvitation() {
  opening.classList.add("hide");
  gate.classList.add("show");

  music.play().catch(() => {
    console.log("Musik perlu diputar manual.");
  });

  setTimeout(() => {
    gate.classList.add("open");
    main.classList.add("visible");
  }, 100);

  setTimeout(() => {
    gate.classList.remove("show");
  }, 1800);
}

// MUSIK ON/OFF
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// COUNTDOWN
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate.getTime() - now;

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"]
      .forEach(id => document.getElementById(id).textContent = "00");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP WHATSAPP
function sendRSVP() {
  const name = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;

  if (!name) {
    alert("Silakan masukkan nama Anda!");
    return;
  }

  const message =
    `Assalamu'alaikum, saya ${name}. ` +
    `Konfirmasi kehadiran: ${attendance}. ` +
    `Untuk undangan pernikahan Rara & Cici.`;

  const url =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

// ANIMASI BUNGA BERGUGURAN
function createPetal() {
  const petal = document.createElement("div");

  petal.className = "petal";
  petal.innerHTML = "✿";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 15) + "px";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.getElementById("petals").appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 500);
