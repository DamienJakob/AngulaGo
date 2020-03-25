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

### Diagramme de classes
[Diagramme de classe (pdf)](documentation/class%20diagram.pdf)

#### Pas de diagramme de conception
Pour la conception de l'application, nous n'avons pas fait recours à un diagramme de classe. 
En effet, nous n'avions pas encore les compétences nécessaires afin de prévoir à l'avance les classes utilisées.

Voici comment l'application a été pensée initialement :
* Un module root contenant toute l'application
* Un composant menu, avec le menu de l'application
    * Potentiellement des sous-composants gérant les fonctions les plus complexes du menu (langue, et monnaie dans une moindre mesure)
* un composant footer
* Un module par page de l'application

Pour générer l'application, nous avons eu recours à un processus itératif.
En partant de l'application monolithique, nous avons créé un premier composant, d'abord puisant ses données directement dans son parent.
Puis les méthodes et données spécifiques au composant ont été déplacées du parent au composant. 
Ensuite, pour les données que le composant doit lire chez le parent, des bindings ont été ajoutés.

Au final, la structure est assez similaire à ce qui avait été prévu, 
et nous avons maintenant une bien meilleure connaissance de la manière dont les informations peuvent être transmises entre modules et composants.

#### Pas de diagramme de classe autogénéré
Nous n'avous pour l'instant pas trouvé de bonne solution afin d'obtenir un diagramme de classe autogénéré avec AngularJs.
La piste la plus prometteuse semble être le plugin [grunt-angular-architecture-graph](https://github.com/lucalanca/grunt-angular-architecture-graph), 
qui est en version 0.2.6 depuis plusieurs années, utilise Grunt, ne peut analyser qu'un seul fichier js, 
et n'apporte pas d'informations sur les méthodes et attributs des classes.

### Séquence de chargement de la page
1. Chargement d'angularjs. Cela doit évidemment être le premier script à être chargé.
1. Chargement des modules. Une fois chargé, angularjs crée le module. 
    * A noter que même si le module angulago dépend des autres modules, l'ordre de chargement des modules n'a pas d'importance, car angularjs se débrouille pour faire les liens.
1. Chargement des composants. Une fois chargé, le composant se rattache à son parent.
    * A noter que le composant doit être chargé après son module, mais peut être chargé avant d'autres modules.
1. Le module angulago :
    * Il analyse l'URL : redirection de `/` sur `/homepage`
    * Il effectue une requête afin d'obtenir ses données de texte
    * Il associe le composant menu à la balise menu, et le composant footer à la balise footer
    * Il effectue ses bindings : titre, bindings du menu
1. Composant menu appliqué par angulago
    * Il effectue une requête afin d'obtenir son contenu html
    * Le module angulago associe les composants selectLanguage et selectCurrencies à leurs balises respectives
    * Il effectue ses bindings à son contenu html, selectLanguage et selectCurrencies.
1. Composant selectLanguage appliqué par angulago
    * Il effectue une requête afin d'obtenir son contenu html
    * Il effectue une requête afin d'obtenir la liste des langues
    * Il effectue ses bindings : génération des options de la liste déroulante
1. Composant selectCurrencies appliqué par angulago
    * Il effectue une requête afin d'obtenir son contenu html
    * Il effectue une requête afin d'obtenir la liste des monnaies dans la langue appropriée
    * Il effectue ses bindings : génération des options de la liste déroulante
1. Composant footer appliqué par angulago
    * Il effectue une requête afin d'obtenir son contenu html
    * Le module version effectue un binding sur la version à afficher
1. Le module homepage : 
    * Il analyse l'URL, et comme il s'agit de son url il s'associe à la vue.
    * Il effectue une requête afin d'obtenir le contenu html de la page, et l'intègre à la vue
    * Il effectue une requête afin d'obtenir ses données de texte
    * Il associe le composant tripSearchForm à la balise tripSearchForm.
    * Il effectue ses bindings avec le composant tripSearchForm
1. Le composant tripSearchForm
    * Il effectue une requête afin d'obtenir son contenu html
    * Il effectue ses bindings à son contenu html

### Diagramme de séquence
[Diagramme de séquence (pdf)](./documentation/HomePageSequenceDiagram.pdf)

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
Il y a deux moments où il faut charger des données : lors de la création de la page et lors du changement de langue.

Il a été choisi que chaque module est responsable de charger ses traductions.
Cela permet d'éviter de charger les données de modules et de leurs composants non utilisés par la page,
sans devoir effectuer une requête par composant.
Les composants restent responsables de charger des données plus complexes qu'une simple traduction de texte.
C'est pourquoi le composant selectLanguage s'occupe de charger la liste des langues disponibles,
et le composant selectCurrency s'occupe de charger la liste des monnaies de la langue appropriée.

Les données à charger sont les suivantes :
* traductions du module angulago : chargées par le module angulago, mis à disposition des composants enfants en lecture seule
* traductions du module homepage : chargées par le module homepage, mis à disposition des composants enfants en lecture seule
* liste des langues : chargée par le composant selectLanguage, pas besoin de la recharger à un changement de langue
* liste des monnaies : chargée par le composant selectCurrency

A noter que le composant selectCurrency utilise la liste des monnaies qu'il a chargée pour afficher les monnaies disponibles,
mais qu'il utilise aussi les traductions classiques pour afficher ses autres textes.

#### Séquence lors du changement de langue
1. L'utilisateur sélectionne une nouvelle langue dans la liste déroulante.
1. Le composant selectLanguage, qui contient la lise déroulante, émet le message 'languageRequest' à ses parents, accompagné de la langue requise.
1. Le composant menu est un parent de selectLanguage, mais n'écoute pas ce message. Le module angulago, par contre, réagit au message.
1. Le module angulago effectue deux actions :
    * Il émet une requête XMLHttpRequest auprès du serveur pour obtenir son fichier de language, dans la langue requise.
    * Il broadcast le le message 'setLanguage', accompagné de la langue requise, à tous ses enfants.
1. La plupart des enfants ignorent le message, mais certains y réagissent :
    * Le module homepage émet une requête XMLHttpRequest auprès du serveur pour obtenir son fichier de language, dans la langue requise.
    * Le composant selectCurrencies émet une requête XMLHttpRequest auprès du serveur pour obtenir sa lise de monnaies, dans la langue requise.                     
1. Lorsque le module angulago reçoit ses traductions, il met à jour ses données de texte.
1. Le contenu du DOM est mis à jour pour respecter les nouvelles données, pour le module et ses enfants, qui ont accès en lecture aux données de texte du module.
1. De même pour le module homepage.
1. Le composant selectCurrencies met à jour sa liste de monnaies, qui est ensuite mise à jour dans le DOM. Il sélectionne après cela la monnaie par défaut associée au language.

### Diagramme de séquence
[Diagramme de séquence (pdf)](documentation/load%20languages%20sequence%20diagram.pdf) de chargement d'une langue.

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
