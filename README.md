Projet - Système de vote 2:
 
Ce référentiel contient des tests unitaires pour le contrat de vote basé sur la blockchain Ethereum.

Ce contrat de vote est un contrat intelligent basé sur la blockchain Ethereum qui permet aux électeurs enregistrés de proposer et de voter sur différentes propositions. Il offre une manière transparente et décentralisée de mener des processus de vote.

----------------------------------------------------------------------------------------------------------------------------------------------------------

Prérequis:
Avant d'exécuter les tests, assurez-vous d'avoir installé les dépendances nécessaires en exécutant la commande suivante :

$ npm install

----------------------------------------------------------------------------------------------------------------------------------------------------------

Exécution des Tests:
Pour exécuter les tests, utilisez la commande suivante :

$ truffle test

----------------------------------------------------------------------------------------------------------------------------------------------------------

Les tests: 

Le contrat comprend un ensemble de tests unitaires écrits en JavaScript à l'aide de la bibliothèque d'assertions Chai et des utilitaires de test OpenZeppelin. Ces tests couvrent différents scénarios et garantissent le comportement attendu du contrat. Ils peuvent être exécutés à l'aide de Truffle ou d'un framework de test compatible.
Ces tests couvrent les différents scénarios du contrat de vote, notamment :

L'enregistrement des électeurs
L'ajout des propositions
Le vote des électeurs
Le décompte des votes
La vérification des résultats finaux
Les tests vérifient également les conditions d'échec attendues pour chaque étape du processus de vote, telles que l'ajout d'un électeur non autorisé, l'ajout d'une proposition vide, le vote multiple d'un électeur, etc.

----------------------------------------------------------------------------------------------------------------------------------------------------------

Rapports de Test:
Après l'exécution des tests, des rapports détaillés sont générés pour fournir des informations sur les résultats des tests, les événements déclenchés et les erreurs éventuelles.

----------------------------------------------------------------------------------------------------------------------------------------------------------

Avertissement:
Les tests sont destinés à vérifier le bon fonctionnement du contrat de vote. Assurez-vous d'exécuter ces tests uniquement dans un environnement de développement ou de test, et non sur le réseau Ethereum principal (Mainnet), car cela pourrait entraîner des frais de transaction réels.

----------------------------------------------------------------------------------------------------------------------------------------------------------

Licence:
Ce référentiel est publié sous la licence MIT. Vous pouvez trouver les informations de licence dans le fichier LICENSE.
