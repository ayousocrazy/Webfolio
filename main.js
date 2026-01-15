const bulb = document.getElementById("bulb");

let isOn = true;

bulb.addEventListener("click", () => {
    if (isOn) {
        bulb.src = "./off.svg";
    } else {
        bulb.src = "./on.svg";
    }
    isOn = !isOn;
});