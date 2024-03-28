document.addEventListener('DOMContentLoaded', function() {
    const temperatureValueElement = document.querySelector('.temperature-value');
    const thermometerValueElement = document.querySelector('.thermometer-value'); // Definindo a variável corretamente
    const alertSound = document.getElementById('alert-sound');
    const humidityValueElement = document.querySelector('.humidity-value');
    const humidityFillElement = document.querySelector('.humidity-fill');

    function updateSensorData() {
        const tempValue = Math.floor(Math.random() * 50); // Temperatura em graus Celsius
        const humidityValue = Math.floor(Math.random() * 100); // Corrigido: removida a declaração duplicada de humidityValueElement

        temperatureValueElement.textContent = `${tempValue}°C`; // Removido toFixed(1) para manter consistência com números inteiros
        // Atualiza a opacidade da nuvem baseada na umidade
        humidityValueElement.textContent = `${humidityValue}%`;
        humidityFillElement.style.width = `${humidityValue}%`; // Usando valor inteiro para consistência
    
        // Atualiza a altura do termômetro baseado na temperatura
        const thermometerHeightPercentage = (tempValue / 50) * 100; // 50 é a temperatura máxima esperada
        thermometerValueElement.style.height = `${thermometerHeightPercentage}%`;

        // Verifica o alerta de temperatura
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
