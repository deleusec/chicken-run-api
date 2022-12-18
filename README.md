# API Chicken Run

API réalisé avec le framework Express et une base de donnée MySQL.
Base de donnée en local, fichier sql présent dans le dossier "/src".


Voici ci-dessous le modèle conceptuel et logique des données de la base de donnée.

![bdd_model.png](src/bdd_model.png)

Lancer le serveur avec les commandes 
```
node index.js
```
OU
```
nodemon
```

___

API testé avec Insomnia

![img.png](src/insomnia_screen.png)


Les Opérations CRUD présentes sont GET, POST, PUT 

Pour tester l'api 
```
http://localhost:3000/api/chickens
```

Pour tester la fonctionnalité chicken run
```
http://localhost:3000/api/chickens/:id/run
```

OU (fonctionne sur le premier élément de la base)
```
http://localhost:3000/api/chickens/run
```
