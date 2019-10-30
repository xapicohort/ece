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
    child = document.getElementById('select-choice-child').value;
    console.log(child);
}

function send_statement_fellAsleep() {
    var fellAsleep = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": child,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://id.tincanapi.com/ECE_VERBS/fell-asleep",
            "display": {
                "en-US": "fell-asleep"
            }
        },
        "object": {
            "id": "http://ecexapi/child/fell-asleep",
            "definition": {
                "name": {
                    "en-US": "fell-asleep"
                },
                "description": {
                    "en-US": "Child fell-asleep at naptime."
                },
            },
            "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(fellAsleep);
}



function send_statement_wokeUp() {
    var wokeUp = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": child,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://id.tincanapi.com/ECE_VERBS/woke-up",
            "display": {
                "en-US": "woke-up"
            }
        },
        "object": {
            "id": "http://ecexapi/child/woke-up",
            "definition": {
                "name": {
                    "en-US": "woke-up"
                },
                "description": {
                    "en-US": "Child woke from nap -need to figure out time-.."
                },
            },
            "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(wokeUp);
}


function send_statement_didNotSleep() {
    var fellAsleep = {
        "actor": {
            "mbox": "mailto:" + email,
            "name": child,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://id.tincanapi.com/ECE_VERBS/fell-asleep",
            "display": {
                "en-US": "fell-asleep"
            }
        },
        "object": {
            "id": "http://ecexapi/child/did-not-fall-asleep",
            "definition": {
                "name": {
                    "en-US": "fell-asleep"
                },
                "description": {
                    "en-US": "Child did not fall-asleep at naptime."
                },
            },
            "objectType": "Activity"
        },
        "result": {
            "success": false,
            "response": "Child did not sleep during naptime."
        }
    };
    ADL.XAPIWrapper.sendStatement(fellAsleep);
}
