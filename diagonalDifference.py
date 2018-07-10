def diagonal_difference(N):
	N = int(N)
	difference = 0
	for i in range(N):
	    row = N.split()
	    difference += (int(row[i]) - int(row[N-1-i]))
	return abs(difference)

N = [[ 11, 2, 4],
    [ 4, 5, 6],
    [ 10, 8, -12]]

print(diagonal_difference(N))