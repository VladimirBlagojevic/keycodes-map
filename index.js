export const keys = {
	// Numbers and letters
	num0: 48,
	num1: 49,
	num2: 50,
	num3: 51,
	num4: 52,
	num5: 53,
	num6: 54,
	num7: 55,
	num8: 56,
	num9: 57,
	a: 65,
	b: 66,
	c: 67,
	d: 68,
	e: 69,
	f: 70,
	g: 71,
	h: 72,
	i: 73,
	j: 74,
	k: 75,
	l: 76,
	m: 77,
	n: 78,
	o: 79,
	p: 80,
	q: 81,
	r: 82,
	s: 83,
	t: 84,
	u: 85,
	v: 86,
	w: 87,
	x: 88,
	y: 89,
	z: 90,

	// Punctuations keys in US layout
	semicolon: 186,
	equal: 187,
	comma: 188,
	minus: 189,
	period: 190,
	backquote: 192,
	bracketLeft: 219,
	backslash: 220,
	bracketRight: 221,
	quote: 222,

	// Modifier keys
	shift: 16,
	ctrl: 17,
	alt: 18,
	capsLock: 20,

	// Control keys
	tab: 9,
	enter: 13,
	pause: 19,
	escape: 27,
	space: 32,
	pageUp: 33,
	pageDown: 34,
	end: 35,
	home: 36,
	arrowLeft: 37,
	arrowUp: 38,
	arowRight: 39,
	arrowDown: 40,
	printScreen: 44,
	insert: 45,
	delete: 46,
	contextMenu: 93,
	scrollLock: 145,

	// Function keys
	f1: 112,
	f2: 113,
	f3: 114,
	f4: 115,
	f5: 116,
	f6: 117,
	f7: 118,
	f8: 119,
	f9: 120,
	f10: 121,
	f11: 122,
	f12: 123,
	f13: 124,
	f14: 125,
	f15: 126,
	f16: 127,
	f17: 128,
	f18: 129,
	f19: 130,
	f20: 131,
	f21: 132,
	f22: 133,
	f23: 134,
	f24: 135,

	// Numpad keys
	numpad0: 96,
	numpad1: 97,
	numpad2: 98,
	numpad3: 99,
	numpad4: 100,
	numpad5: 101,
	numpad6: 102,
	numpad7: 103,
	numpad8: 104,
	numpad9: 105,
	numpadMultiply: 106,
	numpadAdd: 107,
	numpadSubtract: 109,
	numpadDecimal: 110,
	numpadDivide: 111,
	numLock: 144,
	numpadComma: 194,
	numpadEqual: 12
};

export function isLetter(key) {
	const { a, z } = keys;
	return key >= a && key <= z ? true : false;
}

export function isNumber(key) {
	const { num0, num9, numpad0, numpad9 } = keys;
	return (key >= num0 && key <= num9) || (key >= numpad0 && key <= numpad9) ? true : false;
}

export function isAlphanumeric(key) {
	return isNumber(key) || isLetter(key);
}
