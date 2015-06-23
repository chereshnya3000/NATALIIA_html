function addEventListener(object, methodName, eventHandler){
	
	var event = object[methodName];
	if(event == null)
	{
	   event = function(){};
	}
	
	object[methodName] = function(){ event(); eventHandler() }; 
}