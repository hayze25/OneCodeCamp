
function createCircle(event) {
    const circleSize = Math.floor(Math.random() * 100) + 50; // Random size between 50 and 150 pixels
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = circle.style.height = circleSize + 'px';
    circle.style.left = event.clientX - circleSize / 2 + 'px'; // adjust for circle center
    circle.style.top = event.clientY - circleSize / 2 + 'px'; // adjust for circle center
    document.body.appendChild(circle);
}

document.addEventListener('click', createCircle);

