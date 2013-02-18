Modernizr.load([
	{test: window.jQuery, nope: '/js/vendor/jquery-1.8.3.js'},
	{test: window._, nope: '/js/vendor/lodash-1.0.0-rc3.js'},
	{test: window.Backbone, nope: '/js/vendor/backbone-0.9.10.js'},
	{load: '/js/cljs.js'}]);