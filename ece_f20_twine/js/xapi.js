 function send_statement(verbId, verb, objectId, name, description){  
        var conf = {  
             "endpoint" : "https://ecexapi-f2020.lrs.io:443/xapi/",  
             "auth" : "Basic " + toBase64("owiroj:fusrof")  
             };  
  
        ADL.XAPIWrapper.changeConfig(conf);
		var actorId = "twineTester092720";// please change this to a different name
	    var mailId = "ecexapi@gmail.com";
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
                    "description": {"en-US": description}  
                },  
                "objectType": "Activity"  
            }  
        }; //end statement definition  
   
        // Dispatch the statement to the LRS  
        var result = ADL.XAPIWrapper.sendStatement(statement);  
        }  