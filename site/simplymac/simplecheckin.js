//on page load clear the forms
fullReset();

var repairVal = "N";
var optionSelect = false;
var additionalInfo = false;

var optionPhonesHTML = "<option>1. iPhone SE</option><option>2. iPhone 6s, 7, 8</option><option>3. iPhone 6s+, 7+, 8+</option><option>4. iPhone XR, 11</option><option>5. iPhone X, XS, 11 Pro</option><option>6. iPhone XS Max, 11 Pro Max</option>";
var optionBootHTML = "<option>1. Flashing Folder</option><option>2. Stuck Loading Bar</option><option>3. Cross-Out Symbol</option>"

$("#warrantyCheck").change(function () {
    if($("#warrantyCheck").is(":checked")) {
        $("#SROPriceInput").val("Apple Warranty");
    } else {
        $("#SROPriceInput").val("$");
    }

    if(repairVal == "N") {
        if($("#warrantyCheck").is(":checked")) {
            $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the PART.");
        } else {
            $("#GSXRecommendedInput").val("Device is eligible for Out of Warranty repair according to the VMI Guide. Recommend replacing the PART.");
        }
    } else if(repairVal == "1") {
        if($("#warrantyCheck").is(":checked")) {
            $("#SROPriceInput").val("$31.10 with tax");
        }
    } else if(repairVal == "2") {
        if($("#warrantyCheck").is(":checked")) {
            $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the battery.");
        }
    }
    SROSubmit();
    GSXSubmit();
});

$("#commonSelect").change(function () {
    repairVal = $("#commonSelect option:selected").val();
    console.log(repairVal);
    repairVal = repairVal.slice(0,1); //get first character which should be the corrosponding number
    console.log(repairVal);

    if(repairVal == "N") { //reset everything
        reset(true);
        optionSelection(false);
        additionalInfoToggle(false);
    }

    //set repair option selection
    if(repairVal == "1" || repairVal == "2") {
        $("#optionSelect").html(optionPhonesHTML);
        $("#optionSelectTitle").html("Device: ");
        $("#optionSelect").val("2. iPhone 6s, 7, 8");
    } else if(repairVal == "4") {
        $("#optionSelect").html(optionBootHTML);
        $("#optionSelectTitle").html("Option: ");
        $("#optionSelect").val("1. Flashing Folder");
    }

    //iphone display replacement
    if(repairVal == "1") { 
        reset(false);
        optionSelection(true);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Display is cracked and needs to be replaced.");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("EOD");
        $("#SROPriceInput").val("$177 + tax");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("Display is cracked and needs to be replaced.");
        $("#GSXStepsTakenInput").val("Verified the issue. Ran MRI and everything else passed. Device enclosure is fine and the display can be replaced.");
        $("#GSXCosmeticInput").val('Marks and dings, cracked display.');
        $("#GSXRecommendedInput").val("Device is eligible for Out of Warranty repair according to the VMI Guide. Recommend replacing the display.");

        SROSubmit();
        GSXSubmit();

    }

    //iphone battery replacement
    if(repairVal == "2") { 
        reset(false);
        optionSelection(true);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Battery fails diagnostics and needs to be replced.");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("EOD");
        $("#SROPriceInput").val("$82.04 with tax");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("Battery needs to be replaced.");
        $("#GSXStepsTakenInput").val("Verified the issue. Ran MRI and battery failed diagnositcs and needs to be replaced.");
        $("#GSXCosmeticInput").val('Marks and dings');
        $("#GSXRecommendedInput").val("Device is eligible for Out of Warranty repair according to the VMI Guide. Recommend replacing the battery.");

        SROSubmit();
        GSXSubmit();
    }

    //malware removal
    if(repairVal == "3") { 
        reset(false);
        optionSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Malware Removal");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("2 - 3 Business Days");
        $("#SROPriceInput").val("$75.06 with tax");
        $("#SROFirmwareInput").val("Off");

        SROSubmit();
    }

    //boot issues
    if(repairVal == "4") { 
        reset(false);
        optionSelection(true);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Boot issues.");
        $("#SROBackupInput").val("NA");
        $("#SROTimeframeInput").val("2 - 3 Business Days");
        $("#SROPriceInput").val("$75.06 with tax");
        $("#SROFirmwareInput").val("Off");

        SROSubmit();
    }

    //iphone no service rep
    if(repairVal == "5") { 
        reset(true);
        optionSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("iPhone 7 No Service REP");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("1 - 2 Weeks");
        $("#SROPriceInput").val("REP");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("iPhone 7 No Service REP");
        $("#GSXStepsTakenInput").val("Verified the issue. Ran MRI and Serial Number Reader.");
        $("#GSXCosmeticInput").val('Marks and dings');
        $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend mailing in the device for service.");

        SROSubmit();
        GSXSubmit();
    }

    //iphone x display rep
    if(repairVal == "6") { 
        reset(true);
        optionSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("iPhone X ghost touch display REP");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("EOD");
        $("#SROPriceInput").val("REP");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("iPhone X ghost touch display REP");
        $("#GSXStepsTakenInput").val("Verified the issue. Ran MRI, multi-touch diagnostics failed.");
        $("#GSXCosmeticInput").val('Marks and dings');
        $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the display.");

        SROSubmit();
        GSXSubmit();
    }

    //mac keyboard rep
    if(repairVal == "7") {
        reset(true);
        optionSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Keyboard REP. The keys having issues are ");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("5 - 7 Business Days");
        $("#SROPriceInput").val("REP");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("MacBook Keyboard REP");
        $("#GSXStepsTakenInput").val("Verified the issue. The keys having issues are ");
        $("#GSXCosmeticInput").val('Marks and dings');
        $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the Top Case.");

        SROSubmit();
        GSXSubmit();
    }

    //mac battery rep
    if(repairVal == "8") { 
        reset(true);
        optionSelection(false);
        additionalInfoToggle(true);

        $("#SROSymptominput").val("Battery REP. The battery needs to be replaced.");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("5 - 7 Business Days");
        $("#SROPriceInput").val("REP");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("MacBook Pro Battery Recall");
        $("#GSXStepsTakenInput").val("Verified the issue. The device is under the recall and requires a battery replacement.");
        $("#GSXCosmeticInput").val('Marks and dings');
        $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the Top Case.");

        $("#additionalInfo").html("661-02536<br>923-03454");


        SROSubmit();
        GSXSubmit();
    }
});

