numbers = [1, 2, 3, 4, 5]

reverse_numbers = []

for i in range(len(numbers)-1, -1, -1):
    reverse_numbers.append(numbers[i])

print("Reverse list is ", reverse_numbers)