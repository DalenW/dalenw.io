//on page load clear the forms
fullReset();

var repairVal = "N";
var deviceSelect = false;
var additionalInfo = false;

function fullReset() {
    clearGSX();
    clearSRO();
    resetRepairTree();

    repairVal = "N";
    deviceSelect = false;
    additionalInfo = false;
}

function resetRepairTree() {
    $("#commonSelect").val("None");
    $("#deviceSelectDiv").hide();
    $('#warrantyCheck').prop('checked', true);
    $("#additionalInfoDiv").hide();
}

$("#forms").change(function () {
    $("#commonSelect").val("None");
    repairVal = "N";
    deviceSelection(false);
})

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
    }
});



$("#commonSelect").change(function () {
    repairVal = $("#commonSelect option:selected").val();
    console.log(repairVal);
    repairVal = repairVal.slice(0,1); //get first character which should be the corrosponding number
    console.log(repairVal);

    if(repairVal == "N") { //reset everything
        reset(true);
        deviceSelection(false);
        additionalInfoToggle(false);
    }

    //iphone display replacement
    if(repairVal == "1") { 
        reset(false);
        deviceSelection(true);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Display is cracked and needs to be replced.");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("EOD");
        $("#SROPriceInput").val("$177 + tax");
        $("#SROFirmwareInput").val("Off");

        $("#GSXIssueInput").val("Display is cracked and needs to be replced.");
        $("#GSXStepsTakenInput").val("Verified the issue. Ran MRI and everything else passed. Device enclosure is fine and the display can be replaced.");
        $("#GSXCosmeticInput").val('Marks and dings, cracked display.');
        $("#GSXRecommendedInput").val("Device is eligible for Out of Warranty repair according to the VMI Guide. Recommend replacing the display.");

        SROSubmit();
        GSXSubmit();

    }

    //iphone battery replacement
    if(repairVal == "2") { 
        reset(false);
        deviceSelection(true);
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
        deviceSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Malware Removal");
        $("#SROBackupInput").val("Yes");
        $("#SROTimeframeInput").val("2 - 3 Business Days");
        $("#SROPriceInput").val("$75.06 with tax");
        $("#SROFirmwareInput").val("Off");

        SROSubmit();
    }

    //wipe and reinstall
    if(repairVal == "4") { 
        reset(false);
        deviceSelection(false);
        additionalInfoToggle(false);

        $("#SROSymptominput").val("Wipe and reinstall macOS Catalina.");
        $("#SROBackupInput").val("NA");
        $("#SROTimeframeInput").val("2 - 3 Business Days");
        $("#SROPriceInput").val("$75.06 with tax");
        $("#SROFirmwareInput").val("Off");

        SROSubmit();
    }

    //iphone no service rep
    if(repairVal == "5") { 
        reset(true);
        deviceSelection(false);
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
        deviceSelection(false);
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
        deviceSelection(false);
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
        deviceSelection(false);
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

        $("#additionalInfo").html("661-02536<br>923-03545");


        SROSubmit();
        GSXSubmit();
    }
});

$("#deviceSelect").change(function () {
    var value = $("#deviceSelect option:selected").val();
    value = value.slice(0, 1);

    //iphone display
    if(repairVal == "1") {
        if(value == "1") { //se
            $("#SROPriceInput").val("$157 + tax");
        } else if(value == "2") { //6s
            $("#SROPriceInput").val("$177 + tax");
        } else if(value == "3") { //6s+
            $("#SROPriceInput").val("$197 + tax");
        } else if(value == "4") { //XR
            $("#SROPriceInput").val("$227 + tax");
        } else if(value == "5") { //X
            $("#SROPriceInput").val("$307 + tax");
        } else if(value == "6") { //XSMax
            $("#SROPriceInput").val("$357 + tax");
        }

        //quick warranty check
        if($("#warrantyCheck").is(":checked")) {
            $("#SROPriceInput").val("$29.00 plus tax");
        }
    }

    //iphone battery
    if(repairVal == "2") {
        if(value == "1" || value == "2" || value == "3") {
            $("#SROPriceInput").val("$82.04 with tax");
        } else if(value == "4" || value == "5" || value == "6"){
            $("#SROPriceInput").val("$127 + tax");
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

function deviceSelection(toggle) {
    if(deviceSelect && !toggle) {
        $("#deviceSelectDiv").fadeOut();
        deviceSelect = false;
    }
    if(!deviceSelect && toggle) {
        $("#deviceSelectDiv").fadeIn();
        deviceSelect = true;
    }
    $("#deviceSelect").val("2. iPhone 6s, 7, 8");
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
    console.log("Submitted SRO Form");
}

function clearGSX() {
    $("#GSXIssueInput").val('');
    $("#GSXStepsTakenInput").val("Verified the issue, ");
    $("#GSXCosmeticInput").val('Marks and dings');
    $("#GSXRecommendedInput").val("Device is eligible for In Warranty repair according to the VMI Guide. Recommend replacing the PART.");
    $("#GSXOutputText").html("");
    console.log("Cleared GSX Form");
}

function clearSRO() {
    $("#SROSymptominput").val('');
    $("#SROBackupInput").val("Yes");
    $("#SROTimeframeInput").val("2 - 3 Business Days");
    $("#SROPriceInput").val("$");
    $("#SROFirmwareInput").val("Off");
    $("#SROOutputText").html("");
    console.log("Cleared SRO Form");
}

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