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

function foodType(){
    food = document.getElementById("food").value;
    console.log(food);
}

function foodAmount(){
        foodAmount = document.getElementById("foodAmount").value;
    console.log(foodAmount);
}

function autonomously(){
    autonomously = document.getElementById("autonomously").value;
    console.log(autonomously);
}

function send_statement_ate(){
    ate = {
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
    "id": "http://ecexapi.com/menu/food",
    "definition": {
      "name": { "en-US": food},
     "description": {"en-US": "Child consumed " +foodAmount +" of " +food},
      "extensions": {
        "http://ecexapi.com/activity/autonomously": autonomously
      }
      },
"objectType": "Activity"
    }
  };
    ADL.XAPIWrapper.sendStatement(ate); 
}

   
