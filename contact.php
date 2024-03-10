<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom_prenom = $_POST['input-nomprenom'];
    $tel = $_POST['input-tel'];
    $email = $_POST['input-email'];

    // Adresse e-mail de destination
    $to = "limandribaptiste@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau formulaire soumis";

    // Contenu de l'e-mail
    $message = "Nom et Prénom: $nom_prenom\n";
    $message .= "Téléphone: $tel\n";
    $message .= "Email: $email\n";

    // En-têtes de l'e-mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoyer l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        // Si l'e-mail est envoyé avec succès, rediriger vers index.html
        header("Location: https://www.google.com/");

        exit;
    } else {
        //Afficher l'erreur
        print_r(error_get_last());

    }
}
?>
