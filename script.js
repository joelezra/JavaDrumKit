// function that plays the corresponding audio to keys pressed on keyboard, ignoring unassigned keys

function playSound (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing'); // adds 'playing' class to keys pressed to style the transition
    audio.currentTime = 0; // makes audio play from start every time key is pressed
    audio.play();
}

function removeTransition (event) {
    if (event.propertyName !== 'transform') return; // skip it if it is not a transform
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key')); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // removes transition to reverse the transform
window.addEventListener('keydown', playSound); // listens for keydown event to execute playSound function