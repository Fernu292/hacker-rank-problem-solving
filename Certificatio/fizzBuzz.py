n = int(input())

def fizzBuzz(n):
    
    for i in range(n+1):
        if(i==0):
            continue
        elif(i%3==0 and i%5!=0):
            print('Fizz')
        elif(i%5==0 and i%3!=0):
            print('Buzz')
        elif(i%3 == 0 and i%5==0):
            print('FizzBuzz')
        else:
            print(i)
        i+=1


fizzBuzz(n)