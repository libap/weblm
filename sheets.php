<?php

require __DIR__ . '/vendor/autoload.php';

// Chemin vers le fichier JSON contenant les clés d'authentification
$credentialsPath = 'credentials.json';

// Initialiser le client Google Sheets
$client = new Google_Client();
$client->setAuthConfig($credentialsPath);
$client->addScope(Google_Service_Sheets::SPREADSHEETS);

// Authentification
if ($client->isAccessTokenExpired()) {
    $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
    file_put_contents($credentialsPath, json_encode($client->getAccessToken()));
}

// Créer une instance du service Google Sheets
$service = new Google_Service_Sheets($client);

// ID de votre fichier Google Sheets
$spreadsheetId = 'ID_DU_FICHIER_GOOGLE_SHEETS';

// Données à envoyer
$data = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3'],
    ['Donnée 4', 'Donnée 5', 'Donnée 6'],
    // Ajoutez autant de lignes que nécessaire
];

// Plage de cellules où écrire les données (par exemple, 'Sheet1!A1:C2')
$range = 'Sheet1!A1:C' . count($data);

// Créer l'objet de la demande
$requestBody = new Google_Service_Sheets_ValueRange([
    'values' => $data
]);

// Envoyer les données au fichier Google Sheets
$response = $service->spreadsheets_values->update($spreadsheetId, $range, $requestBody, [
    'valueInputOption' => 'RAW'
]);

// Vérifier si les données ont été envoyées avec succès
if ($response->getUpdatedCells() > 0) {
    echo 'Données envoyées avec succès !';
} else {
    echo 'Erreur lors de l\'envoi des données.';
}


?>
