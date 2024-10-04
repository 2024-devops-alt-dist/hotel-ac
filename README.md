# CLAIR DE LUNE

Ce projet utilise les technologies suivantes :

- **React** : pour construire l'interface utilisateur.
- **Redux** : pour la gestion de l'état.
- **Firebase** : pour l'authentification et la base de données.
- **React Router** : pour la navigation.
- **Font Awesome** : pour les icônes.

   - pas de packege ni de librairies externes
 
  
## Installation

Pour installer et exécuter le projet, suivez les étapes ci-dessous :

1. Clonez le dépôt :
  ``` git clone https://github.com/username/nom-du-projet.git ```
2. Naviguez vers le répertoire du projet :
```cd clair_de_lune_clone``` (le nom de votre projet)

Installez les dépendances :
```npm install```

Lancez l'application :
```npm start```


Utilisation
Une fois l'application lancée, vous pouvez y accéder à http://localhost:3000.

Fonctionnalités
Authentification : Les utilisateurs peuvent se connecter et créer un compte.
Liste d'hôtels : Les utilisateurs peuvent naviguer et consulter les hôtels disponibles.
Diaporama : Un diaporama dynamique qui affiche les hôtels avec leur évaluation.
Espace privé : Les gérants peuvent gérer leurs images et leurs hôtels.


# GESTION DU PROJET :

 
**UML** 
voir les diagrammes de cas d'utilisation sur draw.io [ICI](https://app.diagrams.net/#G1lSN48FVWjwFrSyCtTWwB2PW65i_SdZAO#%7B%22pageId%22%3A%22eeA_I9f9R7S2Q5VrKWYx%22%7D)

**MERISE**
voir les diagrammes uml sur draw.io [ICI](https://app.diagrams.net/#G1bcr0K7iW2jFiCuRYZwYARSnlIu0d9hBm#%7B%22pageId%22%3A%226hinFLYn6ZgsFuJjvz3K%22%7D)


**CAHIER DES CHARGES**


CONTEXTE

L’Hôtel Clair de Lune est une chaîne d’hôtels ruraux, située dans des régions calmes et naturelles en France. L’établissement souhaite développer une application web pour permettre à ses clients de réserver directement leurs chambres, sans passer par des plateformes tierces. L’application doit aussi permettre une gestion efficace des établissements, des suites, et des réservations.

OBJECTIFS

L’application doit permettre pour le client et/ou visiteurs:
La consultation des différentes suites par établissement
La possibilité de trouver un établissement dans une zone définie
La possibilité de trouver une suite suivant une date précise
La création d’un compte
La réservation et / ou annulation d’une suite
Le suivi de sa réservation
Le client et / ou visiteur peut avoir accès à un formulaire de contact permettant la demande de services supplémentaires et/ou de poser des questions 


L’application doit permettre pour l’administrateur et/ou les gérants : 

La gestion du parc du hôtelier : répertorier/lister les différents établissements de la chaîne
La gestion des gérants : créer un compte par gérant afin qu’ils puissent suivre leur(s) établissement(s)
La gestion des chambres : répertorier/lister les différentes suites de chaque établissement 
La possibilité d’ouvrir ou non les suites d’un établissement à la réservation
La consultation et la modification des établissements, des suites et des profils gérants à tout moment.




Fonctionnalités:

Gestion des Administrateurs :
Créer un établissement : ajouter un nouvel hôtel avec ses informations (nom, ville,adresse, description). 
Modifier un établissement : Mettre à jour les informations d’un hôtel existant.
Supprimer un établissement : Retirer un hôtel de la liste des établissements.

Gestion des gérants (Admin)
Créer un gérant : ajouter un nouveau gérant avec ses informations( nom, prénom, e-mail, mot de passe).
Modifier un gérant : mettre à jour les informations d’un gérant existant.
Supprimer un gérant : Retirer un gérant de la gestion des hôtels.

Gestion des suites (gérant)
Créer une suite : ajouter une nouvelle suite dans un hôtel avec son titre , sa description, son prix, une image et une galerie
Modifier une suite : Mettre à jour les informations  d’une suite existante.
Supprimer une suite : Retirer une suite des options disponibles à la réservation.

Consultation des établissement et des suites (Visiteur/Client)
Voir la liste des établissements : Afficher les hôtels disponibles avec leur informations de base
Consulter les détails d’un établissement : Accéder à la page d’un hôtel pour voir les suites disponibles et leurs descriptions complètes.
Voir les détails des suites : Accéder aux informations détaillées d’une suite (titre , images , description, prix)

Réservation en ligne (Clients)
Réserver une suite : Selectionner une suite, des dates de séjour et vérifier la disponibilité de la suite pour effectuer une réservation.
Créer un compte client : Inscription des clients via e-mail, mot de passe , nom et prénom.
Connexion pour réserver : Se connecter avec ses identifiants pour finaliser une réservation.

Gestion des Réservations (Clients)
Consulter ses réservations : Voir les réservations en cours et passées dans un tableau de bord personnel.
Annuler une réservation : Annuler une réservation existante si elle respecte les conditions.

Formulaire de contact (Visiteur/Client)
Envoyer un message à l'établissement : Formulaire pour poser des questions ou demander des services supplémentaires.


**USER STORIES**
voir les user stories sur draw.io [ICI](https://app.diagrams.net/#G1350UsJ8IxQpX_fI2kHw4Y6hmGTFYq2ua#%7B%22pageId%22%3A%22mNn2Te_9kdLdxFRugcm6%22%7D)

PRIORITÉ DES USERS STORIES :

*Haute priorité* : 
US1 => Gestion des établissements
US2 => Gestion des gérants
US5 => Réservation de suite
US6 => Annulation de réservation

*Moyenne priorité* : 
US3 => Gestion des suites
US4 => Consultation des établissements et suites

*Basse priorité* : 
US7 => Contact avec un établissement


**MAQUETTES/WIREFRAME**
projet de maquette sur figma [ICI](https://www.figma.com/design/rhC0E4bCnFnJaBAF9Dokyn/Clair-de-Lune?node-id=0-1&node-type=canvas&t=VdvZCHJoOiuVCVHy-0)

**voir le wireframe sur figma [ICI](https://www.figma.com/board/6PI4TlDNo20cfcP4sJViaD/clair-de-lune-Wireframe?node-id=0-1&node-type=canvas&t=jubnjiK5xwGkicu8-0)

##Charte Graphique

*couleurs* : 
Bleu : #519ABB
Orange : #FD9D05
fond : blanc

*Fonts* :
logo : Monserrat
h1 : monserrat bold orange
h2: monserrat medium noir
p : Avenir Next regular noir





