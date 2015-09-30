<?php
if(isset($_POST["list"])){

	$content = $_POST["list"];
	//fh is file handler
	$fh = fopen("list.html", "w"); // i think w is write mode
	fwrite($fh, $content);
	fclose($fh);
	echo $content;


}


?>