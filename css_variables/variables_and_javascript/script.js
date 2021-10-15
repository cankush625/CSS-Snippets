const colorInput = document.querySelector('input[type=color]')
const colorButton = document.querySelector('button')
const colorVariable = '--bg-color'

// Listening for the Green! button click
colorButton.addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, 'green');
    console.log("Clicked on Green button");
});

// Listening for the change in the color picker
colorInput.addEventListener('change', _ => {
    // Log the result of change in the color picker
    console.log(_);
    // Get the color we selected from the color picker
    console.log(_.target.value);
    // Change the background color to the color selected from the color picker
    document.documentElement.style.setProperty(colorVariable, _.target.value);
});
