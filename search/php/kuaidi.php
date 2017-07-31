<?php
$num = $_GET["num"];
$nam = $_GET["nam"];
$url ="https://www.kuaidi100.com/query?type=".$nam."&postid=".$num;
$html = file_get_contents($url);
echo $html;
?>