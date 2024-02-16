-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: i10c101.p.ssafy.io    Database: cookip
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Ingredient_Availble`
--

DROP TABLE IF EXISTS `Ingredient_Availble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ingredient_Availble` (
  `user_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `ingredient name` varchar(100) DEFAULT NULL,
  `expiration_data` int DEFAULT NULL COMMENT '5일 또는 날짜',
  PRIMARY KEY (`user_id`,`ingredient_id`),
  KEY `FK_Ingredient_TO_Ingredient_Availble_1` (`ingredient_id`),
  CONSTRAINT `FK_Ingredient_TO_Ingredient_Availble_1` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredient` (`ingredient_id`),
  CONSTRAINT `FK_User_TO_Ingredient_Availble_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredient_Availble`
--

LOCK TABLES `Ingredient_Availble` WRITE;
/*!40000 ALTER TABLE `Ingredient_Availble` DISABLE KEYS */;
INSERT INTO `Ingredient_Availble` VALUES (1,1,'1',1),(1,2,'1',1),(1,3,'1',1),(1,21,'1',1),(1,22,'1',1),(2,1,'2',3),(2,2,'3',3),(2,3,'4',3),(2,4,'5',3),(2,5,'5',3),(2,6,'sd',3),(2,7,'se',3),(2,8,'gs',3),(2,9,'g',3),(2,10,'esg',3),(2,11,'srg',3),(2,12,'r',3),(2,13,'gs',3),(2,14,'erg',3),(2,15,'er',3),(2,16,'g',3),(2,17,'erg',3),(2,18,'erg',3),(2,19,'erg',3),(2,20,'we',3),(2,21,'ewf',3),(2,22,'weg',3);
/*!40000 ALTER TABLE `Ingredient_Availble` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:54
