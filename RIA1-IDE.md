# Environnement de développement



### Introduction

Cette documentation concerne l'installation de l'environnement de développement choisie par notre équipe. Nous expliquons aussi notre choix.



### Choix de l'IDE

Nous avions plusieurs possibilités concernant le choix de l'IDE. Les différentes possibilités étaient :
- WebStorm
- Atom
- Visual Code
- Sublim Text

Tous les IDE/Éditeur de texte sont efficace avec le framework (Angular) qu'on va utiliser. Au final, notre choix c'est porté sur WebStorm pour la simple raison que notre équipe est habitué sur l'IDE PHPStorm. D'autant plus que la navigation et les raccourcis sur les produits JetBrain rende le développement plus fluide. D'autant plus que l'IDE nous permet de créer des projets template sous Angular facilement (AngularJS ou Angular-CLI). La seule contrainte est que WebStorm est payant mais en tant qu'étudiant (ainsi que les enseignants), nous bénéficions d'une version gratuite complète.



### Installation de l'IDE (WebStorm)

Pour télécharger l'exécutable, se rendre sur [https://www.jetbrains.com/webstorm/](IntelliJ IDEA WebStorm). La version qui sera installée est la 2019.3.2  Procéder à une installation de base (les cases à cocher sont suivant les envies de l'utilisateur). Une fois l'installation effectuée, lancez l'application et choisissez le thème pour l'IDE. L'application vous demande si vous souhaitez installer des plugins. Dans notre cas, ce n'est pas nécessaire donc vous pouvez passer à la suite. Vous avez ensuite la possibilité de créer un nouveau projet. 



### Intégration du framework

Avant de lancer un projet, vous devez installer [Node.JS](https://nodejs.org/en/) qui contient les commandes npm nécessaire pour faire des tests sur un serveur local. Laissez tout comme c'est mais cochez la case pour les "Tools for Native Modules" et lancez l'installation. Une fois que les installations sont terminées, nous pouvons créer un projet sur WebStorm. Pour créer un projet Angular, vous pouvez simplement choisir "AngularJS" quand vous faites un nouveau projet. Webstorm va ensuite nous créer un projet avec les fichiers nécessaire. 



### Validation

Pour vérifier que le projet est fonctionnel, on va lancer le serveur. Pour faire cela, lancez un invité de commande (de préférence Cmder) et rendez vous dans votre dossier de projet. Une fois dans le dossier, lancez la commande suivante :

```
npm start
```

Si tout se passe bien, à la fin des opérations vous devriez avoir l'adresse "http://localhost:8000" qui permet d'accéder au site. Si une vue partielle est affichée avec la version de l'application seed de Angular, tout est fonctionnel.





