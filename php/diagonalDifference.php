<?php
	function diagonal_difference($arr) {
		$arrDiag = count($arr);

		$firstD = 0;
		$secondD = 0;

		$i = 0;
		for($j = 0; $j < $arrDiag; $j++){
		    $firstD += $arr[$i++][$j];
		    $secondD += $arr[$arrDiag - $i][$j];
		}

		return abs($firstD - $secondD);
	}
	
	$arr = [
		[11, 2, 4],
     	[4, 5, 6],
      	[10, 8, -12]
    ];

	echo diagonal_difference($arr)."\n";//41
?>