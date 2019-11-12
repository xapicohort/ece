// Page Load Function change config
function pageLoaded() {
     var conf = {
                     "endpoint": "https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/",
                     "auth": "Basic " + toBase64("ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50")
                     
    };
            ADL.XAPIWrapper.changeConfig(conf);
}

var email = "tester@ecexapi.com"

function saveGuardianName() {
    guardian = document.getElementById('guardian').value;
    console.log(guardian);
}
function saveChildName() {
    child = document.getElementById('select-child').value;
    console.log(child);
}

function saveCaregiverName() {
    caregiver = document.getElementById('select-caregiver').value;
    console.log(caregiver);
}


function send_statement_droppedOff() {
    var droppedOff = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": guardian,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://id.tincanapi.com/ECE_VERBS/dropped-off",
            "display": {
                "en-US": "dropped-off"
            }
        },
        "object": {
            "id": "http://ecexapi/activities/dropped-off/child",
            "definition": {
                "name": {
                    "en-US": child
                },
                "description": {
                    "en-US": guardian + " dropped off " + child + " to " + caregiver
                },
            },
            "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(droppedOff);
}
