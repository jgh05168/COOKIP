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
-- Table structure for table `recipe_ingredientunit`
--

DROP TABLE IF EXISTS `recipe_ingredientunit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_ingredientunit` (
  `recipe_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `quantity` varchar(100) DEFAULT NULL,
  `unit` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`recipe_id`,`ingredient_id`),
  KEY `FK_Ingredient_TO_recipe_ingredientunit_1` (`ingredient_id`),
  CONSTRAINT `FK_Ingredient_TO_recipe_ingredientunit_1` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredient` (`ingredient_id`),
  CONSTRAINT `FK_Recipe_TO_recipe_ingredientunit_1` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredientunit`
--

LOCK TABLES `recipe_ingredientunit` WRITE;
/*!40000 ALTER TABLE `recipe_ingredientunit` DISABLE KEYS */;
INSERT INTO `recipe_ingredientunit` VALUES (1,1,'1/4','개'),(1,2,'1/3','개'),(1,3,'1','개'),(1,4,'2','큰술'),(1,5,'1/4','개'),(1,6,'1/4','개'),(1,7,'1','봉'),(1,8,'2','개'),(1,9,'1/4','개'),(1,10,'3','컵'),(1,11,'1/2','작은술'),(1,12,'1/4','개'),(1,13,'1/4','개'),(2,1,'1','개'),(3,1,'1','개'),(4,1,'1','개'),(5,1,'1','개'),(6,1,'1','개'),(7,1,'1','개'),(8,1,'1','개'),(9,1,'1','개'),(10,1,'1','개'),(11,1,'1','개'),(12,1,'1','개'),(13,1,'1','개'),(14,1,'1','개'),(15,1,'1','개'),(16,1,'1','개'),(17,1,'1','개'),(18,1,'1','개'),(19,1,'1','개'),(20,1,'1','개'),(26,8,'2','g'),(26,11,NULL,'약간'),(26,14,NULL,'약간'),(26,17,'500','ml'),(26,18,'5','쪽'),(26,19,'1','쪽'),(26,20,'2','장'),(26,21,NULL,'약간'),(27,1,'0.5','개'),(27,2,'0.5','개'),(27,3,'1','개'),(27,5,'0.5','작은술'),(27,8,'2','개'),(27,9,'0.5','개'),(27,12,'1','큰술'),(27,13,'1','큰술'),(27,14,NULL,'약간'),(27,23,'150','g'),(27,24,'1','개'),(27,25,'50','g'),(27,26,'2.5','컵'),(27,28,'2','큰술'),(28,9,'30','g'),(28,11,NULL,'약간'),(28,14,NULL,'약간'),(28,18,'1','개'),(28,29,'100','g'),(28,30,'200','ml'),(28,31,'70','g'),(28,32,NULL,'약간'),(28,33,'2','개'),(28,34,NULL,'약간'),(28,35,NULL,'약간'),(28,36,'1','큰술');
/*!40000 ALTER TABLE `recipe_ingredientunit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:50
