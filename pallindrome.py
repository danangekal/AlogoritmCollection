def palindrome(word):
   for i in range(len(word)//2):
         if word[i] != word[-1-i]:
                 return False
   return True

print(palindrome('madam'))