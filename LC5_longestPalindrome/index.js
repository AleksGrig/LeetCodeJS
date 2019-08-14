//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) { // O(n^3)
    let size = s.length;
    while(size > 1) {
        for(let i = 0; i + size - 1 < s.length; i++) {
            if(_isPalindrome(s, i, i + size - 1)) {
                return s.slice(i, i + size);
            }
        }
        size--;
    }
    return s.charAt(0);
}

function _isPalindrome(str, firstIndex, lastIndex) {
    if(str[firstIndex] === str[lastIndex]) {
        if(lastIndex - firstIndex < 2) {
            return true;
        } else {
            return _isPalindrome(str, firstIndex + 1, lastIndex - 1);
        }
    } else {
        return false;
    }   
}

function longestPalindrome2(s) { // O(n^2)
    let startIndex = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalLength = right - left + 1;
            if(currentPalLength > maxLength) {
                maxLength = currentPalLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }
    return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;
