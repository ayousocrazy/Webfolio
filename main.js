const bulb = document.getElementById("bulb");
const avatarImg = document.getElementById("avatarImg");
const eyes = document.getElementById("eyes");
const avatar = document.getElementById("avatar");

let isOn = true;

bulb.addEventListener("click", () => {
  if (isOn) {
    bulb.src = "./images/off.svg";
    avatarImg.src = "./images/asleep.svg";
    eyes.style.display = "none";
  } else {
    bulb.src = "./images/on.svg";
    avatarImg.src = "./images/awake.svg";
    eyes.style.display = "inline";
  }
  isOn = !isOn;
});

document.addEventListener("mousemove", (e) => {
  if (!isOn) return;

  const eyeRect = eyes.getBoundingClientRect();

  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const dx = e.clientX - eyeCenterX;
  const dy = e.clientY - eyeCenterY;

  const maxMove = 7;

  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const moveX = (dx / distance) * Math.min(distance / 25, maxMove);
  const moveY = (dy / distance) * Math.min(distance / 25, maxMove);

  eyes.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

