#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int> &nums, int target)
{
    vector<int> res{};
    int i = 0;
    cout << val <<endl;
    while (i < nums.size())
    {
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] + nums[j] == target)
            {
                res.push_back(i);
                res.push_back(j);
            }
        }
        i++;
    }
    return res;
}
int main()
{
    vector<int> numbers{2,7,11,15};

    vector<int> nums = twoSum(numbers, 5);
    cout <<  "[" <<  nums[0] << "," << nums[1] <<"]";

    return 0;
}