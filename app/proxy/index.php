<?php

require 'vendor/autoload.php';

header('Content-Type: text/plain; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $guzzleClient = new GuzzleHttp\Client;

  try {
    $guzzleClient->post('http://pssurvey.saschina.org/saveelection.asp', [
      'form_params' => $_POST
    ]);
  } catch (GuzzleHttp\Exception\ConnectException $connectException) {
    http_response_code(503);
  }
}
