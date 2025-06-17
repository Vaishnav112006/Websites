def binary_search(arr, target):
    n = len(arr)
    
    start = 0
    end = n-1
    while start <= end:
        mid = (start+end) // 2
        if arr[mid] == target:
            return f"Target found at {mid} index."
        elif target < arr[mid]:
            end = mid - 1
        else:
            start = mid + 1
    return f"Target not found!!!"

sorted_dataset = [1, 3, 5, 7, 8, 9]
target = 7
print(binary_search(sorted_dataset, target))
        