a = [5, 6, 7];
b = [3, 6, 10];

a_score = b_score = 0

for i in range(len(a)):
	if a[i] > b[i]:
		a_score += 1
	elif a[i] < b[i]:
		b_score +=1
	else:
		pass

print(a_score, b_score)