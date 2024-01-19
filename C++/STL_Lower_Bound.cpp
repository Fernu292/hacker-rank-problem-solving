#include <vector>
#include <cmath>
#include <iostream>
#include <algorithm>

int main(int argc, char **argv){
    size_t vector_size(0);
    std::cin >> vector_size;
    
    // Declaring vector
    std::vector<int> vec1(vector_size);

    for(int i=0;i<vector_size;i++){
        std::cin>>vec1.at(i);
    }

    // Sorting the array 

    std::sort(vec1.begin(), vec1.end());
    /*
    for(auto i : vec1){
        std::cout << i << " ";
    }
    
    std::cout << std::endl;

    std::vector<int>::iterator low, up;

    low = std::lower_bound ( vec1.begin(), vec1.end(), 10);
    up = std::upper_bound ( vec1.begin(), vec1.end(), 10);

    std::cout << "Lower bound at " << (low - vec1.begin()) << std::endl;
    std::cout << "Upper bound at " << (up - vec1.begin()) << std::endl;

    std::cout << std::endl;
    */

    // Queries

    int queries = 0;
    std::cin >> queries;

    for(int i=0;i<queries;i++){
        int query = 0;
        std::cin >> query;
        
        if( std::find(vec1.begin(), vec1.end(), query)!=vec1.end() ){
            std::cout << "Yes " << (std::lower_bound(vec1.begin(), vec1.end(), query) - vec1.begin()) + 1 << std::endl;
        }else {
            std::cout << "No " << (std::upper_bound(vec1.begin(), vec1.end(), query) - vec1.begin() ) + 1 << std::endl;
        }
    }

    return 0;
}
