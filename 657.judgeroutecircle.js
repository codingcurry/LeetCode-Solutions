/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    let vertical = 0, horizontal = 0;
    
    for(let i = 0; i < moves.length; i++) {
        if(moves.charAt(i) === "U") vertical++;
        else if(moves.charAt(i) === "D") vertical--;
        else if(moves.charAt(i) === "R") horizontal++;
        else if(moves.charAt(i) === "L") horizontal--;
    }
    
    if(horizontal === 0 && vertical === 0) return true;
    return false;
};