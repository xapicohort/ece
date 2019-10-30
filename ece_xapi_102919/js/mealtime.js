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
  	child = document.getElementById('select-choice-child').value;
	console.log(child);  
}

function drinkType(){
    drink = document.getElementById("liquid").value;
    console.log(drink);
}

function drinkAmount(){
        liquidAmount = document.getElementById("amount").value;
    console.log(liquidAmount);
}

function autonomously(){
    autonomously = document.getElementById("autonomously").value;
    console.log(autonomously);
}

function send_statement_drank(){
    drank = {
  "actor": {
        "name": child,
        "mbox": "mailto:"+email,
       "objectType":"Agent"
  },
  "verb": {
    "id": "http://id.tincanapi.com/ECE_VERBS/consumed",
    "display": { "en-US": "consumed" }
  },
  "object": {
    "id": "http://ecexapi.com/menu/liquid",
    "definition": {
      "name": { "en-US": drink},
     "description": {"en-US": "Child consumed " +liquidAmount +" of " +drink},
      "extensions": {
        "http://ecexapi.com/activity/autonomously": autonomously
      }
      },
"objectType": "Activity"
    }
  };
    ADL.XAPIWrapper.sendStatement(drank); 
}

   
