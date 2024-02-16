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
-- Table structure for table `Profile_Favorite_Recipe`
--

DROP TABLE IF EXISTS `Profile_Favorite_Recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profile_Favorite_Recipe` (
  `recipe_id` int NOT NULL COMMENT '1',
  `profile_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`recipe_id`,`profile_id`,`user_id`),
  KEY `FK_Recipe_TO_Profile_Favorite_Recipe_1_idx` (`recipe_id`),
  KEY `FK_Users_Profile_TO_Profile_Favorite_Recipe2_idx` (`user_id`),
  KEY `FK_Users_Profile_TO_Profile_Favorite_Recipe1_idx` (`profile_id`),
  CONSTRAINT `FK_Recipe_TO_Profile_Favorite_Recipe_1` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`recipe_id`),
  CONSTRAINT `FK_Users_Profile_TO_Profile_Favorite_Recipe1` FOREIGN KEY (`profile_id`) REFERENCES `Users_Profile` (`profile_id`),
  CONSTRAINT `FK_Users_Profile_TO_Profile_Favorite_Recipe2` FOREIGN KEY (`user_id`) REFERENCES `Users_Profile` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile_Favorite_Recipe`
--

LOCK TABLES `Profile_Favorite_Recipe` WRITE;
/*!40000 ALTER TABLE `Profile_Favorite_Recipe` DISABLE KEYS */;
INSERT INTO `Profile_Favorite_Recipe` VALUES (1,1,2),(2,1,2),(3,2,2),(4,2,2),(5,3,2),(6,3,2),(7,4,2),(8,4,2),(9,5,2),(10,5,2);
/*!40000 ALTER TABLE `Profile_Favorite_Recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:53
