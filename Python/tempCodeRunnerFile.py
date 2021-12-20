n = int(input())
Max = 0
arr  = input().split()

for i in range(len(arr)):
    
    arr[i] = int(arr[i])
    
    if(int(arr[i])>Max):
        Max = arr[i]
    
for i in range(n):
    if Max in arr:
        arr.remove(Max)


Max = 0
for i in range(len(arr)):
    
    arr[i] = int(arr[i])
    
    if(int(arr[i])>Max):
        Max = arr[i]

print(Max)