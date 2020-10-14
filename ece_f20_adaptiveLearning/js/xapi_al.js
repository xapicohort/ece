 function send_statement(verbId, verb, objectId, name, description, type){  
        var conf = {  
             "endpoint" : "https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/",  
             "auth" : "Basic " + toBase64("ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50")  
             };  
  
        ADL.XAPIWrapper.changeConfig(conf);
		var actorId = "jrosequist";//change actor
	    var mailId = "tester@ecexapi.com";//change email
        //define the xapi statement being sent  
        var statement = {  
            "actor": {  
                "mbox": "mailto:" + mailId,
                "name": actorId,  
                "objectType": "Agent"  
            },  
            "verb": {  
                "id": verbId,  
                "display": {"en-US": verb }  
            },  
            "object": {  
                "id": objectId,  
                "definition": {  
                    "name": {"en-US": name},  
                    "description": {"en-US": description},
                    "type": type 
                },  
                "objectType": "Activity"
            }
        }; //end statement definition  
   
        // Dispatch the statement to the LRS  
        var result = ADL.XAPIWrapper.sendStatement(statement);  
        }  