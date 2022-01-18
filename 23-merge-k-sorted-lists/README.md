<h2><a href="https://leetcode.com/problems/merge-k-sorted-lists/">23. Merge k Sorted Lists</a></h2><h3>Hard</h3><hr><div><p><font papago-translate="cached" papago-id="14">You are given an array of </font><code>k</code><font papago-translate="cached" papago-id="15"> linked-lists </font><code>lists</code><font papago-translate="cached" papago-id="16">, each linked-list is sorted in ascending order.</font></p>

<p><em papago-id="17" papago-translate="translated">Merge all the linked-lists into one sorted linked-list and return it.</em></p>

<p>&nbsp;</p>
<p><strong papago-id="18" papago-translate="translated">Example 1:</strong></p>

<pre papago-id="19" papago-translate="cached"><strong papago-id="19-0">Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong papago-id="19-2">Output:</strong> [1,1,2,3,4,4,5,6]
<strong papago-id="19-4">Explanation:</strong> The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>

<p><strong papago-id="20" papago-translate="translated">Example 2:</strong></p>

<pre papago-id="21" papago-translate="cached"><strong papago-id="21-0">Input:</strong> lists = []
<strong papago-id="21-2">Output:</strong> []
</pre>

<p><strong papago-id="22" papago-translate="translated">Example 3:</strong></p>

<pre papago-id="23" papago-translate="cached"><strong papago-id="23-0">Input:</strong> lists = [[]]
<strong papago-id="23-2">Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong papago-id="24" papago-translate="translated">Constraints:</strong></p>

<ul>
	<li><code>k == lists.length</code></li>
	<li><code>0 &lt;= k &lt;= 10^4</code></li>
	<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
	<li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li>
	<li><code>lists[i]</code></li>
	<li><font papago-translate="cached" papago-id="26">The sum of </font><code>lists[i].length</code><font papago-translate="cached" papago-id="27"> won't exceed </font><code>10^4</code><font papago-translate="cached" papago-id="28">.</font></li>
</ul>
</div>