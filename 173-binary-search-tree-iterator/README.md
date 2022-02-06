<h2><a href="https://leetcode.com/problems/binary-search-tree-iterator/">173. Binary Search Tree Iterator</a></h2><h3>Medium</h3><hr><div><p><font papago-id="10" papago-translate="translated">Implement the </font><code>BSTIterator</code><font papago-id="11" papago-translate="cached"> class that represents an iterator over the <strong papago-id="11-1"><a href="https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)" papago-id="11-1-0" target="_blank">in-order traversal</a></strong> of a binary search tree (BST):</font></p>

<ul>
	<li><code>BSTIterator(TreeNode root)</code><font papago-id="12" papago-translate="translated"> Initializes an object of the </font><code>BSTIterator</code><font papago-id="13" papago-translate="translated"> class. The </font><code>root</code><font papago-id="14" papago-translate="translated"> of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.</font></li>
	<li><code>boolean hasNext()</code><font papago-id="15" papago-translate="translated"> Returns </font><code>true</code><font papago-id="16" papago-translate="translated"> if there exists a number in the traversal to the right of the pointer, otherwise returns </font><code>false</code><font papago-id="17" papago-translate="translated">.</font></li>
	<li><code>int next()</code><font papago-id="18" papago-translate="translated"> Moves the pointer to the right, then returns the number at the pointer.</font></li>
</ul>

<p><font papago-id="19" papago-translate="translated">Notice that by initializing the pointer to a non-existent smallest number, the first call to </font><code>next()</code><font papago-id="20" papago-translate="translated"> will return the smallest element in the BST.</font></p>

<p><font papago-id="21" papago-translate="translated">You may assume that </font><code>next()</code><font papago-id="22" papago-translate="translated"> calls will always be valid. That is, there will be at least a next number in the in-order traversal when </font><code>next()</code><font papago-id="23" papago-translate="translated"> is called.</font></p>

<p>&nbsp;</p>
<p><strong papago-id="24" papago-translate="translated">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png" style="width: 189px; height: 178px;">
<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input</strong>
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
<strong papago-id="0-2">Output</strong>
[null, 3, 7, true, 9, true, 15, true, 20, false]

<strong papago-id="0-4">Explanation</strong>
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><font>The number of nodes in the tree is in the range </font><code>[1, 10<sup>5</sup>]</code><font>.</font></li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>
	<li><font>At most </font><code>10<sup>5</sup></code><font> calls will be made to </font><code>hasNext</code><font>, and </font><code>next</code><font>.</font></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li><font>Could you implement </font><code>next()</code><font> and </font><code>hasNext()</code><font> to run in average </font><code>O(1)</code><font> time and use&nbsp;</font><code>O(h)</code><font> memory, where </font><code>h</code><font> is the height of the tree?</font></li>
</ul>
</div>