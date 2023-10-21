function convert() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        resultElement.textContent = `Result: ${celsius}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else {
        resultElement.textContent = "Result: Please enter a temperature in Celsius";
    }
}
