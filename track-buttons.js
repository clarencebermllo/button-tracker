// track-buttons.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tracking script initialized!');
    const buttonsToTrack = ['#button-bZnyX5cBH8'];
    buttonsToTrack.forEach(selector => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener('click', function() {
                console.log('Button clicked:', selector);
            });
        } else {
            console.warn('Button not found:', selector);
        }
    });
});
