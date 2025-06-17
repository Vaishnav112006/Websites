def linear_search(arr, target):
    n = len(arr)
    
    for i in range(n):
        value = arr[i]
        if value == target:
            return f"Target found at {i} index"
    
    return f"Target not found!!"

dataset = [5, 3, 7, 1, 8, 9]
target = 7
print(linear_search(dataset, target))