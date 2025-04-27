
const eyes = document.querySelectorAll('.eye');
const yellowEyes = document.querySelectorAll('.yellow-eye');
const catBody = document.querySelector('catBody');


let cursorPosition = { x: 0, y: 0 };
let windowWidth= window.innerWidth;
let windowHeight = window.innerHeight;

function windowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}

function mousemove(e) {
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;
    requestAnimationFrame(follow);
}

const followCursor = (el, xrel, yrel) => {
    const eloffset= el.getBoundingClientRect();
    const centerX = eloffset.left + eloffset.width / 2;
    const centerY = eloffset.top + eloffset.height / 2;
    const distanceLeft = Math.round(((cursorPosition.x - centerX) * 100) / windowWidth);
    const distanceTop =  Math.round(((cursorPosition.y - centerY) * 100) / windowHeight);
    el.style.transform = `translate(${distanceLeft/xrel}px, ${distanceTop/yrel}px)`;
}

const follow =() => {
    eyes.forEach(eye => followCursor(eye, 4, 4));
    yellowEyes.forEach(yellowEye => followCursor(yellowEye, 10, 10));
    catBody.followCursor(catBody, 1, 1);
}

window.addEventListener('resize', windowSize);
window.addEventListener('mousemove', mousemove);

