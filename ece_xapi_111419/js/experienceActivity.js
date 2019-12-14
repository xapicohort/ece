// Page Load Function change config
function pageLoaded() {
    var conf = {
        "endpoint": "https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/",
        "auth": "Basic " + toBase64("ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50")
    };
    ADL.XAPIWrapper.changeConfig(conf);
}

var email = "tester@ecexapi.com"

function saveChildName() {
    child = document.getElementById('select-child').value;
    console.log(child);
}

function saveCaregiverName() {
    caregiver = document.getElementById('select-caregiver').value;
    console.log(caregiver);
}

function saveActivityName() {
    activity = document.getElementById('select-activity').value;
    console.log(activity);
}

function saveTitle() {
    title = document.getElementById('title').value;
    console.log(title);
}

function saveDescription() {
    description = document.getElementById('description').value;
    console.log(description);
}

function saveResponse() {
    response = document.getElementById('response').value;
    console.log(response);
}

function send_statement_experienced() {
    var experienced = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": child,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/experienced",
            "display": {
                "en-US": "experienced"
            }
        },
        "object": {
            "id": "http://ecexapi.com/activities/" + activity,
            "definition": {
                "name": {
                    "en-US": title
                },
                "description": {
                    "en-US": description
                }
            },
            "objectType": "Activity"
        },
        "result": {
            "completion": true,
            "response": response,
            "duration": "PT10M"
        },
         "context": {
            "instructor": {
                "name": caregiver,
                "mbox": "mailto:" + email
            }
            }
    };
    ADL.XAPIWrapper.sendStatement(experienced);
    console.log(experienced);
}
