<?php
/**
 * Created by PhpStorm.
 * User: Utilisateur
 * Date: 29/10/2017
 * Time: 15:58
 */

/* Ouverture du fichier en lecture seule */
$handle = fopen('testTool.html', 'r');
/*Si on a réussi à ouvrir le fichier*/
if ($handle) {
  /*Tant que l'on est pas à la fin du fichier*/
  while (!feof($handle)) {
    /*On lit la ligne courante*/
    $row = fgets($handle);
    /*On l'affiche*/
    if (strpos($row, 'class=') !== false) {
      echo $row;
    }
  }
  /*On ferme le fichier*/
  fclose($handle);
}