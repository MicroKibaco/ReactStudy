var toArray = function(v) {
	return Array.prototype.slice.call(v);
};

var isArray = Array.isArray;

function isUndefined(v) {
	return typeof v == 'undefined';
}

function isDefined(v) {
	return !isUndefined(v);
}

function inherits(ctor, ctorSrc, attrs) {
	ctor.prototype = Object.create(ctorSrc.prototype);

	if(isObject(attrs)) {
		extend(ctor.prototype, attrs);
	}
}

function forEach (array, iterator, context) {
	var length;

	if(isArray(array)) {
		for(i = 0, length = array.length; i < length; i++) {
			iterator.call(context, array[i], i, array);
		}
	} else if (isObject(array)) {
		var keys = Object.keys(array);
		var ii = keys.length, i, key, value;

		for(i = 0; i < ii; i++) {
			key = keys[i];
			value = array[key];

			iterator.call(context, value, key, array);
		}
	}
	return array;
}

function extend (target) {
	if(!target) target = {};

	var sources = toArray(arguments).slice(1).filter(isDefined);

	var source,
			value,
			keys,
			key,
			ii = sources.length,
			jj,
			i,
			j;

	for(i = 0; i < ii; i++) {
		if((source = sources[i]) && isObject(source)) {
			keys = Object.keys(source);
			jj = keys.length;

			for(j = 0; j < jj; j++) {
				key 					= keys[j];
				value 				= source[key];

				target[key] 	= value;
			}
		}
	}

	return target;
}

function isObject (value) {
	return value !== null && (typeof value === 'object');
}

function noop () {
	return undefined;
}

function constant (value) {
	return function() {
		return value;
	};
}