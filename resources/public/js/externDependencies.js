yepnope.errorTimeout = 1000; // really low. CDNs should be fast; localhost will be fast. Default is `1e4` (10,000).
yepnope([{ // jQuery & Underscore / LoDash.
	test: window.navigator && navigator.onLine || !window.navigator, // Check for network. if check is not possible, assume connected & attempt to download from CDNs.
	yep: ['//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js', "//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.underscore.min.js"],
	complete: function(){
	 	yepnope([
	 		{test: window.jQuery, nope: '/js/vendor/jquery-1.8.3.js'},
	 		{test: window._, nope: '/js/vendor/lodash-1.0.0-rc3.js'}
	 	]);
	}},{ // Backbone. Depends on jQuery & Underscore.
	test: window.navigator && navigator.onLine || !window.navigator,
	yep: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js',
	complete: function(){
		yepnope({test: window.Backbone, nope: '/js/vendor/backbone-0.9.10.js'});
	}},{ // Compiled ClojureScript. Includes jayq, which depends on jQuery.
	load: '/js/cljs.js',
	complete: function(){
		window.console && _.isFunction(console.log) && console.log("All scripts loaded.");
	}
}]);