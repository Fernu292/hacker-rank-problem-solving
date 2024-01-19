#include <iostream>
#include <map>
#include <string>

int main(int argc, char **argv){

    std::map< std::string, int > students;

    int queries = 0;
    std::cin >> queries;

    std::string name("");
    int mark(0);

    for (int i=0;i<queries;i++){
        int option = 0;

        std::cin >> option;

        switch (option)
        {
        case 1:
            std::cin >> name >> mark;

            if(students.find(name) != students.end()){

                students[name] += mark;

            }else{
                students.insert({name, mark});
            }
            break;
        case 2:
            std::cin >> name;
            students[name] = 0;
            break;
        case 3:
            std::cin >> name;
            std::cout << students[name] << std::endl;
            break;
        default:
            std::cout << "Wrong code" << std::endl;
            break;
        }

        name = "";
        mark = 0;
        option = 0;
    }


    return 0;
}
