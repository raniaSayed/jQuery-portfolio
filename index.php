
<html>
<head>
	<title>JQuery Portfolio</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
<div id="header">
	<div id="menu">
		<h2>JQuery Portfolio</h2>
		<input type="text" id="search" placeholder="Search..." style ="float:right" />
	</div>
</div>
<div id="overlay"></div>
<div id="frame">

	<table id="frame-table">
		<tr>
			<td id="left"><img src="images/left.jpg" /></td>
			<td id="right"><img src="images/right.jpg" /></td>
		</tr>
	</table>
	<img id="main" src="" alt="" />

	<div id="description">
		<p></p>
	</div>
</div>
<div id="wrapper">
    <ul id="filter">
    	<li>all</li>
        <li>nature</li>
        <li>beauty</li>
        <li>baby</li>
    </ul>
	<ul id="portfolio">
		<?php include_once("list.html") ?>
	</ul>
</div>
</body>
<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/filter.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
</html>