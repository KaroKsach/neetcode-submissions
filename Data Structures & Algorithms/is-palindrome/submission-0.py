class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 1:
            return True
        new_s = "".join(filter(str.isalnum, s)).lower()
        for i in range(0, len(new_s)//2):
            print(f"new_s[i]: {new_s[i]}")
            print(f"new_s[-(i-1)]: {new_s[-(i+1)]}")
            if not(new_s[i] == new_s[-(i+1)]):
                return False
        return True
        
