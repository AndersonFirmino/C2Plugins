﻿function GetPluginSettings()
{
	return {
		"name":			"Firebase",
		"id":			"Rex_Firebase",
		"version":		"1.3.1",   		
		"description":	"Real time database-as-a-service. https://www.firebase.com/",
		"author":		"Rex.Rainbow",
		"help url":		"https://dl.dropbox.com/u/5779181/C2Repo/rex_firebase.html",
		"category":		"Rex - Web - Firebase - core",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		0,
		"dependency":	"firebase.js"
	};
};

//////////////////////////////////////////////////////////////
// Conditions	
AddStringParam("Callback function", "Callback function.", '"_"');
AddCondition(1, cf_trigger, "On transaction", "Transaction", 
            "On transaction <b>{0}</b>", 
            'Triggered by calling "action: Transaction", to get return value.', "OnTransaction");
            
AddStringParam("Callback function", "Callback function.", '"_"');
AddCondition(2, cf_trigger, "On received", "Receive", 
            "On received <b>{0}</b>", 
            "Triggered when registered received event received.", "OnReading");

AddStringParam("Callback function", "Callback function.", '"_"');
AddCondition(3, cf_trigger, "On complete", "Send", 
            "On complete <b>{0}</b>", 
            "Triggered after any sending action success.", "OnComplete"); 
                  
AddStringParam("Callback function", "Callback function.", '"_"');
AddCondition(4, cf_trigger, "On error", "Send", 
            "On error <b>{0}</b>", 
            "Triggered after any sending action error.", "OnError");             
            
AddCondition(5, 0, "LastData is null", "Receive", 
             "LastData is null", 
             "Return true if LastData is null.", "LastDataIsNull");
  
AddCondition(6, 0, "TransactionIn is null", "Transaction", 
             "TransactionIn is null", 
             "Return true if TransactionIn is null.", "TransactionInIsNull");  
//////////////////////////////////////////////////////////////
// Actions     
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddAnyTypeParam("Value", "The value to set", 0);
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(1, 0, "Set value", "Send - Set", 
          "Set <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>", 
          "Sets value at data ref.", "SetValue");
 
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddStringParam("JSON value", "JSON value to set", '"{}"');
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(2, 0, "Set JSON", "Send - Set", 
          "Set JSON <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>", 
          "Sets JSON value at data ref.", "SetJSON");
       
AddStringParam("DataRef", "The Firebase data ref URL", "\"/myref\"");
AddStringParam("JSON value", "JSON value to set", '"{}"');
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(3, 0, "Update JSON", "Send - Update", 
          "Update JSON <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>",  
          "Updates JSON values at the data ref.", "UpdateJSON");

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddAnyTypeParam("Value", "The value to set", 0);
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(4, 0, "Push value", "Send - Push", 
          "Push <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>",   
          "Push value at data ref.", "PushValue");
 
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddStringParam("JSON value", "JSON value to set", '"{}"');
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(5, 0, "Push JSON", "Send - Push", 
          "Push JSON <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>",    
          "Push JSON value at data ref.", "PushJSON");

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddStringParam("On transaction", "On transaction function.", '"_"');
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(6, 0, "Transaction", "Send - Transaction", 
          "Transaction with callback: <i>{1}</i> at <i>{0}</i>, on complete callback to <i>{2}</i>",
          "Transaction value with callback.", "Transaction");

AddAnyTypeParam("Value", "The value to set", 0);
AddAction(7, 0, "Set value", "Send - Transaction", 
          "Set transaction value to <i>{0}</i>", 
          "Returns transaction value.", "ReturnTransactionValue");
           
AddStringParam("JSON value", "JSON value to set", '"{}"');
AddAction(8, 0, "Set JSON", "Send - Transaction", 
          "Set transaction JSON to <i>{0}</i>", 
          "Returns transaction JSON.", "ReturnTransactionJSON"); 

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddStringParam("On complete", 'On complete callback, ignored if enter an empty string "".', '""');
AddAction(9, 0, "Remove", "Send - Remove", 
          "Remove all values at <i>{0}</i>, on complete callback to <i>{1}</i>",     
          "Remove all values at data ref.", "Remove");          
          
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddStringParam("Callback function", "Callback function.", '"_"');
AddAction(21, 0, "Add callback", "Receive - Add", 
          "Add received callback: <i>{2}</i> for ref <i>{0}</i> (<i>{1}</i>)", 
          "Add received callback.", "AddReadingCallback");
          
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddStringParam("Callback function", "Callback function.", '"_"');
AddAction(22, 0, "Remove callback", "Receive - Remove", 
          "Remove received callback: <i>{2}</i> for ref <i>{0}</i> (<i>{1}</i>)", 
          "Remove received callback.", "RemoveReadingCallback");  
          
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddAction(23, 0, "Remove callback by type", "Receive - Remove", 
          "Remove all received callbacks for ref <i>{0}</i> (<i>{1}</i>)", 
          "Remove all received callbacks by type.", "RemoveReadingCallback");
               
AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddAction(24, 0, "Remove all callbacks at ref", "Receive - Remove", 
          "Remove all received callbacks for ref <i>{0}</i>", 
          "Remove all received callbacks at ref.", "RemoveReadingCallback"); 

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddStringParam("Callback function", "Callback function.", '"_"');
AddAction(25, 0, "Add once", "Receive - Add once", 
          "Add received callback: <i>{2}</i> once for ref <i>{0}</i> (<i>{1}</i>)", 
          "Add received callback once.", "AddReadingCallbackOnce");   

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddAction(31, 0, "Remove", "On disconnect", 
          "Remove all values at <i>{0}</i> when disconnected", 
          'Remove all values at data ref when disconnected. Uses under "condition: On received".', "RemoveRefOnDisconnect");

AddStringParam("DataRef", "The Firebase data ref URL", '""');
AddAnyTypeParam("Value", "The value to set", 0);
AddAction(32, 0, "Set value", "On disconnect", 
          "Set <i>{1}</i> at <i>{0}</i> when disconnected", 
          'Sets value at data ref when disconnected. Uses under "condition: On received".', "SetValueOnDisconnect");

AddStringParam("DataRef", "The Firebase data ref URL", "\"/myref\"");
AddStringParam("JSON value", "JSON value to set", '"{}"');
AddAction(33, 0, "Update JSON", "On disconnect", 
          "Update JSON <i>{1}</i> at <i>{0}</i> when disconnected", 
          'Updates JSON values at the data ref when disconnected. Uses under "condition: On received".', "UpdateJSONOnDisconnect");    

// get query from Firebase_Query plugin
AddObjectParam("Query", "Query object.");
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddStringParam("Callback function", "Callback function.", '"_"');
AddAction(51, 0, "Add callback", "Query", 
          "Add received callback: <i>{2}</i> for query <i>{0}</i> (<i>{1}</i>)", 
          "Add received callback.", "AddQueryCallback");
          
AddObjectParam("Query", "Query object.");
AddComboParamOption("Value changed");
AddComboParamOption("Child added");
AddComboParamOption("Child changed");
AddComboParamOption("Child removed");
AddComboParamOption("Child moved");
AddComboParam("Type ", "Event type");
AddStringParam("Callback function", "Callback function.", '"_"');
AddAction(52, 0, "Add callback once", "Query", 
          "Add received callback: <i>{2}</i> once for query <i>{0}</i> (<i>{1}</i>)", 
          "Add received callback once.", "AddQueryCallbackOnce");          
//////////////////////////////////////////////////////////////
// Expressions
AddExpression(1, ef_return_any | ef_variadic_parameters, "Transaction input", "Send - Transaction", "TransactionIn", 
              'Transaction input parameter, using under "condition:On transaction", JSON will be stringified. Add default value at 1st parameter if read data is null.');
AddExpression(2, ef_return_any | ef_variadic_parameters, "Receive data", "Receive", "LastData", 
              'Received data, using under "condition:On received". JSON will be stringified. Add default value at 1st parameter if read data is null.');
AddExpression(3, ef_return_any | ef_variadic_parameters, "Receive data", "Receive", "LastKey", 
              'Key of received data, using under "condition:On received"');	  
AddExpression(4, ef_return_any | ef_variadic_parameters, "Previous child name", "Receive", "PrevChildName", 
              'Previous child name, using under "condition:On received" with one of "Child added", "Child changed", "Child moved" type. Add default value at 1st parameter if read data is null.');
AddExpression(11, ef_return_string, "Last push ref", "Push", "LastPushRef", 
              "Data reference at last push.");
AddExpression(12, ef_return_number, "Timestamp", "Server value", "TIMESTAMP", 
              "A placeholder value for auto-populating the current timestamp (time since the Unix epoch, in milliseconds) by the Firebase servers."); 
              
ACESDone();

// Property grid properties for this plugin
var property_list = [
    new cr.Property(ept_text, "Domain", "", "The root location of the Firebase data."),
    new cr.Property(ept_combo, "Log", "No", "Enable log.", "No|Yes"),
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{
}
