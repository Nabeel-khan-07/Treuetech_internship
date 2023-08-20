function convertLength() {
    const inputMeters = parseFloat(document.getElementById('inputMeters').value);
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let convertedLength = 0;

    if (selectedUnit === 'centimeters') {
        convertedLength = inputMeters * 100;
    } else if (selectedUnit === 'kilometers') {
        convertedLength = inputMeters / 1000;
    } else if (selectedUnit === 'millimeters') {
        convertedLength = inputMeters * 1000;
    }

    document.getElementById('resultArea').innerText = `Converted Length: ${convertedLength} ${selectedUnit}`;
}
