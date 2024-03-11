<?php 

require __DIR__ . '/vendor/autoload.php';

$client = new Google\Client();
$client->setApplicationName('Google Sheets with Primo');
$client->setScopes([Google\Service\Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig(__DIR__ . '/credentials.json');

$service = new Google\Service\Sheets($client);
$spreadsheetId = "1lGJmKGgBaRsFR51hMWQ1o2DRXTfJcS7vDtbG6Z1OQ5I";

$range = "feuille1"; // Sheet name

$values = [
    ['this is data to insert', 'my name'],
];

$body = new Google\Service\Sheets\ValueRange([
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
