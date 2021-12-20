#include<iostream>
#include<string>
#include<sstream>


using namespace std;


string timePM(string s){
        stringstream ss;
        string time, result1;
        int h;
        s.pop_back();
        s.pop_back();
            
        for(int i=0;i<=1;i++){
            ss<<s[i];
        }            
        ss>>h;
        h+=12;
        time = to_string(h);
        result1 = s;

        result1.replace(0,2, time);

        return result1;
        
};

string timeAM(string s){
        stringstream ss;
        string time, result2;
        int h;
        s.pop_back();
        s.pop_back();
            
        for(int i=0;i<=1;i++){
            ss<<s[i];
        }            
        ss>>h;
        int g = h-12;

        time = to_string(g);
        result2 = s;

        result2.replace(0,2, time);
        return time;
};


void timeConvert(string s){
    
    bool find = s.find("AM");
    bool find1 = s.find("PM");

    if(find1){
        string res1;
        res1 = timePM(s);
        cout<<res1;

    }else if(find){
        string res2;
        res2 = timeAM(s);
        cout<<res2;
    }
};


int main(){

    string hour;
    getline(cin, hour);

    timeConvert(hour);

    return 0;

}