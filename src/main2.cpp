#include <bits/stdc++.h>
using namespace std;
typedef vector<int> vi;
int removeDuplicates(vector<int> &nums)
{
    vi generated;
    int i = 0;
    while (i < nums.size())
    {
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] == nums[j] )
            {
                generated.push_back(nums[i]);
            }
        }

        i++;
    }

     for(int i = 0; i< generated.size(); i++){
        cout << generated[i] <<endl;
     }
}
int main()
{

    vi nums{0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    removeDuplicates(nums);
    return 0;
}