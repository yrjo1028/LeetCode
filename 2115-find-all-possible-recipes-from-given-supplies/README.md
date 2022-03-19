<h2><a href="https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/">2115. Find All Possible Recipes from Given Supplies</a></h2><h3>Medium</h3><hr><div><p><font papago-translate="cached" papago-id="14">You have information about </font><code>n</code><font papago-translate="cached" papago-id="15"> different recipes. You are given a string array </font><code>recipes</code><font papago-translate="cached" papago-id="16"> and a 2D string array </font><code>ingredients</code><font papago-translate="cached" papago-id="17">. The </font><code>i<sup>th</sup></code><font papago-translate="cached" papago-id="18"> recipe has the name </font><code>recipes[i]</code><code>ingredients[i]</code><code>ingredients[i]</code><font papago-translate="cached" papago-id="21"> may contain a string that is in </font><code>recipes</code><font papago-translate="cached" papago-id="22">.</font></p>

<p><font papago-translate="cached" papago-id="23">You are also given a string array </font><code>supplies</code><font papago-translate="cached" papago-id="24"> containing all the ingredients that you initially have, and you have an infinite supply of all of them.</font></p>

<p papago-id="25" papago-translate="cached">Return <em papago-id="25-1">a list of all the recipes that you can create. </em>You may return the answer in <strong papago-id="25-3">any order</strong>.</p>

<p papago-id="26" papago-translate="translated">Note that two recipes may contain each other in their ingredients.</p>

<p>&nbsp;</p>
<p><strong papago-id="27" papago-translate="translated">Example 1:</strong></p>

<pre papago-id="28" papago-translate="cached"><strong papago-id="28-0">Input:</strong> recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
<strong papago-id="28-2">Output:</strong> ["bread"]
<strong papago-id="28-4">Explanation:</strong>
We can create "bread" since we have the ingredients "yeast" and "flour".
</pre>

<p><strong papago-id="29" papago-translate="translated">Example 2:</strong></p>

<pre papago-id="30" papago-translate="cached"><strong papago-id="30-0">Input:</strong> recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
<strong papago-id="30-2">Output:</strong> ["bread","sandwich"]
<strong papago-id="30-4">Explanation:</strong>
We can create "bread" since we have the ingredients "yeast" and "flour".
We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
</pre>

<p><strong papago-id="0" papago-translate="translated">Example 3:</strong></p>

<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input:</strong> recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
<strong papago-id="0-2">Output:</strong> ["bread","sandwich","burger"]
<strong papago-id="0-4">Explanation:</strong>
We can create "bread" since we have the ingredients "yeast" and "flour".
We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".
</pre>

<p>&nbsp;</p>
<p><strong papago-id="0" papago-translate="translated">Constraints:</strong></p>

<ul>
	<li><code>n == recipes.length == ingredients.length</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= ingredients[i].length, supplies.length &lt;= 100</code></li>
	<li><code>1 &lt;= recipes[i].length, ingredients[i][j].length, supplies[k].length &lt;= 10</code></li>
	<li><code>recipes[i], ingredients[i][j]</code><font papago-translate="translated" papago-id="11">, and </font><code>supplies[k]</code><font papago-translate="translated" papago-id="12"> consist only of lowercase English letters.</font></li>
	<li><font papago-translate="translated" papago-id="13">All the values of </font><code>recipes</code><font papago-translate="translated" papago-id="14"> and </font><code>supplies</code><font papago-translate="translated" papago-id="15">&nbsp;combined are unique.</font></li>
	<li><font papago-translate="translated" papago-id="16">Each </font><code>ingredients[i]</code><font papago-translate="translated" papago-id="17"> does not contain any duplicate values.</font></li>
</ul>
</div>