yepnope.errorTimeout = 1000;
Modernizr.load([{
	test: window.navigator && navigator.onLine,
	yep: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', "//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.underscore.min.js"],
	complete: function(){
	 	Modernizr.load([
	 		{test: window.jQuery, nope: '/js/vendor/jquery-1.8.3.js'},
	 		{test: window._, nope: '/js/vendor/lodash-1.0.0-rc3.js'}
	 	]);
	}},{
	test: window.navigator && navigator.onLine,
	yep: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js',
	complete: function(){
		Modernizr.load({test: window.Backbone, nope: '/js/vendor/backbone-0.9.10.js'});
	}},{
	load: '/js/cljs.js',
	complete: function(){
		window.console && _.isFunction(console.log) && console.log("All scripts loaded.");
	}
}]);