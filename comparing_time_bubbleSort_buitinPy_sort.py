import random
numbers = [random.randint(1, 1000) for _ in range(1000)]

import time

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

#Time the bubble sort
start_time = time.time()
bubble_sort(numbers.copy())
end_time = time.time()

print("Bubble Sort Time: ", end_time - start_time)

start_time = time.time()
numbers.sort()
end_time = time.time()

print("Python's Built in Sort Time: ", end_time - start_time)