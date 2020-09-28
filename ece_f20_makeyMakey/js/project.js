// Variables
var name = "makeyMakeyTester";
var email = "mmtester@ecexapi.com"

// Up Arrow Function

function selectUpArrow(){
	var upArrowStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://id.tincanapi.com/verb/selected",  
	        "display": {"en-US": "selected"}  
	    },  
	    "object": {  
	        "id": "http://ecexapi.com/makeymakey/upArrow",  
	        "definition": {  
	            "name": {"en-US": "Up Arrow"},  
	            "description": {"en-US": "Activity associated with the up arrow."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(upArrowStatement); 

	// Check the developer tool console to see if it is working
	console.log('You have selected the up-arrow key!')
}

// Right Arrow function
function selectRightArrow(){
	var rightArrowStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://id.tincanapi.com/verb/selected",  
	        "display": {"en-US": "selected"}  
	    },  
	    "object": {  
	        "id": "http://ecexapi.com/makeymakey/rightArrow",  
	        "definition": {  
	            "name": {"en-US": "Right Arrow"},  
	            "description": {"en-US": "Activity associated with the right arrow."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(rightArrowStatement); 

	// Check the developer tool console to see if it is working
	console.log('You have selected the right-arrow key!')

}

// Down Arrow function
function selectDownArrow(){
	var downArrowStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://id.tincanapi.com/verb/selected",  
	        "display": {"en-US": "selected"}  
	    },  
	    "object": {  
	        "id": "http://ecexapi.com/makeymakey/downArrow",  
	        "definition": {  
	            "name": {"en-US": "Down Arrow"},  
	            "description": {"en-US": "Activity associated with the down arrow."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(downArrowStatement); 

	// Check the developer tool console to see if it is working
	console.log('You have selected the down-arrow key!')

}

// Left Arrow function
function selectLeftArrow(){
	var leftArrowStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://id.tincanapi.com/verb/selected",  
	        "display": {"en-US": "selected"}  
	    },  
	    "object": {  
	        "id": "http://ecexapi.com/makeymakey/leftArrow",  
	        "definition": {  
	            "name": {"en-US": "Left Arrow"},  
	            "description": {"en-US": "Activity associated with the left arrow."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(leftArrowStatement); 

	// Check the developer tool console to see if it is working
	console.log('You have selected the left-arrow key!')

}

// Spacebar function
function selectSpacebar(){
	var spacebarStatement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://id.tincanapi.com/verb/selected",  
	        "display": {"en-US": "selected"}  
	    },  
	    "object": {  
	        "id": "http://ecexapi.com/makeymakey/spacebar",  
	        "definition": {  
	            "name": {"en-US": "Spacebar"},  
	            "description": {"en-US": "Activity associated with the spacebar."}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(spacebarStatement); 

	// Check the developer tool console to see if it is working
	console.log('You have selected the spacebar!')

}
