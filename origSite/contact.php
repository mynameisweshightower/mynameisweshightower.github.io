<?php 
	session_start();
	require("config.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="casStyle.css" />
<script type="text/javascript" src="casScript.js"></script>
<title>Wes Hightower // Contact</title>
</head>

<body>

	<div id="navHolder">
		<div id="navigation">
			<nav id="mainNav">
				<a href="about.html" id="navAbout" class="navLink">
					<span class="navText" id="navTextAbout">Exegesis</span>
					<img src="images/questionMark.png" class="navImage" id="navImageAbout" />
				</a>
	  			<a href="portfolio.html" id="navPortfolio" class="navLink">
	  				<span class="navText" id="navTextPortfolio">Panoply</span>
					<img src="images/spyglass.png" class="navImage" id="navImagePortfolio" />
	  			</a>
	  			
	  			<a href="index.html" id="logoLink">
					<div id="logo">
						&nbsp;
					</div> <!-- /#logo -->
				</a>
	  			
				<a href="resume.html" id="navResume" class="navLink">
					<span class="navText" id="navTextResume">Resume</span>
					<img src="images/resume.png" class="navImage" id="navImageResume" />
				</a>
				<a href="contact.php" id="navContact" class="currLink">
					<span class="navText" id="navTextContact">Contact</span>
					<img src="images/phone.png" class="navImage" id="navImageContact" />
				</a>
			</nav> <!-- /#mainNav -->
		</div> <!-- /#navigation -->
	</div> <!-- /#navHolder -->
	
	<div id="headHolder">
		<div id="header">
			<img src="images/contentBorder.png" id="contentBorder" />
		</div> <!-- /#head -->
	</div> <!-- /#headHolder -->
	
	<div id="contentHolder">
		<div id="content">
		
			<div id="title">
				<hr id="topOutlineContact" />
				<h1 id="aboutTitle"><span class="titleQuote">&quot;</span><span id="titleTitleAbout">C</span>ontact<span class="titleQuote">&quot;</span></h1>
				<hr id="bottomOutlineContact" />
			</div> <!-- /#title -->
			
			<?php
			if (isset($_POST['submit']) == true)
			{
				//connect user to database
				$db = mysql_connect($dbhost, $dbuser, $dbpassword);
				mysql_select_db($dbdatabase, $db);
				
				//insert data into database
				//$sql = "INSERT INTO comments(blog_id, dateposted, name, comment) VALUES(" . $validentry . ", NOW(), '" . $_POST['name'] . "', '" . $_POST['comment'] . "');";
				$sql = "INSERT INTO contact(name, email, comments) VALUES('" . $_POST['name'] . "', '" . $_POST['email'] . "', '" . $_POST['message'] . "');";
				mysql_query($sql);
				
			
				echo "<p id='thanks'>Thank you for your input!</p>";
								
				/*
				$to = "wesley.l.hightower@gmail.com";
				$subject = "Portfolio Site Casual | From Your Portfolio";
				$message = $_REQUEST['message'];
				$name = $_REQUEST['name'];
				$email = $_REQUEST['email'];
				//$headers = "From: $from";
				mail($to, $subject,"From:\t\t" . $email . "\nName:\t\t" . $name . "\nComment:\t" . $message, "From: " . $to);

				//mail($email,"Subject: Thanks for your input!","Thank you for taking the time to visit and fill out my form. \n\t-Wes Hightower");
				*/
			}
			else
			{
			//$_SESSION['USERNAME'] = "yes";
			echo '<form method="POST" action="contact.php" id="contact">
				<div id="nameLabel" class="formLabel">
					Name
				</div>
				
				<div id="nameInput" class="formDiv">
					<input type="text" class="formInput" name="name" required>
				</div>
				
				<div id="emailLabel" class="formLabel">
					E-Mail
				</div>
				
				<div id="emailInput" class="formDiv">
					<input type="email" class="formInput" name="email" required>
				</div>
				
				<div id="messageLabel" class="formLabel">
					Message
				</div>
				
				<div id="messageInput" class="formDiv">
					<textarea id="messageBox" class="formInput" name="message"></textarea>
				</div>
				
				<div class="formDiv">
					<input type="submit" name="submit" value="Send" id="contactSubmit">
				</div>
			</form>';
			}
			?>
			
			
			</div> <!-- /#content -->
	</div> <!-- /#contentHolder -->
	
	<div id="footHolder">
		<div id="footBorder">
			<img src="images/contentBorder.png" id="footBorderImage" />
		</div> <!-- /#footBorder -->
	
		<div id="footer">
			<span id="copyright">&copy; 2013 Wes Hightower</span>
			
			<ul id="otherLinks">
				<li>
					<a href="blog/index.php">Blog</a>
				</li>	
			</ul> <!-- /#otherLinks -->
			
			<a href="credits.html" id="creditsLink">Credits</a>
		</div> <!-- /#footer -->
	</div> <!-- /#footHolder -->
	
</body>
</html>
