# keycodes-map

## Instalation
`npm install keycodes-map`

## Description



`keycodes-map` provide u map of all keyboard keyCode values in nicely structured and named way where u can access every key with ease, plus few useful functions to check is pressed keyboard event `alpahanumeric`, `number` or `letter`

## Usage

 Compare with pressed event keyCode :

```js
   import { keys } from 'keycodes-map';

	document.addEventListener('keyup', (event) => {
		if (event.keyCode === keys.enter) {
			console.log(`${event.code} is pressed`); // Enter is pressed
		}
	});
```
Check is pressed key alphanumeric :
```js
   import { isAlphanumeric } from 'keycodes-map';

	document.addEventListener('keyup', (event) => {
		if (isAlphanumeric(event.keyCode)) {
			console.log(`Alphanumeric key is pressed`);
		}
	});
```
Check is pressed key number :
```js
   import { isNumber } from 'keycodes-map';

   document.addEventListener('keyup', (event) => {
      if (isNumber(event.keyCode)) {
         console.log(`Number is pressed`);
      }
   });
```

Check is pressed key letter :
```js
   import { isLetter } from 'keycodes-map';

   document.addEventListener('keyup', (event) => {
      if (isLetter(event.keyCode)) {
         console.log(`Letter is pressed`);
      }
   });
```
