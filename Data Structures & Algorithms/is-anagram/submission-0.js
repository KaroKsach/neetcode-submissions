class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sVals = {};
        let tVals = {};
        if (s.length !== t.length) return false;

        for (const char of s){
            if (sVals[char]){
                sVals[char] += 1;
            }else{
                sVals[char] = 1;
            }
        }
        for (const char of t){
            if (tVals[char]){
                tVals[char] += 1;
            }else{
                tVals[char] = 1;
            }
        }

        for(const item in sVals){
            if (!(tVals[item])){
                return false;
            }
            if (!(sVals[item] === tVals[item])){
                return false
            }
        }
        return true;
    }
}
