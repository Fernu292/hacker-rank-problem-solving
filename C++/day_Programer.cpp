#include<iostream>
#include<sstream>
#include<string>

using namespace std;

string dayPro( int year ){
    
    stringstream ss;
    string resp;
    
    if( (year%4==0 || year%400==0) && year%100!=0){
        resp = "12.09.";

        ss<<resp<<year;

        ss>>resp;

        return resp;
    
    }
    else{
        resp = "13.09.";
        ss<<resp<<year;

        ss>>resp;

        return resp;
    }

    return "Hola";
};


int main(){

    int year; cin>>year;
    string resp = dayPro(year);

    cout<<resp;


    return 0;
}