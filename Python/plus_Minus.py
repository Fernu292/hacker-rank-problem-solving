def plusMinus (arr):
    n = len(arr)
    
    x = 0
    y = 0
    z = 0
    
    for i in range(n):
        
        if(arr[i]>0):
            x+=1
        elif(arr[i]<0):
            y+=1
        elif(arr[i]==0):
            z+=1
    
    
    print( round(x/n, 7))
    print( round(y/n, 7) )
    print( round(z/n, 7) )
    
        
       
            
        

n = int(input())
arr = list( map(int, input().split() ) )#Forma de llenar array con int con list comprenhension

plusMinus(arr) 

