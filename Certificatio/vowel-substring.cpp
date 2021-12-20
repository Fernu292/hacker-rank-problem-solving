#include<iostream>
#include<sstream>
#include<string>

using namespace std;


string findSubString(string s, int n){

    string resp;
    int counter = 0;

    for(int i=0;i<n;i++){
        resp+=s[i];
    }

    for(int i=0;i<resp.length();i++){
        switch(resp[i]){
            case 'a': counter++;
            case 'e': counter++;
            case 'i': counter++;
            case 'o': counter++;
            case 'u': counter++;break;
        }
    }

    int res = s.length()-n;

    if(res>n){
        res
    }

    return resp;

};


int main(){
    string s; 
    int n;

    getline(cin, s); cin>>n;

    string result = findSubString(s, n);

    cout<<result;

    return 0;
}