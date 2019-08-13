// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let map = {};
    let startIndex = 0;
    let maxLength = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] in map && map[s[i]] >= startIndex) { 
            startIndex = map[s[i]] + 1;
        }
        map[s[i]] = i;
        maxLength = (i + 1 - startIndex) > maxLength ? (i + 1 - startIndex) : maxLength;
    }
    return maxLength;
}

function lengthOfLongestSubstringM(s) {
    let maxSubstringLength = 0;
    let i = 0;
    while(i < s.length) {
        let substringLength = 0;
        let map = {};
        while(map[s[i]] === undefined && i < s.length) {
            map[s[i]] = i++;
            substringLength++;
        }
        if(substringLength > maxSubstringLength) {
            maxSubstringLength = substringLength;
        }
        if(map[s[i]] !== undefined) {
            i = map[s[i]] + 1;
        }
    }
    return maxSubstringLength;
}

console.log(lengthOfLongestSubstring('dvvdf'));

module.exports = lengthOfLongestSubstring;
