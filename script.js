/*
	WEB 303 Assignment 1 - jQuery
	Ishu Sandhu
*/

$(document).ready(function () {
	$('salary, #percent').on('change', function () {
		// Get the values from the input fields
        var salary = parseFloat($('#salary').val());
        var percent = parseFloat($('#percent').val());

        // Calculate the amount to spend on tech
        var amount = (salary * percent) / 100;

        // Round the amount to 2 decimal places
        var roundedAmount = amount.toFixed(2);

        // Insert the calculated amount with a dollar sign into the span#amount element
        $('#amount').text('$' + roundedAmount);
    });
});

