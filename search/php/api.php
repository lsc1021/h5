<?php
$time=$_GET["time"];
$start=$_GET["start"];
$end=$_GET["end"];
$url = "http://huoche.tuniu.com/yii.php?r=train/trainTicket/getTickets&primary%5BdepartureDate%5D=".$time."&primary%5BdepartureCityName%5D=".$start."&primary%5BarrivalCityName%5D=".$end."&start=0&limit=0";
$ch = curl_init();
$timeout = 5;
curl_setopt ($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$file_contents = curl_exec($ch);
curl_close($ch);
echo $file_contents;
?>