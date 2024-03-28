document.addEventListener('DOMContentLoaded', function() {
    const temperatureValueElement = document.querySelector('.temperature-value');
    const thermometerValueElement = document.querySelector('.thermometer-value');
    const alertSound = document.getElementById('alert-sound');
    const humidityValueElement = document.querySelector('.humidity-value');
    const humidityFillElement = document.querySelector('.humidity-fill');

    function updateSensorData() {
        const tempValue = Math.floor(Math.random() * 50);
        const thermometerHeightPercentage = (tempValue / 50) * 100;
        const humidityValue = Math.floor(Math.random() * 100);
        temperatureValueElement.textContent = `${tempValue}°C`;

        humidityValueElement.textContent = `${humidityValue}%`;
        humidityFillElement.style.width = `${humidityValue}%`;
        thermometerValueElement.style.height = `${thermometerHeightPercentage}%`;

        if (tempValue >= 50) {
            document.body.classList.add('temperature-alert');
            alertSound.play();
        } else {
            document.body.classList.remove('temperature-alert');
            alertSound.pause();
        }
    }

    setInterval(updateSensorData, 1000);
});
