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
-- Table structure for table `Clear_Cardinality`
--

DROP TABLE IF EXISTS `Clear_Cardinality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Clear_Cardinality` (
  `recipe_id` int NOT NULL,
  `user_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`ingredient_id`,`recipe_id`),
  KEY `FK_Recipe_TO_Clear_Cardinality_1` (`recipe_id`),
  KEY `FK_Ingredient_Availble_TO_Clear_Cardinality_2` (`ingredient_id`),
  CONSTRAINT `FK_Ingredient_Availble_TO_Clear_Cardinality_1` FOREIGN KEY (`user_id`) REFERENCES `Ingredient_Availble` (`user_id`),
  CONSTRAINT `FK_Ingredient_Availble_TO_Clear_Cardinality_2` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredient_Availble` (`ingredient_id`),
  CONSTRAINT `FK_Recipe_TO_Clear_Cardinality_1` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clear_Cardinality`
--

LOCK TABLES `Clear_Cardinality` WRITE;
/*!40000 ALTER TABLE `Clear_Cardinality` DISABLE KEYS */;
/*!40000 ALTER TABLE `Clear_Cardinality` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:51
