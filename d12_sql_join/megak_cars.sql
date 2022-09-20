-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               10.6.9-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Zrzut struktury bazy danych megak_cars
CREATE DATABASE IF NOT EXISTS `megak_cars` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `megak_cars`;

-- Zrzut struktury tabela megak_cars.cars
CREATE TABLE IF NOT EXISTS `cars` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `registrationNo` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(67) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(13,2) DEFAULT NULL,
  `firstRegistrationAt` date NOT NULL,
  `placeId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_cars_place` (`placeId`),
  CONSTRAINT `FK_cars_place` FOREIGN KEY (`placeId`) REFERENCES `place` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_cars.cars: ~3 rows (około)
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` (`ID`, `registrationNo`, `brand`, `model`, `color`, `price`, `firstRegistrationAt`, `placeId`) VALUES
	(1, 'WML11135', 'Volvo', 'C30', 'silver metalic', 15000.20, '2022-08-31', 'c8a5614d-2f8e-11ed-9cad-50ebf64adf2b'),
	(2, 'DW1001A', 'BMW', 'e46', 'red metalic', 100000.00, '2022-09-05', '21f8a26b-2f8a-11ed-9cad-50ebf64adf2b'),
	(3, 'SJZ442H', 'BMW', 'x5', 'myBlack', 355000.80, '2022-01-05', '21f8a26b-2f8a-11ed-9cad-50ebf64adf2b');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;

-- Zrzut struktury tabela megak_cars.place
CREATE TABLE IF NOT EXISTS `place` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `address` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_cars.place: ~1 rows (około)
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` (`id`, `address`, `area`) VALUES
	('21f8a26b-2f8a-11ed-9cad-50ebf64adf2b', 'ul. Jakaś tam, 00-000 Warszawa', 100.50),
	('c8a5614d-2f8e-11ed-9cad-50ebf64adf2b', 'ul. Również jakaś, 44-335 Jastrzębie-Zdrój', 50.25);
/*!40000 ALTER TABLE `place` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
