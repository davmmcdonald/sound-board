function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e}"]`);
    const btn = document.querySelector(`.item[data-key="${e}"]`);
    btn.classList.add("pressed");
    sound.currentTime = 0;
    sound.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("pressed");
}

window.addEventListener("keydown",function(e) {
    console.log(e);
    playSound(e.keyCode);
});

const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener("transitionend",removeTransition));
items.forEach(item => item.addEventListener('click',function(e) {
    console.log(e);
    playSound(e.target.getAttribute('data-key'));
}));