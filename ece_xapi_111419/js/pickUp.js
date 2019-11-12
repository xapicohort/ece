// Page Load Function change config
function pageLoaded(){
   var conf = {
                     "endpoint" : "https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/",
                     "auth" : "Basic " + toBase64("ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50")
                     };
                   ADL.XAPIWrapper.changeConfig(conf);   
}

var email= "tester@ecexapi.com"

function saveGuardianName(){
    	guardian = document.getElementById('guardian').value;
	console.log(guardian);
}
function saveChildName(){
  	child = document.getElementById('select-child').value;
	console.log(child);  
}

function saveCaregiverName(){
    	caregiver = document.getElementById('select-caregiver').value;
	console.log(caregiver);
}

function send_statement_pickedUp(){
   var pickedUp={
 "actor": {
         "mbox": "mailto:"+email,  
	        "name": guardian,  
	        "objectType": "Agent" 
    },
    "verb": {
        "id": "http://id.tincanapi.com/ECE_VERBS/picked-up",
        "display": {"en-US": "picked-up"}
    },
    "object": {
        "id": "http://ecexapi/activities/picked-up/child",
        "definition": {
            "name": {"en-US": child},
            "description": {"en-US": guardian +" picked up "+child +" from "+caregiver}, 
        },
        "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(pickedUp); 
}



