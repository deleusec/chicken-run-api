-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 18 déc. 2022 à 09:50
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chicken_run_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `chicken`
--

CREATE TABLE `chicken` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `weight` int(11) NOT NULL,
  `steps` int(11) NOT NULL DEFAULT 0,
  `is_running` tinyint(1) DEFAULT 0,
  `fk_farmyard_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chicken`
--

INSERT INTO `chicken` (`id`, `name`, `birthday`, `weight`, `steps`, `is_running`, `fk_farmyard_id`) VALUES
(1, 'Chicken 1', '2022-12-16 23:23:37', 3, 22, 0, 2),
(2, 'Chicken 3', '2022-12-16 22:23:37', 3, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `farmyard`
--

CREATE TABLE `farmyard` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `farmyard`
--

INSERT INTO `farmyard` (`id`, `name`) VALUES
(1, 'farmyard A'),
(2, 'farmyard B');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chicken`
--
ALTER TABLE `chicken`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_farmyard_id` (`fk_farmyard_id`);

--
-- Index pour la table `farmyard`
--
ALTER TABLE `farmyard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chicken`
--
ALTER TABLE `chicken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `farmyard`
--
ALTER TABLE `farmyard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `chicken`
--
ALTER TABLE `chicken`
  ADD CONSTRAINT `fk_farmyard_id` FOREIGN KEY (`fk_farmyard_id`) REFERENCES `farmyard` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
