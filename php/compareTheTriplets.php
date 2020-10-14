<?php

	function solve($a, $b) {
	    // Set counters to '0'
	    $alice = 0;
	    $bob = 0;

	    
	    // Test each array and award a point to the array with the great value
	    for ($i = 0; $i < count($a) ; $i++) {
	    	if ($a[$i] > $b[$i]){
	            $alice += 1;
	        } else if ($a[$i] < $b[$i]){
	            $bob += 1;
	        }
	    }
	    
	    return $alice.' '.$bob;

	}

	$a = [5, 6, 7];
	$b = [3, 6, 10];

	echo solve($a, $b)."\n";
?>