<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nn test Ajax turzdy</title>
</head>

<body>
	<form method="post" id="myform">
		Name: <input type='text' name='name' />
		T'Email: <input type='email' name='email' />
		t'Comments: <input type='text' name='comments' />
		<input type='submit' name='submit' value='Post'>
		<div id='result'></div>
	</form>

   <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
	<script>
		$('#myform').submit(function(event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "contactForm.php",
				data: $(this).serialize(),		
				success: function(data){
					$('#result').html(data);
                    
				}					
			});
		});
	</script>
</body>
</html>

  