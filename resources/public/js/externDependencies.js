// ## Dependency Management with yepnope.js
// http://yepnopejs.com

yepnope([{
	// ### jQuery & Underscore / LoDash.
	// Test if there's a network connection. If there is, download from CDN.
	// If check is not possible (e.g. no navigator property), assume connected & attempt to download from CDNs.
	test: window.navigator && navigator.onLine || !window.navigator,
	yep: ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js', "//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.underscore.min.js"],
	// `complete` runs after `yep` & `nope` have loaded (or the errorTimeout expired).
	complete: function(){
	 	// Recursive yepnope ftw!
	 	yepnope([
	 		// Directly tests window properties to see if CDN load was successful.
	 		// Loads from environment domain if failed. Useful when developing locally without network connection.
	 		{test: window.jQuery, nope: '/js/vendor/jquery-1.8.3.js'},
	 		{test: window._, nope: '/js/vendor/lodash-1.0.0-rc3.js'}
	 	]);
	}},{
	// ### Backbone. Depends on jQuery & Underscore.
	// Similar testing as with jQuery & Underscore.
	test: window.navigator && navigator.onLine || !window.navigator,
	yep: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js',
	complete: function(){
		yepnope({test: window.Backbone, nope: '/js/vendor/backbone-0.9.10.js'});
	}},{
	// ### Compiled ClojureScript. Includes jayq, which depends on jQuery.
	// Last in the yepnope array, /js/cljs.js contains application code.
	// Because it's last, it will only execute after all other loads have finished, ensuring dependencies have loaded.
	load: '/js/cljs.simple.js',
	complete: function(){
		// Print script loading completion message.
		window.console && _.isFunction(console.log) && console.log("All scripts loaded.");
	}
}]);