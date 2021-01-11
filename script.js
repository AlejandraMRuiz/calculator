
const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');


keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    
    // console.log(typeof displayValue)

    if (displayValue === '0') {
    display.textContent = keyValue;
    } else {
        display.textContent = displayValue + keyValue;
    }


    if (type === 'operator')    {
        const operatorKeys = keys.querySelectorAll("[data-type='operator']")
        operatorKeys.forEach(el => { el.dataset.state = '' })
        // consider renaming 'el'

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = keyValue.dataset.key;
        key.dataset.state = 'selected'

    }


    if (type === 'equal')   {
        // perform a calculation
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        console.log(firstNumber, operator, secondNumber);

        // firstNumber + secondNumber
        // firstNumber - secondNumber
        // firstNumber * secondNumber
        // firstNumber / secondNumber
    }

});





// A's pseudo code for calculator app: 
// Start with the ADD and go on to subtract and so on.

// *ADD*

// TEST CASE

// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: Works.

// 2.) Click on the plus button
// EXPECTATION: Show + in the display. (Should display "1+")
// ACTUAL: Works.

// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: Works.

// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ???


// TEST CASE
// Description: Adding 11 + 22 = 33
// TEST CASE
// Description: Adding 1 + 2 + 3 = 6
// TEST CASE
// Description: Adding 11 + 22 + 33 = 66
// TEST CASE
// Description: Adding 1 + 2 + 3 + 4 = 10
// TEST CASE
// Description: Adding 11 + 22 + 33 + 44 = 110

























// PROJECT PLAN:

// STEP 0: Build a bare bone minimum HTML & CSS to start with.
// DONE!

// STEP 1: Add two numbers
// in progress...

// (a) get 6 to display on 'click' event.
// loading...


// STEP 2: Subtract two numbers

// STEP 3: Multiply two numbers

// STEP 4: Divide two numbers

// STEP 5: Display at least 10 digits on the screen

// STEP 6: Display decimals to at least the thousandth (.001)

// STEP 7: 
// Perform continuous functions
// Example -
// Press the 1 button
// Press the add button
// Press the 1 button
// Press the add button again (result should show as 2 on the screen)
// Press the 1 button
// Press the add button again (result should show as 3 on the screen)
// Pressing the clear button resets screen to 0
