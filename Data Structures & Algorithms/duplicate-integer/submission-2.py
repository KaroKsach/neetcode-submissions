class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_dict = {}
        for i in range(0, len(nums)):
            if nums[i] in nums_dict:
                return True
            else:
                nums_dict[nums[i]] = 1
        return False