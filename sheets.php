<?php

require __DIR__ . '/vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;

$client = new Client();
$client->setApplicationName('Google Sheets with Primo');
$client->setScopes([Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig(__DIR__ . '/credentials.json');

$service = new Sheets($client);
$spreadsheetId = "1lGJmKGgBaRsFR51hMWQ1o2DRXTfJcS7vDtbG6Z1OQ5I";

$range = "feuille1"; // Sheet name

$values = [
    ['this is data to insert', 'my name'],
];
//echo "<pre>";print_r($values);echo "</pre>";exit;
$body = new ValueRange([
    'values' => $values
]);
$params = [
    'valueInputOption' => 'RAW'
];

$result = $service->spreadsheets_values->append(
    $spreadsheetId,
    $range,
    $body,
    $params
);

if($result->updates->updatedRows == 1){
    echo "Success";
} else {
    echo "Fail";
}


?>
