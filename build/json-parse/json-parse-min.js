YUI.add("json-parse",function(Y){Y.json=Y.json||{};var _ESCAPES=/\\["\\\/bfnrtu]/g,_VALUES=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_BRACKETS=/(?:^|:|,)(?:\s*\[)+/g,_INVALID=/^[\],:{}\s]*$/,_revive=function(data,reviver){var walk=function(o,key){var k,v,value=o[key];if(value&&typeof value==="object"){for(k in value){if(Y.object.owns(value,k)){v=walk(value,k);if(v===undefined){delete value[k];}else{value[k]=v;}}}}return reviver.call(o,key,value);};return typeof reviver==="function"?walk({"":data},""):data;};Y.json.parse=function(s,reviver){if(typeof s==="string"&&_INVALID.test(s.replace(_ESCAPES,"@").replace(_VALUES,"]").replace(_BRACKETS,""))){return this._revive(eval("("+s+")"),reviver);}throw new SyntaxError("parseJSON");};},"3.0.0");
