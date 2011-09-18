﻿function GetPluginSettings()
{
	return {
		"name":			"Tetris",
		"id":			"Tetris",
		"description":	"The logic of Tetris",
		"author":		"Rex.Rainbow",
		"help url":		"",
		"category":		"Logic of Game",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		0
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddNumberParam("X", "The X index (0-based) of the mask array.");
AddNumberParam("Y", "The Y index (0-based) of the mask array.");
AddCondition(0, 0, "Empty test", "Data", "{my} [<i>{0}</i>, <i>{1}</i>].mask == 0", "Test if (mask == 0) at [X,Y] position.", "EmptyTest");
//AddCondition(1, cf_looping | cf_not_invertible, "For each full line", "For Each", "For each full line", "Repeat the event for each full line in the mask array.", "FullLineForEach");

//////////////////////////////////////////////////////////////
// Actions
AddNumberParam("X", "The X index (0-based) of the mask array value to set.", "0");
AddNumberParam("Y", "The Y index (0-based) of the mask array value to set.", "0");
AddComboParamOption("0");
AddComboParamOption("1");
AddComboParam("Mask", "Set mask to.", 1);
AddNumberParam("UID", "The UID of the sprite.", "-1");
AddAction(0, 0, "Set data at XY", "Array", "Set data at [<i>{0}</i>, <i>{1}</i>]: mask = <i>{2}</i>, UID = <i>{3}</i>", "Set the data at [X,Y] position.", "SetData");

//////////////////////////////////////////////////////////////
// Expressions
AddExpression(0, ef_return_number, "Get mask array", "Debug", "DumpMaskArray", "The current data in mask array.");
AddExpression(1, ef_return_number | ef_variadic_parameters, "Get mask", "Data", "Mask", "The mask in array cell.");
AddExpression(2, ef_return_number | ef_variadic_parameters, "Get uid", "Data", "UID", "The uid in array cell.");
//AddExpression(3, ef_return_number, "Current full line index", "For Each", "CurFullLine", "Get the current full line index in a For Each loop.");

ACESDone();

// Property grid properties for this plugin
var property_list = [
        new cr.Property(ept_integer, "Col", 10, "Cell number of col."),
		new cr.Property(ept_integer, "Row", 20, "Cell number of row."),
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
	if (this.properties["Col"] < 1)
		this.properties["Col"] = 1;
		
	if (this.properties["Row"] < 1)
		this.properties["Row"] = 1;
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