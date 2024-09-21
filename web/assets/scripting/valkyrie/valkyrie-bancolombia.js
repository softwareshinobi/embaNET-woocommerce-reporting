$(document).ready(function () {

    resetRightForm();

});

function resetRightForm(){

    $("#toBank").val("--");

    $("#forMoto").val("--");

    $("#forFaltan").val("--");

    $("#forTraer").val("--");

    $("#forFritos").val("--");   

    $("#toHIM").val("--");

    $("#toHER").val("--");
    
}
    
function processValkyrieForm(){

  resetRightForm();
  
  calculateBreakdown();
    
}

function calculateBreakdown() {


let usd = Intl.NumberFormat('en-US');

    /////////////////
    
    var amountInBancolombia = $("#formInBank").val();
    console.log("amountInBancolombia / ", amountInBancolombia);
    
    var formOtroDia = $("#formOtroDia").val();
        console.log("#formOtroDia/ ", formOtroDia);

    var formNumFritos = $("#formNumFritos").val();
        console.log("#formNumFritos/ ", formNumFritos);

    /////////////////
    


    $("#toBank").val(usd.format(amountInBancolombia));

    var motoFee = 5000;

    $("#forMoto").val(usd.format(motoFee));

    var balanceMinusMoto = amountInBancolombia - motoFee;





    const number = formOtroDia || 0; // Handle null or undefined values

    console.log("#number/ ", number);

    const formattedNumber = number == 0 ? "--" : usd.format(number);

    console.log("#formattedNumber/ ", formattedNumber);

    $("#forFaltan").val();

    var credits = formOtroDia * 1;

    console.log("#credits / ", credits);

    var forHER = motoFee + (amountInBancolombia * .25) - credits;

    console.log("#forHER / ", forHER);

    console.log("#forHIM / ", forHIM);

    if ($("#formDoTraer").is(':checked')) {

        var formNumFritos = $("#formNumFritos").val()||0;
        console.log("#formNumFritos/ ", formNumFritos);
        
var numFritos = formNumFritos == 0 ? "--" : usd.format(formNumFritos* 2500);

        console.log("#numFritos/ ", numFritos);
        
        $("#forFritos").val(numFritos);
   //     var fritoBill = formNumFritos ;

        var formDoTraer = $("#formDoTraer").val();

        var traerFee=40000;

        console.log("#formDoTraer/ ", formDoTraer);






        $("#forTraer").val(usd.format(traerFee));
        
               var charges = (formNumFritos * 2500) + traerFee;  

        console.log("#charges / ", charges);

        forHER = forHER + charges;

        console.log("#forHER / ", forHER);

    } else {

        $("#forFritos").val("--");

        $("#forTraer").val("--");

    }

    $("#toHER").val(usd.format(forHER));

    var forHIM = amountInBancolombia - forHER;

    $("#toHIM").val(usd.format(forHIM));

}

