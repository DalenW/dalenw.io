//on page load clear the forms
//clearSRO();
clearGSX();

function GSXSubmit() {
    var text = "Issue: ";
    text += $("#GSXIssueInput").val();
    text += "<br>";
    text += "Steps Taken: ";
    text += $("#GSXStepsTakenInput").val();
    text += "<br>";
    text += "Cosmetic Condition: ";
    text += $("#GSXCosmeticInput").val();
    text += "<br>";
    text += "Recommended Resolution: ";
    text += $("#GSXRecommendedInput").val();

    $("#GSXOutputText").html(text);
    console.log("Submitted GSX Form")
}

function clearGSX() {
    $("#GSXIssueInput").val('');
    $("#GSXStepsTakenInput").val("Verified the issue, ");
    $("#GSXCosmeticInput").val('');
    $('#GSXWarrantyCheck').prop('checked', true);
    $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the PART.");
    console.log("Cleared GSX Form");
}

$("#GSXWarrantyCheck").change(function () {
    if($("#GSXWarrantyCheck").is(":checked")) {
        $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the PART.");
    } else {
        $("#GSXRecommendedInput").val("Device is eligible for Out of Warranty repair according to the VMI Guide. Recommend replacing the PART.");
    }
    console.log("GSX Warranty Checkbox was toggled");
});

//action for the buttons
$(document).ready(function() {
    $("#GSXClearButton").click(function(){
        clearGSX();
    }); 
});