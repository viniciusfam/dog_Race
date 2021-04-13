
<?php
require 'src/Request.php';
$url = $_SERVER["REQUEST_METHOD"] === "GET" ? 'https://dog.ceo/api/breeds/list/all':'https://dog.ceo/api/breed/'.file_get_contents('php://input').'/images/random';
Request::request($url, $_SERVER["REQUEST_METHOD"]);
