class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int maxi = 0;
        int bf = prices[0];

        for (size_t i = 0; i < prices.size(); i++) {
            int price = prices[i];
            if (price > bf) maxi += price - bf;
            bf = price;
        }
        
        return maxi;
    }
};