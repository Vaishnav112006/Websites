def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break

numbers = [50, 20, 40, 10, 30]
bubble_sort(numbers)
print("Array after sorting using bubble sort:")
print(numbers)
            