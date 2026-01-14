const bulb = document.getElementById("bulb");

let isOn = true;

bulb.addEventListener("click", () => {
    if (isOn) {
        bulb.src = "./off_logo.svg";
    } else {
        bulb.src = "./on_logo.svg";
    }
    isOn = !isOn;
});