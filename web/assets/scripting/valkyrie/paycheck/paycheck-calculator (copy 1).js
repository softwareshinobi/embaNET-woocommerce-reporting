$(document).ready(function() {

  $("#results").hide();

  function tipCalculator() {

    //Collection of constants
    var defaultNumberOfHoursPerTwoWeeks = 80;
    var paycheckReductionMultiplier = 0.6985;
    var hoursInAYear = 2080;
    var numberOfDigitsOfPrecision = 0;

    //retrieve and store variables
    var grossAmountEarnedPerHour = $("#dollarPerHour").val();
    var numberOfHoursWorkedPerTwoWeeks = $("#hoursPerWeek").val();

    //Do a bit of input validation and correction
    if (numberOfHoursWorkedPerTwoWeeks == 0){

      //Set a default amount
      numberOfHoursWorkedPerTwoWeeks = defaultNumberOfHoursPerTwoWeeks;

      //update the input box with the default value
      $("#hoursPerWeek").val(numberOfHoursWorkedPerTwoWeeks);

    }

    //calculate the gross amount for the paycheck
    var grossAmountEarnedPerCheck = grossAmountEarnedPerHour * numberOfHoursWorkedPerTwoWeeks;

    //calculate the net amount for the paycheck
    var netAmountEarnedPerCheck = grossAmountEarnedPerCheck * (paycheckReductionMultiplier);

    //calculate the gross amount for the year
    var grossAmountEarnedPerYear = grossAmountEarnedPerHour * hoursInAYear;

    //calculate the gross amount for the year
    var netAmountEarnedPerYear = grossAmountEarnedPerYear * (paycheckReductionMultiplier);

    //update the text of the webpage
    $("#grossAmountEarnedPerCheck").text(grossAmountEarnedPerCheck.toFixed(numberOfDigitsOfPrecision));
    $("#netAmountEarnedPerCheck").text(netAmountEarnedPerCheck.toFixed(numberOfDigitsOfPrecision));
    $("#grossAmountEarnedPerYear").text(grossAmountEarnedPerYear.toFixed(numberOfDigitsOfPrecision));
    $("#netAmountEarnedPerYear").text(netAmountEarnedPerYear.toFixed(numberOfDigitsOfPrecision));

    //display the results area
    $("#results").show();

  };

  $("#calculate").click(tipCalculator);

});
