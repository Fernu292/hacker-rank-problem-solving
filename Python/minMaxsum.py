
arr = list( map(int, input().split()) )

def minMaxsum(arr):
    print(sum(arr)-max(arr), sum(arr)-min(arr))
            
        
        
        
minMaxsum(arr)