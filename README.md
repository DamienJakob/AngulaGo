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

## Structure de fichiers
```
app/                  --> fichiers sources de l'application
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
  app.css             --> feuille de style    
  app.js              --> module principal de l'application, avec contrôleur et configuration
  index.html              --> layout de l'application
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```
## Structure de l'application
### Modules
### Composants
### Vues

## Chargement
### Pas de lazy loading
### Données
#### Structure des données

## Comportement responsive
