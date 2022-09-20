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


-- Zrzut struktury bazy danych megak_courses
CREATE DATABASE IF NOT EXISTS `megak_courses` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `megak_courses`;

-- Zrzut struktury tabela megak_courses.courses
CREATE TABLE IF NOT EXISTS `courses` (
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `startedAt` date NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_courses.courses: ~3 rows (około)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` (`name`, `startedAt`) VALUES
	('angielski', '2022-01-06'),
	('MegaK', '2022-09-06'),
	('Zajavka', '2022-05-06');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;

-- Zrzut struktury tabela megak_courses.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `firstName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` tinyint(3) unsigned DEFAULT NULL,
  `addressStret` varchar(74) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_courses.students: ~16 rows (około)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `firstName`, `lastName`, `age`, `addressStret`, `createdAt`) VALUES
	('1', 'Jakub', 'K', 29, 'Warmińska', '0000-00-00 00:00:00'),
	('10', 'Cezary', 'G', 11, 'Siedlowa', '0000-00-00 00:00:00'),
	('11', 'Barnaba', 'W', 19, 'Smyczkowa', '0000-00-00 00:00:00'),
	('12', 'Marianna', 'B', 22, 'Gwiezdna', '0000-00-00 00:00:00'),
	('13', 'Patryk', 'G', 24, 'Browarna', '0000-00-00 00:00:00'),
	('14', 'Tester', 'Testowy', 25, 'Jakaś', '0000-00-00 00:00:00'),
	('2', 'Bartek', 'B', 30, 'Warmińska', '0000-00-00 00:00:00'),
	('3', 'Pawel', 'B', 40, 'Żołnierska', '0000-00-00 00:00:00'),
	('3d894d4a-2d53-11ed-9cad-50ebf64adf2b', 'Paweł', 'B', 42, 'Warszawa', '0000-00-00 00:00:00'),
	('4', 'Tester', 'Testowy', 25, 'Jakaś', '0000-00-00 00:00:00'),
	('5', 'Tester2', 'Testowy2', 35, 'Jakaś2', '0000-00-00 00:00:00'),
	('55c9cbc8-2d54-11ed-9cad-50ebf64adf2b', 'Kuba2', 'K', 12, 'Sezamkowa', '2022-09-05 21:52:54'),
	('6', 'Tester3', 'Testowy3', 35, 'Jakaś3', '0000-00-00 00:00:00'),
	('7', 'Tester4', 'Testowy4', 35, 'Jakaś4', '0000-00-00 00:00:00'),
	('8', 'Wiktor', 'B', 1, 'Sadowa', '0000-00-00 00:00:00'),
	('9', 'Bartek', 'C', 17, 'Sadowa', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Zrzut struktury tabela megak_courses.students_courses
CREATE TABLE IF NOT EXISTS `students_courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `studentId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `courseName` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_students_courses_courses` (`courseName`),
  KEY `FK_students_courses_students` (`studentId`),
  CONSTRAINT `FK_students_courses_courses` FOREIGN KEY (`courseName`) REFERENCES `courses` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_students_courses_students` FOREIGN KEY (`studentId`) REFERENCES `students` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli megak_courses.students_courses: ~0 rows (około)
/*!40000 ALTER TABLE `students_courses` DISABLE KEYS */;
INSERT INTO `students_courses` (`id`, `studentId`, `courseName`) VALUES
	(1, '11', 'MegaK'),
	(2, '14', 'Zajavka');
/*!40000 ALTER TABLE `students_courses` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
