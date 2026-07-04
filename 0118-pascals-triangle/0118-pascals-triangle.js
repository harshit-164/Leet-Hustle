/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i =0; i<=numRows-1; i++){
        let current = [1];
        let previous = result[i-1];
        if(previous){
            for(let j=1; j<previous.length; j++){
                current.push(previous[j-1] + previous[j]);
            }
            current.push(1);
        }
        result.push(current);
    }
    return result;
};