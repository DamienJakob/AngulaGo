# Documentation AngulaGo
## Installation
1. Cloner le [répertoire git de l'application](https://github.com/CPNV-ES/AngulaGo)
1. Installer Node.js et npm, par exemple en suivant [ces instructions](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
1. Installation des dépendances : dans le répertoire de l'application, utilisar la commande `npm install`

## Mises à jour
1. Mise à jour d'Angular et des dépendances : `npm run update-deps`

## Lancement de l'application
Lancer le serveur web de développement : `npm start`

URL de l'application : `localhost:8000`

## Serveur
Voir le document [SetupServer.md](documentation/SetupServer.md).

## Choix de l'IDE
Voir le document [IDE.md](documentation/IDE.md).

## Structure de fichiers
```
app/                  --> fichiers sources de l'application
  assets/                 --> images utilisées par l'application
  components/             --> composants de l'application
    selectCurrency/           --> éléments relatifs au composant selectCurrency
      selectCurrency.html         --> template du composant
      selectCurrency.js           --> déclaration du composant
    ...
  data/                   --> contient les données (langues, monnaies) de l'application (format json)
  modules/                --> modules de l'application
    homepage/                 --> éléments relatifs au module : homepage
      homepage.html              --> template du module
      homepage.js                --> déclaration du module, configuration de la route
    search/                 --> éléments relatifs au module : search
      homepage.html              --> template du module
      homepage.js                --> déclaration du module, configuration de la route
    version/                  --> éléments relatifs au module : version
      version.js                 --> module de version
      version-directive.js       --> directive : retourne la version actuelle de l'application
      interpolate-filter.js      --> custom interpolation filter
  app.css                --> feuille de style    
  app.js                 --> module principal de l'application, avec contrôleur et configuration
  index.html             --> layout de l'application
documentation/        --> documentation annexe de l'application
  sources                  --> fichiers et documents de conception de la documentation
```

## Analyse
* [Mockups de l'application](documentation/mockups.pdf)
* [Etude du comportement responsive](documentation/responsive%20behavior.md)
* [Visualisation du DOM](documentation/DOM_visualisation.md)

## Structure de l'application
### Vues
* Chaque vue contient le menu et le pied de page.
* Deux vues sont disponibles : page principale et recherche.
    * La page principale contient le menu
    * La page de recherche est vide. Elle est utilisée afin de tester la navigation.

### Modules et composants
* L'application est constituée de modules
* Un module contient plusieurs composants, directives, pipes, etc...
* Un composant contient un template, et de la logique interne au composant.
* Un composant peut faire appel à un autre composant de son module

### Modules
#### angulago (app.js)
* Racine de l'appplication. Lié au layout. 
* Contient les composants nécessaires au menu et au pied de page.
* Charge le module correspondant à la page à afficher selon l'URL (single page application).
* Charge le principal fichier de language.
* Recharge le fichier de langue lorsqu'il en reçoit la demande.
* Transmet l'information aux enfants lorsque la langue change.

#### homepage
* Page principale de l'application
* Contient les composants de la page

#### search
* Page obtenue en cliquant sur le bouton "chercher" de la page principale.
* Page vide pour l'instant. Utilisé principalement afin de tester la navigation.

#### version
* Petit module chargé d'afficher la version de l'application.
 
### Composants
#### menu
* Module : angulago
* Menu de l'application.
* Parent des autres composants du menu.

#### selectLanguage
* Module : angulago
* Utilisé comme enfant du composant menu
* Contient la liste déroulant de sélection de la monnaie.
* Charge la liste des langues. 
* Transmet l'information aux parents lorsqu'une langue est sélectionnée.

#### selectCurrency
* Module : angulago
* Utilisé comme enfant du composant menu
* Contient la liste déroulant de sélection de la monnaie.
* Charge le fichier de monnaie.
* Recharge le fichier de monnaie, dans la langue voulue, lorsqu'il en reçoit l'ordre.

#### footer
* Module : angulago
* Pied de page. Affiche la version de l'application.
* Fait appel au module version.

#### tripSearchForm
* Module : homepage
* Formulaire de recherche de la page principale
* Mis sous forme de composant plutôt qu'écrit directement dans le module afin de faciliter l'ajout futur de nouveaux éléments dans la page.

### DOM
DOM, vu sous l'angle des modules et composants

```
<html module:angulago>
  <head></head>
  <body>
    <menu (composant d'angulago)>
      <selectCurrency (composant d'angulago)></selectCurrency>
      <selectLanguage (composant d'angulago)></selectLanguage>
    </menu>

    <div module:homepage (chargé par angulago, selon l'URL)>
      <composant:tripSearchForm (composant de homepage)></tripSearchForm>
    </div>

    <footer (composant d'angulago), utilise le module version>
    </footer>
  </body>
</html>
```

## Chargement
### Pas de lazy loading
Si la page index.html, on remarquera que tous les composants et modules sont chargés en même temps. 
Pour une application de cette taille, cela n'est pas vraiment un problème puisqu'ils sont tous utilisés, 
mais cela devient problématique si la taille de l'application augmente.

Il serait donc pratique de faire du lazy loading. 
Malheureusement, AngularJs ne permet pas nativement de le faire.
Il existe des librairies externes qui peuvent le faire, notamment ocLazyLoad.
Nous n'y avons pour l'instant pas fait recours, préférant rester focalisés sur le framework.

### Chargement des données



### Données
Les données sont enregistrées au format json dans le dossier data. 
Elle sont chergées par le composant/module en utilisant le service $http d'AngularJs, qui utilise XMLHttpRequest.

#### Structure des données
##### Liste des langues
Il y un fichier contenant la liste des langues, dans le répertoire data, nommé languages.json.
Il contient la liste des longues, nommées dans leur propre language.

Données :
* tableau de langues
    * id : identifiant unique de la langue (exemple : FR)
    * name : nom de la langue, dans son propre language (exemple : Deutsch)

##### Monnaies
Il y a un fichier de monnaie par langue, dans le répertoire data/currencies.
(à noter que pour éviter une perte de temps inutile seules les principales monnaies ont été traduites).

Données :
* defaultCurrency: id de la langue par défaut du language (pour currencies.fr.json : "CHF")
* currencies: liste des monnaies, qui sont elles-mêmes des objets
    * id : abréviation unique de la monnaie (CHF, USD, ...)
    * name : nom de la monnaie
    * mainCurrency : booléen. Indique si la monnaie doit figurer dans la sélection des monnaies courantes ou non)

##### Contenus traduits
Il y a un fichier de contenu par langue par module, dans le répertoire data/languages.
Deux modules contiennent du texte traduit : angulago, et homepage.
Les fichiers sont nommés selon la manière suivante : homepage/homepage.fr.json.

Données angulago :
* language : langue du fichier
* menu : données du composant menu
    * login : traduction de "login"
    * menu : traduction de "menu"
    * selectCurrencies : données du composant selectCurrencies
        * mainCurrencies : traduction de "monnaies principales"
        * allCurrencies : traduction de "toutes les monnaies"

Données homepage :
* language : langue du fichier
* tripSearchForm : données du composant menu
    * search : traduction de "recherche"
    * ...

## Comportement responsive
AngularJs ne s'occupe pas du tout du comportement respnsive de l'application. 
Il faut donc utiliser le css comme à l'accoutumée.
