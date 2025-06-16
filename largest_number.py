numbers = [10, 34, 1, 234, 243, 77, 83]

largest = numbers[0]

for num in numbers:
    if num > largest:
        largest = num

print("Largest number is ", largest)

numbers.sort()
print("Sorted list ", numbers)

numbers.reverse()
print("Reverse List ", numbers)

#Creating new list using some different technique
squares = [x**2 for x in range(1, 16)]
print("New List is ", squares)