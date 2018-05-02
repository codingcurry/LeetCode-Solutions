/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = 0;
    for(let x= 0; x<S.length; x++) {
        for(let y=0; y<J.length; y++) {
            if(S.charAt(x)===J.charAt(y))
                jewels++;
        }
    }
        return jewels;
};