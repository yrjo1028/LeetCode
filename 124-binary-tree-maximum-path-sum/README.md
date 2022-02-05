<h2><a href="https://leetcode.com/problems/binary-tree-maximum-path-sum/">124. Binary Tree Maximum Path Sum</a></h2><h3>Hard</h3><hr><div><p papago-id="13" papago-translate="cached">A <strong papago-id="13-1">path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong papago-id="13-3">at most once</strong>. Note that the path does not need to pass through the root.</p>

<p papago-id="14" papago-translate="cached">The <strong papago-id="14-1">path sum</strong> of a path is the sum of the node's values in the path.</p>

<p><font papago-translate="cached" papago-id="15">Given the </font><code>root</code></p>

<p>&nbsp;</p>
<p><strong papago-id="17" papago-translate="translated">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" style="width: 322px; height: 182px;">
<pre papago-id="18" papago-translate="cached"><strong papago-id="18-0">Input:</strong> root = [1,2,3]
<strong papago-id="18-2">Output:</strong> 6
<strong papago-id="18-4">Explanation:</strong> The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.
</pre>

<p><strong papago-id="19" papago-translate="translated">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg">
<pre><strong>Input:</strong> root = [-10,9,20,null,null,15,7]
<strong>Output:</strong> 42
<strong>Explanation:</strong> The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><font papago-translate="translated" papago-id="2">The number of nodes in the tree is in the range </font><code>[1, 3 * 10<sup>4</sup>]</code><font papago-translate="translated" papago-id="3">.</font></li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>
</div>