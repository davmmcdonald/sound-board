function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.item[data-key="${e.keyCode}"]`);
    btn.classList.add("pressed");
    sound.currentTime = 0;
    sound.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("pressed");
}

window.addEventListener("keydown",playSound);

const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener("transitionend",removeTransition));