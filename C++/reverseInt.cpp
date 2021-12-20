#include<iostream>
#include<sstream>

using namespace std;

int main(){
    

    string number;
    getline(cin,number);

    for(int i=number.length();i>3;i--){
        cout<<number[i];
    }

    return 0;
}