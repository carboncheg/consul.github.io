<?php 
header("Content-type: text/plain; charser=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
sleep(1);
date_default_timezone_set("UTC");
date_default_timezone_set('Europe/Moscow');
echo "<small>".date("Y-m-d H:i:s")."</small>";
while(list ($key, $val) = each ($_POST)) {
	$val = iconv("utf-8", "utf-8", $_POST[$key]);
	echo "<pre>".strpslaches($val)."</pre>";
 }
 ?>
