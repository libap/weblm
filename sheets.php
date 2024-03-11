<?php

require __DIR__ . '/vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;

// Chemin vers le fichier JSON contenant les clés d'authentification
$credentialsPath = 'credentials.json';

// Initialiser le client Google Sheets
$client = new Client();
$client->setAuthConfig($credentialsPath);
$client->addScope(Sheets::SPREADSHEETS);

// Créer une instance du service Google Sheets
$service = new Sheets($client);

// ID de votre fichier Google Sheets
$spreadsheetId = '1lGJmKGgBaRsFR51hMWQ1o2DRXTfJcS7vDtbG6Z1OQ5I';

// Données à envoyer
$data = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3'],
    ['Donnée 4', 'Donnée 5', 'Donnée 6'],
    // Ajoutez autant de lignes que nécessaire
];

// Plage de cellules où écrire les données (par exemple, 'feuille1!A1:C2')
$range = 'feuille1!A1:C' . (count($data) + 1);

// Créer l'objet ValueRange pour les données
$valueRange = new ValueRange([
    'values' => $data
]);

// Envoyer les données au fichier Google Sheets
try {
    $response = $service->spreadsheets_values->update($spreadsheetId, $range, $valueRange, [
        'valueInputOption' => 'RAW'
    ]);

    // Vérifier si les données ont été envoyées avec succès
    if ($response->getUpdatedCells() > 0) {
        echo 'Données envoyées avec succès !';
    } else {
        echo 'Erreur lors de l\'envoi des données.';
    }
} catch (Exception $e) {
    echo 'Une erreur s\'est produite : ' . $e->getMessage();
}

?>
