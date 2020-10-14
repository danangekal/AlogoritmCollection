<?php
	function cyclic_rotation($A, $K) {
	    if(count($A)==0){
	        return $A;
	    }
	    $temp = array();
	    for($i=0; $i<$K; $i++) { 
	        $t = array_pop($A);
	        array_unshift($A,$t);
	    }
	    return $A;
	}

	$A = [3, 8, 9, 7, 6];
	$K = 3;

	print_r(cyclic_rotation($A, $K))."\n";
?>