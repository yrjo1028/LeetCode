<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/">122. Best Time to Buy and Sell Stock II</a></h2><h3>Medium</h3><hr><div><p><font papago-translate="translated" papago-id="0">You are given an integer array </font><code>prices</code><font papago-translate="translated" papago-id="1"> where </font><code>prices[i]</code><font papago-translate="cached" papago-id="10"> is the price of a given stock on the </font><code>i<sup>th</sup></code><font papago-translate="cached" papago-id="11"> day.</font></p>

<p papago-id="12" papago-translate="cached">On each day, you may decide to buy and/or sell the stock. You can only hold <strong papago-id="12-1">at most one</strong> share of the stock at any time. However, you can buy it then immediately sell it on the <strong papago-id="12-3">same day</strong>.</p>

<p papago-id="13" papago-translate="cached">Find and return <em papago-id="13-1">the <strong papago-id="13-1-1">maximum</strong> profit you can achieve</em>.</p>

<p>&nbsp;</p>
<p><strong papago-id="14" papago-translate="translated">Example 1:</strong></p>

<pre papago-id="15" papago-translate="cached"><strong papago-id="15-0">Input:</strong> prices = [7,1,5,3,6,4]
<strong papago-id="15-2">Output:</strong> 7
<strong papago-id="15-4">Explanation:</strong> Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
</pre>

<p><strong papago-id="16" papago-translate="translated">Example 2:</strong></p>

<pre papago-id="17" papago-translate="cached"><strong papago-id="17-0">Input:</strong> prices = [1,2,3,4,5]
<strong papago-id="17-2">Output:</strong> 4
<strong papago-id="17-4">Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
</pre>

<p><strong papago-id="18" papago-translate="translated">Example 3:</strong></p>

<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input:</strong> prices = [7,6,4,3,1]
<strong papago-id="0-2">Output:</strong> 0
<strong papago-id="0-4">Explanation:</strong> There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
</pre>

<p>&nbsp;</p>
<p><strong papago-id="0" papago-translate="translated">Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>