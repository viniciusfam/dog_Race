<?php


class Request
{
    function __construct(){}

    static function request(string $url, string $type){
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => $type == "post" ? 1 : 0,
            CURLOPT_URL => $url));
        $json = curl_exec($ch);
        echo json_encode (json_decode($json)->message);
    }
}