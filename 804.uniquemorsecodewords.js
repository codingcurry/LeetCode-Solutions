/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    //for each word in words array
    for (let i=0; i <words.length; i++) {
        //for each character in word[i] within word array
        let message = "";
        for(let j=0; j<words[i].length; j++) {
            let index = words[i].charCodeAt(j)-97;//grabs ascii of character and subtracts 97 to get alphabet number placement
            message += morseCode[index];            
        }
        words[i]=message;
    }//words[] now contains words in morse code
    
    let uniqueWords =[];
    if(words.length!==0) {
        uniqueWords[0] = words[0];
    }
    for(let i=0; i<words.length; i++) {
        let hasUnique = true;
        for(let j=0; j<uniqueWords.length; j++) {
            //if word already exisits in uniqueWords
            if(words[i]===uniqueWords[j]) {
                hasUnique=false;
            }   
        }
        //if word not in uniqueWords push
        if(hasUnique){
                uniqueWords.push(words[i]);
            }
    }
    return uniqueWords.length;
};