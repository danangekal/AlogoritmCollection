def binary(N):
    return format(N, 'b').strip('0')

def binaryGap(N):
    return len(max(format(N, 'b').strip('0').split('1'))) 

print(binary(9))
print(binaryGap(9))

