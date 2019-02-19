# bootstrap-resto-website
Responsive website using bootstrap  

===========



_Objectifs :_   

* Installation de bootstrap avec le lien CDN pour ne pas personnaliser ce fichier dans l'exercice _OK_  
* Un fichier CSS pour tout le site (en plus de celui de Bootstrap) _OK_  
* Liens relatifs aux autres pages (pas de liens absolus) _OK_  
* Fichiers rangés dans des dossiers (assets, puis css, js et img dedans) _OK_  
* GitHub : le lien de la page [GitHubPage](https://cevaho.github.io/bootstrap-resto-website/) se trouve à côté de la description (donc il faut une description au repo) ET on veut un readme _OK_  
* Le site doit être intégralement responsive.  
* Une favicon  
* Utilisation de [FontAwesome](https://fontawesome.com/start) pour les icones  
* Lighthouse : 80% sur toutes les catégories  

## Composition du site

* Une page Accueil avec un composant [Jumbotron](http://www.conseil-webmaster.com/formation/bootstrap/jumbotron-bootstrap.php), une class bootstrap pour un simple bloc contenant un message bien visible._OK_  
		avec le logo ou le nom du restaurant qui s'anime du bas vers le haut.  
* Une page Carte avec les menus présentés sous forme de liste groupée avec badges  
* Une page Photos avec une galerie photos (minimum 10). 
		On veut 4 photos sur chaque ligne en format Desktop, 2 en format Tablet et 1 en format smartphone.  
* Une page Restaurants avec l'adresse, un plan d'accès et les heures d'ouverture 
		d’au moins trois restaurants (c’est une franchise !)  
* Une page Contact avec un formulaire de contact 
		comprenant nom, prénom, e-mail, liste déroulante (objet du message avec un select et des options)), un champs de texte (pour le message), un bouton d'envoi avec [glyphicon](http://www.conseil-webmaster.com/formation/bootstrap/glyphicons-bootstrap.php). Mettre un label également sur cette page pour indiquer un truc

_Désirs du client_

* à l'ouverture de la page d'accueil, il y ait un pop-up qui récupère le prénom du visiteur, 
		puis affiche un "bonjour {nom du visiteur} !" avant le texte de présentation du restaurant._OK_  
* Le client souhaite que dans la partie Restaurants, en plus de l'affichage des horaires et des jours d'ouverture, 
		il y ait une mention interactive "Nous sommes le { date et heure }, le restaurant est donc { ouvert / fermé }" en fonction de l'heure et la date de consultation du site._OK_

_Conseils_

* Prenez le temps qu’il vous faut.  
* N’hésitez pas à faire des dessins, des plans, à prendre des notes sur papier avant de commencer.  
* Lisez bien les consiiiiignes !!!  
* Préparer votre contenu, ensuite seulement appliquer la structure puis les classes et id et ensuite le CSS ! Ne vous éparpillez pas, allez-y pas à pas, page par page,...
* utiliser des banques d'images libres de droits comme pexels.com, pixabay et unsplash

## Tools (Bonus)

_Librairie conseillée :_

* GSAP animation pour les animations javascript poussée
* ScrollMagic pour trigeer des animations au scroll CSS/JS
* collaps button sans jquery: [ici](https://davidwalsh.name/demo/css-slide.php)

