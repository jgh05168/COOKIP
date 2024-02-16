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
-- Table structure for table `Users_Profile`
--

DROP TABLE IF EXISTS `Users_Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users_Profile` (
  `profile_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `profile_name` varchar(100) NOT NULL,
  `profile_nickname` varchar(100) DEFAULT NULL,
  `profile_face` varchar(1000) DEFAULT NULL,
  `profile_img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`profile_id`,`user_id`),
  KEY `idx_user_id` (`user_id`),
  CONSTRAINT `FK_User_TO_Users_Profile_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_Profile`
--

LOCK TABLES `Users_Profile` WRITE;
/*!40000 ALTER TABLE `Users_Profile` DISABLE KEYS */;
INSERT INTO `Users_Profile` VALUES (1,2,'임채진','cherry','../frontend/public/image/icj.jpg','../../../public/profile/profile_icj.png'),(2,1,'oo','oo',NULL,NULL),(2,2,'정구민','JGM','../frontend/public/image/jgm.jpg','../../../public/profile/profile_jgm.png'),(3,2,'선상범','SSB','../frontend/public/image/ssb.PNG','../../../public/profile/profile_ssb.png'),(4,2,'이윤형','LYH','../frontend/public/image/lyh.png','../../../public/profile/profile_lyh.png'),(5,2,'전규훈','파리바게트','../frontend/public/image/jgh.jpg','../../../public/profile/profile_jgh.png');
/*!40000 ALTER TABLE `Users_Profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:57
