// Page Load Function change config
function pageLoaded(){
   var conf = {
                     "endpoint" : "https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/",
                     "auth" : "Basic " + toBase64("ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50")
                     };
                   ADL.XAPIWrapper.changeConfig(conf);   
}

var email= "tester@ecexapi.com"

function saveChildName(){
  	child = document.getElementById('select-child').value;
	console.log(child);  
}

function saveCaregiverName(){
    	caregiver = document.getElementById('select-caregiver').value;
	console.log(caregiver);
}

function autonomously_urinated(){
    autonomouslyUrinated = document.getElementById("autonomously_urinated").value;
    console.log(autonomouslyUrinated);
}

function send_statement_urinated(){
   var urinated={
 "actor": {
         "mbox": "mailto:"+email,  
	        "name": child,  
	        "objectType": "Agent" 
    },
     "verb": {
        "id": "http://id.tincanapi.com/ECE_VERBS/urinated",
        "display": {"en-US": "urinated"}
    },
    "object": {
        "id": "http://ecexapi/child/urinated",
        "definition": {
            "name": {"en-US": "urinated"},
            "description": {"en-US": "Child urinated."},
             "extensions": {
        "http://ecexapi.com/activity/autonomously": autonomouslyUrinated
      }
        },
        "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(urinated); 
}

function autonomously_defecated(){
    autonomouslyDefecated = document.getElementById("autonomously_defecated").value;
    console.log(autonomouslyDefecated);
}

function send_statement_defecated(){
var defecated={
 "actor": {
         "mbox": "mailto:"+email,  
	        "name": child,  
	        "objectType": "Agent" 
    },
    "verb": {
        "id": "http://id.tincanapi.com/recipe/ECE/defecated",
        "display": {"en-US": "defecated"}
    },
    "object": {
        "id": "http://ecexapi/child/defecated",
        "definition": {
            "name": {"en-US": "defecated"},
            "description": {"en-US": "Child defecated."},
             "extensions": {
        "http://ecexapi.com/activity/autonomously": autonomouslyDefecated
      }
        },
        "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(defecated); 
}



function saveComment(){
    comment=document.getElementById('comment').value;
	console.log(comment);
}

function send_statement_changedDiaper(){
var changedDiaper={
"actor": {
        "mbox": "mailto:"+email,  
	        "name": caregiver,  
	        "objectType": "Agent" 
    },
    "verb": {
        "id": "http://id.tincanapi.com/ECE_VERBS/changed-diapers",
        "display": {"en-US": "changed-diapers"}
    },
  "object": {
    "id": "http://ecexapi/caregiver/changed-diapers",
     "definition": {  
	            "name": {"en-US": child},  
	            "description": {"en-US": "Caregiver changed child's diaper. Comment: "+comment}  
	        },  
	        "objectType": "Activity"  
	    }  
    };
    ADL.XAPIWrapper.sendStatement(changedDiaper);
  
}