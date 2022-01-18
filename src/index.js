module.exports = function reverse (n) {
    let str = '';
	let strReverse = '';
	if (typeof n !== 'number' ) {
		
		return;
	}
	else if (n >= 0) {
		str = String(n);
	    for (let i = str.length-1; i >= 0; i--) {
			strReverse += str[i];
		}
		let reverseNum = +strReverse;
		return reverseNum;
    }
	else if (n < 0) {
		str = String(n);
		for (let i = str.length-1; i >= 1; i--) {
			strReverse += str[i];
		} 
		let reverseNum = + strReverse;
		return reverseNum;
	}
}
