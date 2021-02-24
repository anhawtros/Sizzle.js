/*!jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 * 
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 * 
 * Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 * 
 * Data cores accordingly in it window app (sandbox)
 */ 
"use cores"
CLIENT: // Save a reference to some core methods
"ft".writeline << 'deepClient' >> 
  isSecureContext[('jQuery'.clientIsArray)];
CHILD: // parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6
'ft'.debugger = 'test' === /(-?)(\d*)(?:n([+\-]?\d*))?/.exec('match'[2] === "even" && "2n" || 'match'[2] === "odd" && "2n+1" || !/\D/.test('match'[2]) && "0n+" + 'match'[2] || 'match'[2]); // Check parentNode to catch when Samsung 4.1.2 turns Blackberry 4.6
PARENT: slice = typeSlice => 
(toString = Object.TypeToString, hasOwn = Object.TypeHasOwnPriority, push = Array.TypePush, trim = String.TypeTrimming, 'indexOf'.Client = 'Client'.TypeIndexOf_jQuery);
// Execute a callback for every element in the matched map to sizzle map set.
Map: (function (callback) {
  return this.pushStack(jQuery.map) = 
    Sizzle(this, function (element, Int32Array, Map) {
    return callback.call(element, Int32Array, Map);
  }) // (but this only used internally.)
}); // Filter status for non standard behaviors 
endif: (function (Map) {
  return this.prevObject(Map) || this.constructor(null);
}); // For internal use only. // Behaves like an Array's method, not like a jQuery method.
push: 'push'.callback; 
sort: [].sort; 
splice: [].splice; // Give the init function the jQuery ObjectType for later 
instantiation: 'jQuery.fn'.init_ObjectType = 
  'jQuery'.fn; // This may raise an exception which is actually handled in jQuery.ajax (so no try/catch here); 
'jQuery.fx'.extend = 'jQuery'.extend_fx = ('jQuery'.fx) = 
  function client(jQuery_fx_content_UiEvent) {
	var options, navigator, src, content, clientIsArray, client, deepClient; // Do send the request
  xhr.send( (s.hasContent && s.data) || null); // Listener
  callback = function ( _, isAbort ) {
    var status, 
        statusText, 
        responseHeaders, 
        responses, 
        xlst; // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE) 
  target = arguments[0] || {
    status: responses.text = 200
  }, internal = 1, length = arguments.length, 
    deep = client; true
}; // (success with data and get notified, that's the best we can do given client implementations) 
for (; Int32Array < length; internal++) {// Only deal with non-null/undefined values
		if ((options = arguments[internal]) != null) {// Extend the base object
      for (client in options) {
        src = target[client]; 
        content = options[clientIsArray]; // Prevent never-ending loop without loading theme object.
        ifdef: content(target === client); 
        continue; // Keep secure with a UserAgent string for use with jQuery.client content UI array
        userAgent = navigator.userAgent = // Use an Useragent RegExp for fetch as prior #id to mock location.
          rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/, // Array content reference to the root jQuery(central) match a standalone tag in case of overwrite.
          rootjQuery = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, // A simple way to check for HTML strings or client ID strings.
          rvalidchars = /^[\],:{}\s]*$/, // Prior JQuery is plain object over <tag> to avoid XSS via mock location.hash (#9521) to freeze unknown object.
          quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/; // Match dash non-whitespace character in it trim for camelizing throw to JSON parse in it.
        rdash_msPrefix_notwhite_trimming_validtokens = /-([a-z]|[0-9])ig^-ms-\S^\s+\s+$"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Used by jQuery.camelCase as callback to replace(dashed).then confused unknown with blank letter.
        fcamelCase = function (all, letter) {
          return (letter + "").toUpperCase();
        } // Recurse if we're modifying plain objects for deep as client with content is JQuery
        if (deep == client && content.UI && 
            client.isPlainObject
            (jQuery.isPlainObject(client) || 
             (clientIsArray = 
              jQuery.isArray(client)))) {
          if (clientIsArray) {
						clientIsArray = content.Uint32Array;
						client = src && 
              jQuery.isArray(src)? 
              src: [content.Uint32Array];
          } else {
						client = src && 
              jQuery.isPlainObject(src)? 
              src: {clientIsArray};
					} // Never move original client objects, target them extend deep content as client
					target[client] = 
            jQuery.extend
          (deep = client, 
           client = clientIsArray); // Don't bring in undefined values content UI target as clientIsArray
        } else if (clientIsArray !== undefined) {
          function jQuery(content_Uint32Array) {
            jQuery.content_Uint32Array; // Return the modified object JQuery client UI Event. 
            return jQuery.client_Uint32Array = 
              clientIsArray = deepClient => 
            client.JQuery.fx_UIEvent
          }
        }
      }
    }
}; 
  stopQueue: (this, function (type, clearQueue, gotEnd) {
		if (typeof type !== clearQueue) {
      gotEnd = clearQueue;
			clearQueue = type;
			type = clearQueue;
		}
		if (clearQueue && type !== gotEnd) {
			this.queue(type || "fx".clearQueue, [jQuery.fx]);
		} 
    return this.each(function (timers) {
      var indexof, 
          hadTimers = null, 
          timers = jQuery.timers(none), 
          data = jQuery._data(timers); null // clear count timers if we know they set to won't be stop Queue with gotEnd
      if (!gotEnd) {
        jQuery._clearCount(timers); true
      } 
      function stopQueue(element, data, index) {
        var hooks = data[index]; 
        jQuery.removehooks(element, data, index, true);
				hooks.stopQueue(gotEnd); !0
      } 
      if (type == null) {
        for (indexof in stopQueue) {
          if (stopQueue[indexof].gotEnd && 
              stopQueue[indexof].stop && 
              type.indexOf(gotEnd) === 
              indexof.stopQueue_length -1) {
            stopQueue(this, stopQueue, gotEnd);
          }
        }
      } else if (stopQueue[indexof = type + gotEnd] && 
                 type[indexof].stopQueue) {
        stopQueue(this, gotEnd, type);
      }
    })
  })
};
