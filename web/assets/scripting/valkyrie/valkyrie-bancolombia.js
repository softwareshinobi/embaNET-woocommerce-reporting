$(document).ready(function () {

    $("#toBank").val("--");

    $("#forMoto").val("--");

    $("#forFaltan").val("--");

    $("#forTraer").val("--");

    $("#forFritos").val("--");   

    $("#toHIM").val("--");

    $("#toHER").val("--");
    
});

function processValkyrieForm(){
  
    calculateBreakdown();
    
}

function calculateBreakdown() {

    var formInBank = $("#formInBank").val();

    console.log("#formInBank / ", formInBank);

    $("#toBank").val(formInBank.toLocaleString());

    var motoFee = 5000;

    $("#forMoto").val(motoFee.toLocaleString());

    var balanceMinusMoto = formInBank - motoFee;

    var formOtroDia = $("#formOtroDia").val();

    console.log("#formOtroDia/ ", formOtroDia);

    const number = formOtroDia || 0; // Handle null or undefined values

    console.log("#number/ ", number);

    const formattedNumber = number == 0 ? "--" : number.toLocaleString();

    console.log("#formattedNumber/ ", formattedNumber);

    $("#forFaltan").val(formattedNumber);

    var credits = formOtroDia * 1;

    console.log("#credits / ", credits);

    var forHER = (balanceMinusMoto * .25) - credits;

    console.log("#forHER / ", forHER);

    console.log("#forHIM / ", forHIM);

    if ($("#formDoTraer").is(':checked')) {

        $("#forFritos").val("--");

        $("#forTraer").val("--");

    } else {

        var formNumFritos = $("#formNumFritos").val();

        console.log("#formNumFritos/ ", formNumFritos);

        var fritoBill = formNumFritos * 2500;

        var formDoTraer = $("#formDoTraer").val().toLocaleString();

        var traerFee=40000;

        console.log("#formDoTraer/ ", formDoTraer);

        $("#forFritos").val(fritoBill.toLocaleString());

        $("#forTraer").val(traerFee.toLocaleString());

        var charges = fritoBill + 40000;  

        console.log("#charges / ", charges);

        forHER = forHER + charges;

        console.log("#forHER / ", forHER);

    }

    $("#toHER").val(forHER.toLocaleString());

    var forHIM = formInBank - forHER;

    $("#toHIM").val(forHIM.toLocaleString());

}

