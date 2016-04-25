

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function(pattern, str) {
    var pattern_match = {};
    var pattern_value = {};
    var pattern_array = pattern.split('');
    var str_array = str.split(' ');
    var result = true;
    if (pattern_array.length != str_array.length){
        return false
    }
    // how to use loop over multiple arrays
    pattern_array.map(function (e, i) {
        if (pattern_array[i] in pattern_match)
        {
            if (pattern_match[pattern_array[i]] === str_array[i]) {
                pattern_match[pattern_array[i]] = str_array[i];
            }
            else {
                result = false
            }
        }
        else{
            if ((str_array[i] in pattern_value) && !(pattern_array[i] in pattern_match)){
                result = false
            }
            else {
                pattern_match[pattern[i]] = str_array[i];
                pattern_value[str_array[i]] = ''
            }
        }
    });
    return result
};

console.log(wordPattern("addaaaaa", "dog dogg dogg dog dog dog dog dog"));


