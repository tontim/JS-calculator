document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent from submiussion

    //Get values
    const num1 = parseFloat(document.getElementById('num1').value);
    const operation = document.getElementById('operation').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    let result;

    //Calculation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid';
    }

    //Display result
    document.getElementById('result').textContent = `Result: ${result}`;
});