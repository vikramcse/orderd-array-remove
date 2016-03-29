# orderd-array-remove
Removed an element from array by keeping order of elements inside array

## Install

```sh
$ npm install --save orderd-array-remove
```

## Example

```js
var remove = require('orderd-array-remove');

console.log(remove([1, 2, 3, 4, 5], 5));
// -> [1, 2, 4, 5]
```

### Explination

In case the element not found in the list then the function returns an empty array

```js
var remove = require('orderd-array-remove');

console.log(remove([1, 2, 3, 4, 5], 10));
// -> []
```

The order need to be maintained so the particular element is searched by indexOf and removed the element by splice


### `require('orderd-array-remove')(array, element)`

**Arguments**:
- `array`: list
- `element`: the element that need to be removed

**Returns**: Returns the original array after removal of the element

## License

&copy; 2016 Vikram Jadhav. MIT License