$("#optionSelect").change(function () {
    var value = $("#optionSelect option:selected").val();
    value = value.slice(0, 1);
    value = parseInt(value, 10);
    console.log(value);


    //iphone display
    if(repairVal == "1") {

        switch (value) {
            case 1:
                $("#SROPriceInput").val("$157 + tax");
                break;
            case 2:
                $("#SROPriceInput").val("$177 + tax");
                break;
            case 3:
                $("#SROPriceInput").val("$197 + tax");
                break;
            case 4:
                $("#SROPriceInput").val("$227 + tax");
                break;
            case 5:
                $("#SROPriceInput").val("$307 + tax");
                break;
            case 6:
                $("#SROPriceInput").val("$357 + tax");
                break;
            default:
                $("#SROPriceInput").val("$177 + tax");
                break;
        }
        
        //quick warranty check
        if($("#warrantyCheck").is(":checked")) {
            $("#SROPriceInput").val("$29.00 plus tax");
        }
    }

    //iphone battery
    if(repairVal == "2") {
        switch (value) {
            case 1:
            case 2:
            case 3:
                $("#SROPriceInput").val("$82.04 with tax");
                break;
            case 4:
            case 5:
            case 6:
                $("#SROPriceInput").val("$127 + tax");
                break;
        }
    }

    //boot issues
    if (repairVal == "4") {
        switch (value) {
            case 1:
                $("#SROSymptominput").val("Boots to a flashing folder.");
                break;
            case 2:
                $("#SROSymptominput").val("Loading bar is stuck during boot.");
                break;
            case 3:
                $("#SROSymptominput").val("Boots to a cross-out symbol.");
                break;
        
            default:
                $("#SROSymptominput").val("Boots to a flashing folder.");
                break;
        }
    }
    SROSubmit();
});

function reset(warranty) {
    clearGSX();
    clearSRO();

    if(warranty) {
        $('#warrantyCheck').prop('checked', true);
    } else {
        $('#warrantyCheck').prop('checked', false);
    }
}

function optionSelection(toggle) {
    if(optionSelect && !toggle) {
        $("#optionSelectDiv").fadeOut();
        optionSelect = false;
    }
    if(!optionSelect && toggle) {
        $("#optionSelectDiv").fadeIn();
        optionSelect = true;
    }
}

function additionalInfoToggle(toggle) {
    if(additionalInfo && !toggle) {
        $("#additionalInfoDiv").fadeOut();
        additionalInfo = false;
    }
    if(!additionalInfo && toggle) {
        $("#additionalInfoDiv").fadeIn();
        additionalInfo = true;
    }
}

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
    $("#GSXOutputText").css('margin-top', '25px');
    console.log("Submitted GSX Form");
}

function SROSubmit() {
    var text = "Symptom: ";
    text += $("#SROSymptominput").val();
    text += "<br>";
    text += "Backup: ";
    text += $("#SROBackupInput").val();
    text += "<br>";
    text += "Timeframe: ";
    text += $("#SROTimeframeInput").val();
    text += "<br>";
    text += "Price: ";
    text += $("#SROPriceInput").val();
    text += "<br>";
    text += "Firmware: ";
    text += $("#SROFirmwareInput").val();
    text += "<br>";

    $("#SROOutputText").html(text);
    $("#SROOutputText").css('margin-top', '25px');
    console.log("Submitted SRO Form");
}

function clearGSX() {
    $("#GSXIssueInput").val('');
    $("#GSXStepsTakenInput").val("Verified the issue, ");
    $("#GSXCosmeticInput").val('Marks and dings');
    $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the PART.");
    $("#GSXOutputText").html("");
    $("#GSXOutputText").css('margin-top', '0px');
    console.log("Cleared GSX Form");
}

function clearSRO() {
    $("#SROSymptominput").val('');
    $("#SROBackupInput").val("Yes");
    $("#SROTimeframeInput").val("2 - 3 Business Days");
    $("#SROPriceInput").val("$");
    $("#SROFirmwareInput").val("Off");
    $("#SROOutputText").html("");
    $("#SROOutputText").css('margin-top', '0px');
    console.log("Cleared SRO Form");
}

function fullReset() {
    clearGSX();
    clearSRO();
    resetRepairTree();

    repairVal = "N";
    optionSelect = false;
    additionalInfo = false;
}

function resetRepairTree() {
    $("#commonSelect").val("None");
    $("#optionSelectDiv").hide();
    $('#warrantyCheck').prop('checked', true);
    $("#additionalInfoDiv").hide();
}

$("#forms").change(function () {
    $("#commonSelect").val("None");
    repairVal = "N";
    optionSelection(false);
});

$("#GSXCheckIn").change(function (){
    GSXSubmit();
});

$("#SROCheckIn").change(function (){
    SROSubmit();
});

//action for the buttons
$(document).ready(function() {
    $("#SROClearButton").click(function() {
        clearSRO();
    });

    $("#GSXClearButton").click(function() {
        clearGSX();
    });
    $("#resetButton").click(function() {
        fullReset();
    });
});