/*
 * Externs for functions not provided by Google's versions
 * 
 */

/* Lo-Dash v1.0.0-rc3
 * http://lodash.com
 * //cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.underscore.min.js
 * Underscore 1.4.3 Compatability Build
 * `lodash underscore -m -o ./lodash.underscore.min.js`
 * http://underscorejs.org/#changelog
 */

/* Underscore 1.3.3
 * pick
 * result
 * isFinite
 * sortBy update
 * debounce update
 */

/**
 * @param {Object} obj
 * @param {...string} keys
 * @return {Object}
 */
_.pick = function(obj, keys) {};

/**
 * @param {Object} obj
 * @param {string} prop
 */
_.result = function(obj, property) {};

/**
 * @param {*} obj
 * @return {boolean}
 */
_.isFinite = function(obj) {};

/**
 * @param {Object|Array} obj
 * @param {string|Function} iterator
 * @param {Object=} opt_context
 * @return {!Array}
 */
_.sortBy = function(obj, iterator, opt_context) {};

/**
 * @param {Function} func
 * @param {number} wait
 * @param {*} immediate
 * @return {!Function}
 */
_.debounce = function(func, wait, immediate) {};

/* Underscore 1.4.0
 * pairs
 * countBy
 * invert
 * where
 * omit
 * random
 * lastIndexOf update
 */

/**
 * @param {Object} obj
 * @return {!Array}
 */
_.pairs = function(obj) {};

/**
 * @param {Object|Array} obj
 * @param {string|Function} iterator
 * @param {Object=} opt_context
 * @return {!*}
 */
_.countBy = function(obj, value, opt_context) {};

/**
 * @param {Object} obj
 * @return {Object}
 */
_.invert = function(obj) {};

/**
 * @param {Object|Array} obj
 * @param {Object} attrs
 * @param {*} first
 * @return {!*}
 */
_.where = function(obj, attrs, first) {};
/**
 * @param {Object} obj
 * @param {...string} keys
 * @return {Object}
 */
_.omit = function(obj, keys) {};

/**
 * @param {number} min
 * @param {number=} max
 * @return {!number}
 */
_.random = function(min, max) {};

/**
 * @param {Array} array
 * @param {*} item
 * @param {*=} from
 * @return {!number}
 */
_.lastIndexOf = function(array, item, from) {};

/* Underscore 1.4.3
 * uniq update
 */

 /**
 * @param {Array} array
 * @param {*=} opt_isSorted
 * @param {Function} opt_iterator
 * @param {Object} context
 * @return {!Array}
 */
_.uniq = function(array, opt_isSorted, opt_iterator, context) {};

/**
 * @param {Array} array
 * @param {*=} opt_isSorted
 * @param {Function} opt_iterator
 * @return {!Array}
 */
_.unique = function(array, opt_isSorted, opt_iterator) {};