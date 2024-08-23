// script.js
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // months are 0-based in JavaScript
    const year = parseInt(document.getElementById('year').value);
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const second = parseInt(document.getElementById('second').value);

    if (!day || !month || !year || !hour || !minute || !second) {
        alert('Please enter a valid date and time.');
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month, day, hour, minute, second);
    
    let ageInSeconds = Math.floor((today - birthDate) / 1000);
    
    const years = Math.floor(ageInSeconds / (365.25 * 24 * 3600));
    ageInSeconds %= (365.25 * 24 * 3600);
    
    const months = Math.floor(ageInSeconds / (30 * 24 * 3600));
    ageInSeconds %= (30 * 24 * 3600);
    
    const days = Math.floor(ageInSeconds / (24 * 3600));
    ageInSeconds %= (24 * 3600);
    
    const hours = Math.floor(ageInSeconds / 3600);
    ageInSeconds %= 3600;
    
    const minutes = Math.floor(ageInSeconds / 60);
    const seconds = ageInSeconds % 60;

    document.getElementById('result').textContent = 
        `You are ${years} years, ${months} months, ${days} days, ` +
        `${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;
}
