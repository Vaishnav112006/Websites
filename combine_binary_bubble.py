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


def binary_search(arr, target):
    n = len(arr)
    
    start = 0
    end = n-1
    while start <= end:
        mid = (start+end) // 2
        if arr[mid] == target:
            return mid
        elif target < arr[mid]:
            end = mid - 1
        else:
            start = mid + 1
    return -1

numbers = list(map(int, input("Enter number separated by spaces:").split()))
target = int(input("Enter the target number:"))

bubble_sort(numbers)
print("Sorted list:", numbers)

# Search for the target
result = binary_search(numbers, target)
if result != -1:
    print(f"Target {target} found at index {result}")
else:
    print(f"Target {target} not found")
