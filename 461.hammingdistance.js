/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    //convert x and y to binary strings
    x = parseInt(x, 10).toString(2);
    y = parseInt(y, 10).toString(2);
    let diff = 0;
    
    //pad y with 0's if x is bigger
    if(x.length >y.length) {
        let sub = x.length - y.length;
        for(let i =0; i<sub;i++) {
            y = "0" + y;
        }
    }
    
    //pad x with 0's if y is bigger
    else if(y.length >x.length) {
        let sub = y.length - x.length;
        for(let i =0; i<sub;i++) {
            x = "0" + x;
        }
    }
    
    //compare each character in x and y
    for(let i =0; i<x.length; i++) {
        if(x.charAt(i)!==y.charAt(i)) {
            diff++;
        }
    }
    return diff;
};