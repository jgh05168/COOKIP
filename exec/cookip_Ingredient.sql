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
-- Table structure for table `Ingredient`
--

DROP TABLE IF EXISTS `Ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ingredient` (
  `ingredient_id` int NOT NULL AUTO_INCREMENT COMMENT '1',
  `ingredient_name` varchar(100) NOT NULL COMMENT '사과',
  `prep_ingredients` varchar(1000) DEFAULT NULL,
  `storage_method` varchar(1000) DEFAULT NULL,
  `purchase_tips` varchar(1000) DEFAULT NULL,
  `ingredient_recipe` varchar(1000) DEFAULT NULL,
  `img` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ingredient`
--

LOCK TABLES `Ingredient` WRITE;
/*!40000 ALTER TABLE `Ingredient` DISABLE KEYS */;
INSERT INTO `Ingredient` VALUES (1,'애호박',NULL,NULL,NULL,NULL,'/image/ingredient/item_1.jpg'),(2,'대파',NULL,NULL,NULL,NULL,'/image/ingredient/item_2.jpg'),(3,'청양고추',NULL,NULL,NULL,NULL,'/image/ingredient/item_3.jpg'),(4,'고추기름',NULL,NULL,NULL,NULL,'/image/ingredient/item_4.jpg'),(5,'고춧가루',NULL,NULL,NULL,NULL,'/image/ingredient/item_5.jpg'),(6,'국간장',NULL,NULL,NULL,NULL,'/image/ingredient/item_6.jpg'),(7,'순두부',NULL,NULL,NULL,NULL,'/image/ingredient/item_7.jpg'),(8,'표고버섯',NULL,NULL,NULL,NULL,'/image/ingredient/item_8.jpg'),(9,'양파',NULL,NULL,NULL,NULL,'/image/ingredient/item_9.jpg'),(10,'다시마 물',NULL,NULL,NULL,NULL,'/image/ingredient/item_10.jpg'),(11,'소금',NULL,NULL,NULL,NULL,'/image/ingredient/item_11.jpg'),(12,'맛술',NULL,NULL,NULL,NULL,'/image/ingredient/item_12.jpg'),(13,'다진 마늘',NULL,NULL,NULL,NULL,'/image/ingredient/item_13.jpg'),(14,'후춧가루',NULL,NULL,NULL,NULL,'/image/ingredient/item_14.jpg'),(15,'들기름',NULL,NULL,NULL,NULL,'/image/ingredient/item_15.jpg'),(16,'양념장',NULL,NULL,NULL,NULL,'/image/ingredient/item_16.jpg'),(17,'우유',NULL,NULL,NULL,NULL,'/image/ingredient/item_17.jpg'),(18,'마늘',NULL,NULL,NULL,NULL,'/image/ingredient/item_18.jpg'),(19,'생강',NULL,NULL,NULL,NULL,'/image/ingredient/item_19.jpg'),(20,'월계수잎',NULL,NULL,NULL,NULL,'/image/ingredient/item_20.jpg'),(21,'통후추',NULL,NULL,NULL,NULL,'/image/ingredient/item_21.jpg'),(22,'통삼겹살',NULL,NULL,NULL,NULL,'/image/ingredient/item_22.jpg'),(23,'차돌박이',NULL,NULL,NULL,NULL,'/image/ingredient/item_23.jpg'),(24,'두부',NULL,NULL,NULL,NULL,'/image/ingredient/item_24.jpg'),(25,'무',NULL,NULL,NULL,NULL,'/image/ingredient/item_25.jpg'),(26,'다시마 멸치 육수',NULL,NULL,NULL,NULL,'/image/ingredient/item_26.jpg'),(27,'다진마늘',NULL,NULL,NULL,NULL,'/image/ingredient/item_27.jpg'),(28,'된장',NULL,NULL,NULL,NULL,'/image/ingredient/item_28.jpg'),(29,'스파게티면',NULL,NULL,NULL,NULL,'/image/ingredient/item_29.jpg'),(30,'치킨스톡',NULL,NULL,NULL,NULL,'/image/ingredient/item_30.jpg'),(31,'베이컨',NULL,NULL,NULL,NULL,'/image/ingredient/item_31.jpg'),(32,'파슬리',NULL,NULL,NULL,NULL,'/image/ingredient/item_32.jpg'),(33,'달걀',NULL,NULL,NULL,NULL,'/image/ingredient/item_33.jpg'),(34,'꽃소금',NULL,NULL,NULL,NULL,'/image/ingredient/item_34.jpg'),(35,'파르미지아노레지아노 치즈',NULL,NULL,NULL,NULL,'/image/ingredient/item_35.jpg'),(36,'올리브유',NULL,NULL,NULL,NULL,'/image/ingredient/item_36.jpg'),(37,'한우 불고기 용',NULL,NULL,NULL,NULL,'/image/ingredient/item_37.jpg'),(38,'알배추',NULL,NULL,NULL,NULL,'/image/ingredient/item_38.jpg'),(39,'깻잎',NULL,NULL,NULL,NULL,'/image/ingredient/item_39.jpg'),(40,'청경채',NULL,NULL,NULL,NULL,'/image/ingredient/item_40.jpg'),(41,'팽이버섯',NULL,NULL,NULL,NULL,'/image/ingredient/item_41.jpg'),(42,'물',NULL,NULL,NULL,NULL,'/image/ingredient/item_42.jpg'),(43,'멸치',NULL,NULL,NULL,NULL,'/image/ingredient/item_43.jpg'),(44,'다시마',NULL,NULL,NULL,NULL,'/image/ingredient/item_44.jpg'),(45,'간장',NULL,NULL,NULL,NULL,'/image/ingredient/item_45.jpg'),(46,'식초',NULL,NULL,NULL,NULL,'/image/ingredient/item_46.jpg'),(47,'올리고당',NULL,NULL,NULL,NULL,'/image/ingredient/item_47.jpg'),(48,'설탕',NULL,NULL,NULL,NULL,'/image/ingredient/item_48.jpg'),(49,'다진양파',NULL,NULL,NULL,NULL,'/image/ingredient/item_49.jpg'),(50,'고추',NULL,NULL,NULL,NULL,'/image/ingredient/item_50.jpg'),(51,'땅콩',NULL,NULL,NULL,NULL,'/image/ingredient/item_51.jpg'),(52,'호두',NULL,NULL,NULL,NULL,'/image/ingredient/item_52.jpg'),(53,'복숭아',NULL,NULL,NULL,NULL,NULL),(54,'새우',NULL,NULL,NULL,NULL,NULL),(55,'연어',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:55
