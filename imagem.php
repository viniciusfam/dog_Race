<?php

$ch = curl_init();
$url = 'https://dog.ceo/api/breed/'.file_get_contents('php://input').'/images/random/';
curl_setopt_array($ch, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url));
$json = curl_exec($ch);
echo json_encode (json_decode($json)->message);


