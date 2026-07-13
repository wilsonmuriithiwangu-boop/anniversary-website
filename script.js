/* INTRO + MUSIC */

const introScreen = document.getElementById("introScreen");
const bgMusic = document.getElementById("bgMusic");

introScreen.addEventListener("click", () => {

  introScreen.style.opacity = "0";

  setTimeout(() => {
    introScreen.style.display = "none";
  },1000);

  bgMusic.play();

});

/* VIDEO SYSTEM */

const lockedVideo = document.getElementById("lockedVideo");
const passwordPopup = document.getElementById("passwordPopup");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");

const blurOverlay = document.getElementById("blurOverlay");
const surpriseVideo = document.getElementById("surpriseVideo");
const videoControls = document.getElementById("videoControls");

/* SECRET PASSWORD */

const secretPassword = "KITYCATT#SMILES";

/* OPEN PASSWORD POPUP */

lockedVideo.addEventListener("click", () => {

  passwordPopup.classList.remove("hidden");

});

/* UNLOCK VIDEO */

unlockBtn.addEventListener("click", () => {

  if(passwordInput.value === secretPassword){

    passwordPopup.classList.add("hidden");

    blurOverlay.style.display = "none";

    videoControls.classList.remove("hidden");

    /* STOP BACKGROUND MUSIC */

    bgMusic.pause();

    /* PLAY VIDEO */

    surpriseVideo.play();

  }else{

    alert("Wrong Password ❤️");

  }

});

/* WHEN VIDEO ENDS */

surpriseVideo.addEventListener("ended", () => {

  bgMusic.play();

});

/* IF USER PAUSES VIDEO */

surpriseVideo.addEventListener("pause", () => {

  if(!surpriseVideo.ended){

    bgMusic.play();

  }

});

/* IF VIDEO PLAYS AGAIN */

surpriseVideo.addEventListener("play", () => {

  bgMusic.pause();

});

/* TAB VISIBILITY CONTROL */

document.addEventListener("visibilitychange", () => {

  if(document.hidden){

    bgMusic.pause();

  }else{

    /* only play if video is NOT playing */

    if(surpriseVideo.paused){

      bgMusic.play();

    }

  }

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

});
window.addEventListener("beforeunload", () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;
});
const orbit = document.getElementById("orbit");
const images = orbit.querySelectorAll("img");
const radius = Math.min(window.innerWidth * 0.30, 280);
images.forEach((img, index) =>{
  const angle = (index/images.length) * (Math.PI * 2);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  img.style.left = `calc(50% + ${x}px - 45px)`;
  img.style.top = `calc(50% + ${y}px - 45px)`;
});
const backButton = document.getElementById("backButton");

backButton.addEventListener("click", () => {

  introScreen.style.display = "flex";
  introScreen.style.opacity = "1";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  bgMusic.pause();
  bgMusic.currentTime = 0;

});