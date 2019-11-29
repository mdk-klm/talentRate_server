# Welcome to talentRate_server !
**Talent rate server** is a restfull API 


# Initialisation
- Clone project
- run npm install

## run server

node server.js

## Database
~~~~
-- phpMyAdmin SQL Dump

-- version 4.9.1

-- https://www.phpmyadmin.net/

--

-- Hôte : localhost

-- Généré le : ven. 29 nov. 2019 à 12:07

-- Version du serveur : 8.0.18-0ubuntu0.19.10.1

-- Version de PHP : 7.3.11-0ubuntu0.19.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET AUTOCOMMIT = 0;

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;
--

-- Base de données : `talentTrate`
--

-- Structure de la table `parcours_pedagogique`

CREATE TABLE `parcours_pedagogique` (

`id` int(10) UNSIGNED NOT NULL,

`nom` varchar(100) NOT NULL COMMENT 'Nom du parcours pédagogique'

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Liste des parcours pédagogique' KEY_BLOCK_SIZE=1;
--

-- Déchargement des données de la table `parcours_pedagogique`

INSERT INTO `parcours_pedagogique` (`id`, `nom`) VALUES

(2, 'Angular'),

(1, 'php'),

(3, 'prout');
-

-- Structure de la table `promotion`
--
CREATE TABLE `promotion` (

`id` int(10) UNSIGNED NOT NULL,

`nom` varchar(100) NOT NULL,

`parcours_pedagogique_id` int(10) UNSIGNED NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Liste des étudiants pour un parcours et une années';
--

-- Déchargement des données de la table `promotion`
INSERT INTO `promotion` (`id`, `nom`, `parcours_pedagogique_id`) VALUES

(1, 'hoc 2019', 1);
--

-- Index pour les tables déchargées
--

-- Index pour la table `parcours_pedagogique`

--

ALTER TABLE `parcours_pedagogique`

ADD PRIMARY KEY (`id`),

ADD UNIQUE KEY `id_UNIQUE` (`id`),

ADD UNIQUE KEY `nom_UNIQUE` (`nom`);
--

-- Index pour la table `promotion`

--

ALTER TABLE `promotion`

ADD PRIMARY KEY (`id`),

ADD UNIQUE KEY `id_UNIQUE` (`id`),

ADD UNIQUE KEY `nom_UNIQUE` (`nom`),

ADD KEY `FK_parcourt_pedagogique_id_idx` (`parcours_pedagogique_id`);
--

-- AUTO_INCREMENT pour les tables déchargées
--

-- AUTO_INCREMENT pour la table `parcours_pedagogique`

--

ALTER TABLE `parcours_pedagogique`

MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--

-- AUTO_INCREMENT pour la table `promotion`

--

ALTER TABLE `promotion`

MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--

-- Contraintes pour les tables déchargées

--

-- Contraintes pour la table `promotion`

--

ALTER TABLE `promotion`

ADD CONSTRAINT `FK_parcourt_pedagogique_id` FOREIGN KEY (`parcours_pedagogique_id`) REFERENCES `parcours_pedagogique` (`id`);

Les routes présentes : Create, Read, Update, Delete pour les tables promotion et parcours_pedagogique.

COMMIT;
~~~~
