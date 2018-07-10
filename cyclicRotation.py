def cyclic_rotation(A, K):
    if len(A) == 0:
        return A
    
    K = K % len(A)
    return A[-K:] + A[:-K]

A = [3, 8, 9, 7, 6]
K = 3

print(cyclic_rotation(A, K))