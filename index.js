// Retrieve input fields and button
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const bmiResultElement = document.getElementById('bmi-result');
const categoryMsgElement = document.getElementById('category-msg');

// Add event listener to calculate button
calculateBtn.addEventListener('click', calculateBMI);

// Function to calculate BMI
function calculateBMI() {
    // Retrieve user input values
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validate input values
    if (!weight || !height) {
        alert('Please fill out both fields.');
        return;
    }
    if (weight <= 0 || height <= 0) {
        alert('Please enter positive numbers for weight and height.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height ** 2);
    const roundedBMI = bmi.toFixed(2);

    // Display calculated BMI and category message
    bmiResultElement.textContent = `BMI: ${roundedBMI}`;
    let categoryMsg;
    if (roundedBMI < 18.5) {
        categoryMsg = 'Underweight';
    } else if (roundedBMI < 24.9) {
        categoryMsg = 'Normal weight';
    } else if (roundedBMI < 29.9) {
        categoryMsg = 'Overweight';
    } else {
        categoryMsg = 'Obesity';
    }
    categoryMsgElement.textContent = `You are ${categoryMsg}.`;
}