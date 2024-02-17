#include <iostream>
#include <algorithm>
using namespace std;

namespace Solution {
    string reverseString(const string& str) {
        // Your solution code here
        return str;
           }
}

int main() {
    // Input handling
    string input;
    cout << "Enter a string: ";
    cin >> input;

    // Output
    cout << "Reversed String: " << Solution::reverseString(input) << endl;

    return 0;
}
