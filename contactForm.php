<?php

	if ('POST' === $_SERVER['REQUEST_METHOD'])   {
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['comments'])) {
		echo "Error - message not sent";
		
	} else {
	
		$to = "darzwaitz@gmail.com,darzwaitz@yahoo.com";

		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$comments = htmlspecialchars($_POST['comments']);
		
		// subject in email sent from form
		$subject = 'Contact Request From '.$name;

		// Email Headers
		$headers = "MIME-Version: 1.0" ."\r\n";
		$headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";
		// email has to be included here to recieve emails from chrome
		$headers .="From: ".$email."\r\n";
		$headers .= "Reply-To: ".$email."\r\n"; 
		// body of email sent
		$body = '<h2>Contact Request</h2>
			<h4>Name</h4><p>'.$name.'</p>
			<h4>Email</h4><p>'.$email.'</p>
			<h4>Message</h4><p>'.$comments.'</p>
		';

		$mailsent = mail($to, $subject, $body, $headers);
		
		if($mailsent) {
			echo "<h2>Mail sent successfully<br>
			Thanks!..we will reply A.S.A.P!</h2><input type=\"button\" id=\"formButton\" value=\"Reload form\">";
		}
	}
}
?>