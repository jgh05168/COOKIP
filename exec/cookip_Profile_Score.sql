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
-- Table structure for table `Profile_Score`
--

DROP TABLE IF EXISTS `Profile_Score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profile_Score` (
  `recipe_id` int NOT NULL COMMENT '1',
  `profile_id` int NOT NULL,
  `user_id` int NOT NULL,
  `score` int DEFAULT NULL COMMENT '3',
  PRIMARY KEY (`user_id`,`profile_id`,`recipe_id`),
  KEY `FK_Recipe_TO_Profile_Score_1` (`recipe_id`),
  KEY `FK_Users_Profile_TO_Profile_Score_1_idx` (`profile_id`),
  CONSTRAINT `FK_Recipe_TO_Profile_Score_1` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`recipe_id`),
  CONSTRAINT `FK_Users_Profile_TO_Profile_Score_1` FOREIGN KEY (`profile_id`) REFERENCES `Users_Profile` (`profile_id`),
  CONSTRAINT `FK_Users_Profile_TO_Profile_Score_2` FOREIGN KEY (`user_id`) REFERENCES `Users_Profile` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile_Score`
--

LOCK TABLES `Profile_Score` WRITE;
/*!40000 ALTER TABLE `Profile_Score` DISABLE KEYS */;
INSERT INTO `Profile_Score` VALUES (1,1,2,3),(2,1,2,4),(28,1,2,10),(3,2,2,2),(4,2,2,3),(5,2,2,3),(6,3,2,4),(7,4,2,5),(8,5,2,2);
/*!40000 ALTER TABLE `Profile_Score` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`samsung_ssafy`@`%`*/ /*!50003 TRIGGER `update_recipe_average_score_trigger` AFTER INSERT ON `Profile_Score` FOR EACH ROW BEGIN
    DECLARE avg_score DECIMAL(10, 3);
    -- 레시피 번호에 해당하는 점수의 평균 계산
    SELECT AVG(score) INTO avg_score FROM Profile_Score WHERE recipe_id = NEW.recipe_id;
    -- 평균 점수를 recipe 테이블에 업데이트
    UPDATE Recipe SET recipe_score = avg_score WHERE recipe_id = NEW.recipe_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`samsung_ssafy`@`%`*/ /*!50003 TRIGGER `update_recipe_average_score_trigger_update` AFTER UPDATE ON `Profile_Score` FOR EACH ROW BEGIN
    DECLARE avg_score DECIMAL(10, 3);
    -- 레시피 번호에 해당하는 점수의 평균 계산
    SELECT AVG(score) INTO avg_score FROM Profile_Score WHERE recipe_id = NEW.recipe_id;
    -- 평균 점수를 recipe 테이블에 업데이트
    UPDATE Recipe SET recipe_score = avg_score WHERE recipe_id = NEW.recipe_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`samsung_ssafy`@`%`*/ /*!50003 TRIGGER `update_recipe_average_score_trigger_delete` AFTER DELETE ON `Profile_Score` FOR EACH ROW BEGIN
    DECLARE avg_score DECIMAL(10, 3);
    -- 레시피 번호에 해당하는 점수의 평균 계산
    SELECT AVG(score) INTO avg_score FROM Profile_Score WHERE recipe_id = OLD.recipe_id;
    -- 평균 점수를 recipe 테이블에 업데이트
    UPDATE Recipe SET recipe_score = avg_score WHERE recipe_id = OLD.recipe_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:53
