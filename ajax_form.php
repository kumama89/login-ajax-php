<?php

$name = htmlspecialchars($_REQUEST['name']);
$email = htmlspecialchars($_REQUEST['email']);
$phone = htmlspecialchars($_REQUEST['phone']);
$file = $_FILES['file']['name'];

echo <<<INFO
<div style="padding:0 50px">
<p>Name: $name</p>
<p>Email: $email</p>
<p>Phone: $phone</p>
<p>File: $file</p>
</div>
INFO;

?>