<?php
	$numberGiven = 9;
	$binaryForm = decbin($numberGiven);

	preg_match_all('/(0+)/', $binaryForm, $matches);
	$matches = $matches[0];

	rsort($matches, SORT_STRING);
	echo 'count = ' . strlen($matches[0])."\n";
	echo $binaryForm."\n";
?>