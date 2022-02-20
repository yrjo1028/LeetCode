<h2><a href="https://leetcode.com/problems/rings-and-rods/">2103. Rings and Rods</a></h2><h3>Easy</h3><hr><div><p><font papago-translate="translated" papago-id="0">There are </font><code>n</code><font papago-translate="cached" papago-id="1"> rings and each ring is either red, green, or blue. The rings are distributed <strong papago-id="1-1">across ten rods</strong> labeled from </font><code>0</code><font papago-translate="translated" papago-id="2"> to </font><code>9</code><font papago-translate="translated" papago-id="3">.</font></p>

<p><font papago-translate="translated" papago-id="4">You are given a string </font><code>rings</code><font papago-translate="translated" papago-id="5"> of length </font><code>2n</code><font papago-translate="translated" papago-id="6"> that describes the </font><code>n</code><font papago-translate="cached" papago-id="1"> rings that are placed onto the rods. Every two characters in </font><code>rings</code></p>

<ul>
	<li><code>i<sup>th</sup></code><font papago-translate="cached" papago-id="1"> pair denotes the </font><code>i<sup>th</sup></code><code>'R'</code><font papago-translate="cached" papago-id="11">, </font><code>'G'</code><font papago-translate="cached" papago-id="12">, </font><code>'B'</code><font papago-translate="cached" papago-id="13">).</font></li>
	<li><code>i<sup>th</sup></code><code>i<sup>th</sup></code><font papago-translate="cached" papago-id="16"> ring is placed on (</font><code>'0'</code><font papago-translate="cached" papago-id="17"> to </font><code>'9'</code><font papago-translate="cached" papago-id="18">).</font></li>
</ul>

<p><font papago-translate="cached" papago-id="19">For example, </font><code>"R3G2B1"</code><font papago-translate="cached" papago-id="20"> describes </font><code>n == 3</code><font papago-translate="cached" papago-id="21"> rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.</font></p>

<p papago-id="22" papago-translate="cached">Return <em papago-id="22-1">the number of rods that have <strong papago-id="22-1-1">all three colors</strong> of rings on them.</em></p>

<p>&nbsp;</p>
<p><strong papago-id="23" papago-translate="translated">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex1final.png" style="width: 258px; height: 130px;">
<pre papago-id="24" papago-translate="cached"><strong papago-id="24-0">Input:</strong> rings = "B0B6G0R6R0R6G9"
<strong papago-id="24-2">Output:</strong> 1
<strong papago-id="24-4">Explanation:</strong> 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.
</pre>

<p><strong papago-id="25" papago-translate="translated">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex2final.png" style="width: 266px; height: 130px;">
<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input:</strong> rings = "B0R0G0R9R0B0G0"
<strong papago-id="0-2">Output:</strong> 1
<strong papago-id="0-4">Explanation:</strong> 
- The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
- The rod labeled 9 holds only a red ring.
Thus, the number of rods with all three colors is 1.
</pre>

<p><strong papago-id="0" papago-translate="translated">Example 3:</strong></p>

<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input:</strong> rings = "G4"
<strong papago-id="0-2">Output:</strong> 0
<strong papago-id="0-4">Explanation:</strong> 
Only one ring is given. Thus, no rods have all three colors.
</pre>

<p>&nbsp;</p>
<p><strong papago-id="0" papago-translate="translated">Constraints:</strong></p>

<ul>
	<li><code>rings.length == 2 * n</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>rings[i]</code><font papago-translate="translated" papago-id="23"> where </font><code>i</code><font papago-translate="cached" papago-id="24"> is <strong papago-id="24-1">even</strong> is either </font><code>'R'</code><font papago-translate="translated" papago-id="25">, </font><code>'G'</code><font papago-translate="translated" papago-id="26">, or </font><code>'B'</code><font papago-translate="cached" papago-id="27"> (<strong papago-id="27-1">0-indexed</strong>).</font></li>
	<li><code>rings[i]</code><font papago-translate="translated" papago-id="28"> where </font><code>i</code><font papago-translate="cached" papago-id="29"> is <strong papago-id="29-1">odd</strong> is a digit from </font><code>'0'</code><font papago-translate="translated" papago-id="30"> to </font><code>'9'</code><font papago-translate="cached" papago-id="31"> (<strong papago-id="31-1">0-indexed</strong>).</font></li>
</ul>
</div>