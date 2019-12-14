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

function saveCategory() {
    category = document.getElementById('select-category');
    categoryText=category.options[category.selectedIndex].text;
    console.log(category);
    console.log(categoryText);
}

function saveMilestone() {
    milestone = document.getElementById('select-milestone');
    milestoneText =milestone.options[milestone.selectedIndex].text;
    badge =milestone.options[milestone.selectedIndex].value;
    console.log(milestoneText);
    console.log(badge);
}

function saveObservation(){
    observation = document.getElementById('observation').value;
    console.log(observation);
}

function send_statement_mastered() {
    var mastered = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": child,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/mastered",
            "display": {
                "en-US": "mastered"
            }
        },
        "object": {
            "id": "http://ecexapi.com/competencies/"+badge,
            "definition": {
                "name": {
                    "en-US": milestoneText
                },
                "description": {
                    "en-US": categoryText
                },
                "type": "http://ecexapi.com/activityType/ece:Competence"
            },
            "objectType": "Activity"
        },
        "result": {
            "success": true,
            "response": observation,
        },
        "context": {
            "instructor": {
                "name": caregiver,
                "mbox": "mailto:" + email
            },
           
        },
        "attachments":[ {
            "contentType": "image/png",
            "usageType": "http://ecexapi.com/attachments/ece:Evidence",
            "display": {
                "en-US": badge
            },
            "description": {
                "en-US":milestoneText
            },
            "length": 2,
            "sha2": "22d8e81685f5400f62714d2c973a3a8583ada224be7fdacf49dcf4650090290a",
            "fileUrl": "http://www.ecexapi.com/images/"+badge+".png"
        }]
    };
    ADL.XAPIWrapper.sendStatement(mastered);
}