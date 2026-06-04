let currentPage = 0;
const pages = document.querySelectorAll(".page");
const dots = document.getElementById("dots");
const music = document.getElementById("bgMusic");
const musicIcon = document.getElementById("musicIcon");

const letterText = `
Happy Birthday, sayang 💗

Terima kasih sebab hadir dalam hidup saya.
Awak adalah salah satu hadiah paling indah yang saya pernah dapat.

Saya harap hari ini buat awak rasa disayangi,
dihargai dan diraikan sepenuh hati.

Walaupun kita jauh,
saya tetap nak usaha untuk kita.

I love you, Wan Nur Fasha Aida.
Today, tomorrow, and always.
`;

const reasons = [
  "Sebab awak selalu buat saya senyum.",
  "Sebab awak comel walaupun awak tak perasan.",
  "Sebab awak buat saya rasa tenang.",
  "Sebab suara awak boleh ubah mood saya.",
  "Sebab awak sangat bermakna dalam hidup saya.",
  "Sebab dengan awak, saya rasa cukup.",
  "Sebab saya sayang awak lebih daripada yang saya mampu tulis di sini.",
  "Sebab awak adalah orang yang saya harap ada dalam masa depan saya."
];

let reasonIndex = 0;
let typeStarted = false;
let skyStarted = false;

function startExperience() {
  music.play();
  musicIcon.textContent = "Ⅱ";
  nextPage();
}

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");

  renderDots();

  if (pages[index].classList.contains("letter-page") && !typeStarted) {
    typeStarted = true;
    typeWriter();
  }

  if (pages[index].classList.contains("sky-page") && !skyStarted) {
    drawStars();
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function renderDots() {
  dots.innerHTML = "";

  pages.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = index === currentPage ? "dot active" : "dot";

    dot.onclick = () => {
      currentPage = index;
      showPage(currentPage);
    };

    dots.appendChild(dot);
  });
}

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicIcon.textContent = "Ⅱ";
  } else {
    music.pause();
    musicIcon.textContent = "♪";
  }
}

function typeWriter() {
  const target = document.getElementById("typeText");
  let i = 0;

  function typing() {
    if (i < letterText.length) {
      target.innerHTML += letterText.charAt(i) === "\n" ? "<br>" : letterText.charAt(i);
      i++;
      setTimeout(typing, 35);
    }
  }

  typing();
}

function changeReason() {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  document.getElementById("reasonCard").textContent = reasons[reasonIndex];
}

function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal-fall";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 420);

/* Night Sky */
function drawStars() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const stars = [];

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.5,
      opacity: Math.random()
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.opacity += (Math.random() - 0.5) * 0.05;
      star.opacity = Math.max(0.25, Math.min(1, star.opacity));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

function startNightSky() {
  if (skyStarted) return;

  skyStarted = true;

  const nameText = "WAN NUR FASHA AIDA";
  const wishText = "Happy Birthday My Love ❤️";

  const nameTarget = document.getElementById("skyName");
  const wishTarget = document.getElementById("skyWish");

  nameTarget.innerHTML = "";
  wishTarget.innerHTML = "";

  let i = 0;

  const typingName = setInterval(() => {
    nameTarget.innerHTML += nameText[i];
    i++;

    if (i >= nameText.length) {
      clearInterval(typingName);

      setTimeout(() => {
        wishTarget.innerHTML = wishText;
        finalHearts();
      }, 900);
    }
  }, 140);
}

function finalHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "petal-fall";
    heart.style.background = "#ff4fa3";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

showPage(currentPage);

function startNightSky() {
  if (skyStarted) return;

  skyStarted = true;

  const btn = document.getElementById("finalBtn");
  btn.style.display = "none";

  const nameText = "WAN NUR FASHA AIDA";
  const wishText = "Happy Birthday My Love ❤️";

  const nameTarget = document.getElementById("skyName");
  const wishTarget = document.getElementById("skyWish");

  nameTarget.innerHTML = "";
  wishTarget.innerHTML = "";

  let i = 0;

  const typingName = setInterval(() => {
    nameTarget.innerHTML += nameText[i];
    i++;

    if (i >= nameText.length) {
      clearInterval(typingName);

      setTimeout(() => {
        wishTarget.innerHTML = wishText;
        startFinalPhotoAnimation();
      }, 900);
    }
  }, 140);
}

function startFinalPhotoAnimation() {
  const photos = [
    "assets/photo1.jpg",
    "assets/photo2.jpg",
    "assets/photo3.jpg",
    "assets/photo4.jpg",
    "assets/photo5.jpg",
    "assets/photo6.jpg",
    "assets/photo7.jpg",
    "assets/photo8.jpg",
    "assets/photo9.jpg",
    "assets/photo10.jpg"
  ];

  const stage = document.getElementById("finalPhotoStage");
  const img = document.getElementById("finalPhoto");

  let index = 0;

  stage.style.display = "block";

  function showPhoto() {
    img.classList.remove("photo-pop-in", "photo-pop-out");
    void img.offsetWidth;

    img.src = photos[index];
    img.classList.add("photo-pop-in");

    setTimeout(() => {
      img.classList.remove("photo-pop-in");
      img.classList.add("photo-pop-out");
    }, 1400);

    index++;

    if (index < photos.length) {
      setTimeout(showPhoto, 2200);
    } else {
      setTimeout(() => {
        img.classList.remove("photo-pop-out");
        img.src = "assets/photo1.jpg";
        img.classList.add("photo-pop-in");

        document.getElementById("skyWish").innerHTML =
          "Every memory with you is my favourite one ❤️";

        finalHearts();
      }, 2200);
    }
  }

  showPhoto();
}