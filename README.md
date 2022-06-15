# Projet TP Mediatheque

## Introduction

Ce projet réalisé en Angular permet d'afficher une liste de films et d'album de musique.

## Technologies

- Angular

- Bootstrap
## Ennoncé

Votre objectif est de créer une page qui liste les article, semblable à celle vu dans le cours.
Vous utiliserez le composant product-page, qui servira de composant parent. C'est lui qui contiendra les 
données des articles. Il appellera un composant enfant product-list dont la seule tâche sera de générer 
autant de cartes que nécessaire, en appellant le composant product-card. Les composants enfant lui 
n'auront AUCUNE logique : ils ne seront chargés que de l'affichage. ProductListComponent est chargé 
d'afficher le composant ProductCardComponent, qui lui affiche les informations de l'article.
Vous aurez donc 3 composants à réaliser.
Concernant le style, vous êtes libres ! Essayez de faire quelque chose d'un minimum présentable, car nous 
allons beaucoup travailler sur ce projet !

## Guide d'utilisation

Cloner le projet sur votre machine

`git clone https://github.com/Christophe-Vasseur/mediatheque`

Installation des dépendances

`npm install`

Lancement du serveur

`ng serve -o`
