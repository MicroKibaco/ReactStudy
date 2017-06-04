# eventemitter

### Installation
```
bower install --save eventemitter
```

### Usage
```js
var em = new EventEmitter();

em.on('update', function(value) {
	if(value == em.lastValue) {
		return false;
	}

	em.value = value;
	em.lastValue = value;
});
```