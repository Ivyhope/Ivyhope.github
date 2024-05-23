const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function adjustBehaviorBasedOnScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
        // Adjust behavior for mobile  
    } else if (screenWidth >= 576 && screenWidth < 992) {
        // Adjust behavior for tablet
    } else {
        // Adjust behavior for desktop
    }
}
adjustBehaviorBasedOnScreenSize();
window.addEventListener('resize', adjustBehaviorBasedOnScreenSize);
