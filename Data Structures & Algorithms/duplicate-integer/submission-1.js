class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let myDict = {};
        for (const num of nums){
            let temp = num;
            if(myDict[temp] === 'val'){
                return true;
            }
            myDict[temp]= 'val';
        }
        return false
    }
}
