numbers = [1, 2, 3, 4, 5, 6]

count = 0

for num in numbers:
    if num % 2 == 0:
        count = count + 1
    
print("Total number of even numbers are ", count)