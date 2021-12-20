#include<iostream>
#include<vector>


using namespace std;

int main(){

    int n; cin>>n;
    int matriz[n][n];

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>matriz[i][j];
        }
    }   

    int diagonalD = 0, diagonalI = 0;

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i == j){
                diagonalD+=matriz[i][j];
            }
        }
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i+j==n-1){
                diagonalI+=matriz[i][j];
            }
        }
    }
    

    int total = diagonalD-diagonalI;

    if(total<0){
        total*=-1;
    }

    cout<<total;


    return 0;
}