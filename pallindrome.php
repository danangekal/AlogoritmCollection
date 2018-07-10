<?php
	function check_palindrome($string) 
	{
	  if ($string == strrev($string))
	      return 'True';
	  else
		  return 'False';
	}

	echo check_palindrome('madam')."\n";
?>