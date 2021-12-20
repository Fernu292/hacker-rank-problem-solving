

#Probar multiples permutaciones con list comprenhension

i = int(input())
j = int(input())
k = int(input())
n = int(input())

res = [[a, b, c] for a in range(i+1)
                 for b in range(j+1)
                 for c in range(k+1) 
                 if sum([a,b,c]) !=n]
print(res)
