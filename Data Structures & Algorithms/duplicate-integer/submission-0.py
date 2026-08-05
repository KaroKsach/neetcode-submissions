class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
         check_dict = {}
         for num in nums:
            if num in check_dict:
                return True
            else:
                check_dict[num] = num
         return False