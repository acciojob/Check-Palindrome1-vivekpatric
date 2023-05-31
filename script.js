// complete the given function

function palindrome(str){
	let result = str.toLowerCase();

  var len = result.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (result[i] !== result[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
module.exports = palindrome
