<?php
$url ="http://is.snssdk.com/neihan/stream/mix/v1/?mpic=1&webp=1&essence=1&content_type=-102";
$html = file_get_contents($url);
echo $html;
?>