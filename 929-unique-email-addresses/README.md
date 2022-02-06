<h2><a href="https://leetcode.com/problems/unique-email-addresses/">929. Unique Email Addresses</a></h2><h3>Easy</h3><hr><div><p><code>'@'</code><font papago-translate="cached" papago-id="14"> sign. Besides lowercase letters, the email may contain one or more </font><code>'.'</code><font papago-translate="cached" papago-id="15"> or </font><code>'+'</code><font papago-translate="cached" papago-id="16">.</font></p>

<ul>
	<li><font papago-translate="cached" papago-id="17">For example, in </font><code>"alice@leetcode.com"</code><font papago-translate="cached" papago-id="18">, </font><code>"alice"</code><code>"leetcode.com"</code></li>
</ul>

<p><font papago-translate="cached" papago-id="21">If you add periods </font><code>'.'</code></p>

<ul>
	<li><font papago-translate="cached" papago-id="23">For example, </font><code>"alice.z@leetcode.com"</code><font papago-translate="cached" papago-id="24"> and </font><code>"alicez@leetcode.com"</code><font papago-translate="cached" papago-id="25"> forward to the same email address.</font></li>
</ul>

<p><font papago-translate="cached" papago-id="26">If you add a plus </font><code>'+'</code></p>

<ul>
	<li><font papago-translate="cached" papago-id="28">For example, </font><code>"m.y+name@email.com"</code><font papago-translate="cached" papago-id="29"> will be forwarded to </font><code>"my@email.com"</code><font papago-translate="cached" papago-id="30">.</font></li>
</ul>

<p papago-id="31" papago-translate="translated">It is possible to use both of these rules at the same time.</p>

<p><font papago-translate="cached" papago-id="32">Given an array of strings </font><code>emails</code><font papago-translate="cached" papago-id="33"> where we send one email to each </font><code>emails[i]</code></p>

<p>&nbsp;</p>
<p><strong papago-id="35" papago-translate="translated">Example 1:</strong></p>

<pre papago-id="0" papago-translate="cached"><strong papago-id="0-0">Input:</strong> emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
<strong papago-id="0-2">Output:</strong> 2
<strong papago-id="0-4">Explanation:</strong> "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= emails.length &lt;= 100</code></li>
	<li><code>1 &lt;= emails[i].length &lt;= 100</code></li>
	<li><code>emails[i]</code><font papago-translate="translated" papago-id="21"> consist of lowercase English letters, </font><code>'+'</code><font papago-translate="translated" papago-id="22">, </font><code>'.'</code><font papago-translate="translated" papago-id="23"> and </font><code>'@'</code><font papago-translate="translated" papago-id="24">.</font></li>
	<li><font papago-translate="translated" papago-id="25">Each </font><code>emails[i]</code><font papago-translate="translated" papago-id="26"> contains exactly one </font><code>'@'</code><font papago-translate="translated" papago-id="27"> character.</font></li>
	<li>All local and domain names are non-empty.</li>
	<li><font papago-translate="translated" papago-id="28">Local names do not start with a </font><code>'+'</code><font papago-translate="translated" papago-id="29"> character.</font></li>
	<li><font papago-translate="translated" papago-id="30">Domain names end with the </font><code>".com"</code><font papago-translate="translated" papago-id="31"> suffix.</font></li>
</ul>
</div>