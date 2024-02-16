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
-- Table structure for table `Recipe`
--

DROP TABLE IF EXISTS `Recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Recipe` (
  `recipe_id` int NOT NULL AUTO_INCREMENT COMMENT '레시피는 id로 구분된다',
  `category_id` int NOT NULL,
  `profile_id` int NOT NULL,
  `user_id` int NOT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `thumbnail` varchar(1000) DEFAULT NULL,
  `url` varchar(1000) DEFAULT NULL,
  `difficulty` varchar(20) DEFAULT NULL,
  `time` int DEFAULT NULL,
  `recipe_score` float DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`recipe_id`,`category_id`,`profile_id`,`user_id`),
  KEY `FK_Category_TO_Recipe_1` (`category_id`),
  KEY `FK_Users_Profile_TO_Recipe_2` (`user_id`),
  KEY `FK_Users_Profile_TO_Recipe_1` (`profile_id`),
  CONSTRAINT `FK_Category_TO_Recipe_1` FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`),
  CONSTRAINT `FK_Users_Profile_TO_Recipe_1` FOREIGN KEY (`profile_id`) REFERENCES `Users_Profile` (`profile_id`),
  CONSTRAINT `FK_Users_Profile_TO_Recipe_2` FOREIGN KEY (`user_id`) REFERENCES `Users_Profile` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recipe`
--

LOCK TABLES `Recipe` WRITE;
/*!40000 ALTER TABLE `Recipe` DISABLE KEYS */;
INSERT INTO `Recipe` VALUES (1,1,2,2,'순두부찌개','/image/main_recipe/recipe_1.jpg',NULL,'easy',40,3,''),(2,1,2,2,'고추장 불고기','/image/main_recipe/recipe_2.jpg',NULL,'easy',30,4,NULL),(3,1,2,2,'해물 누룽지탕','/image/main_recipe/recipe_3.jpg',NULL,'easy',40,2,NULL),(4,1,2,2,'짜투리 부대찌개','/image/main_recipe/recipe_4.jpg',NULL,'easy',30,3,NULL),(5,1,2,2,'파래김치','/image/main_recipe/recipe_5.jpg',NULL,'normal',30,3,NULL),(6,1,2,2,'닭가슴살 동그랑땡','/image/main_recipe/recipe_6.jpg',NULL,'easy',30,4,NULL),(7,1,2,2,'구운양파 샌드위치','/image/main_recipe/recipe_7.jpg',NULL,'easy',20,5,NULL),(8,1,2,2,'쇠고기 미역국','/image/main_recipe/recipe_8.jpg',NULL,'normal',40,2,NULL),(9,1,2,2,'잣죽','/image/main_recipe/recipe_9.jpg',NULL,'easy',40,NULL,NULL),(10,1,2,2,'늙은 호박전','/image/main_recipe/recipe_10.jpg',NULL,'easy',20,NULL,NULL),(11,3,2,2,'토마토 스파게티','/image/main_recipe/recipe_11.jpg',NULL,'easy',25,NULL,NULL),(12,2,2,2,'튀기지 않은 모둠 깐풍기','/image/main_recipe/recipe_12.jpg',NULL,'hard',40,NULL,NULL),(13,3,2,2,'와인소스 함박스테이크','/image/main_recipe/recipe_13.jpg',NULL,'hard',40,NULL,NULL),(14,3,2,2,'크리스마스 생크림 케이크','/image/main_recipe/recipe_14.jpg',NULL,'normal',45,NULL,NULL),(15,3,2,2,'LA갈비','/image/main_recipe/recipe_15.jpg',NULL,'hard',50,NULL,NULL),(16,2,2,2,'홈메이드 짬뽕','/image/main_recipe/recipe_16.jpg',NULL,'normal',35,NULL,NULL),(17,1,2,2,'매콤한 김치말이김밥','/image/main_recipe/recipe_17.jpg',NULL,'easy',20,NULL,NULL),(18,4,2,2,'매콤한 쭈꾸미덮밥','/image/main_recipe/recipe_18.jpg',NULL,'easy',25,NULL,NULL),(19,1,2,2,'자장라이스, 자장면','/image/main_recipe/recipe_19.jpg',NULL,'normal',30,NULL,NULL),(20,3,2,2,'실타래 초콜릿','/image/main_recipe/recipe_20.jpg',NULL,'normal',25,NULL,NULL),(21,3,2,2,'웨지감자.','/image/main_recipe/recipe_21.png',NULL,'easy',35,NULL,NULL),(22,1,2,2,'감자구이 오믈렛','/image/main_recipe/recipe_22.jpg',NULL,'easy',25,NULL,NULL),(23,4,2,2,'귤 초밥','/image/main_recipe/recipe_23.png',NULL,'hard',30,NULL,NULL),(24,4,2,2,'연어스테이크','/image/main_recipe/recipe_24.jpg',NULL,'hard',40,NULL,NULL),(25,4,2,2,'오뎅탕 ','/image/main_recipe/recipe_25.jpg',NULL,'easy',25,NULL,NULL),(26,1,2,2,'우유 수육','/image/main_recipe/recipe_26.png',NULL,'easy',70,NULL,NULL),(27,1,2,2,'차돌박이 된장찌개','/image/main_recipe/recipe_27.jpg','','easy',40,3,'한국의 전통적인 찌개 요리 중 하나인 된장찌개와 차돌박이를 사용해 끓인 요리입니다.'),(28,1,2,2,'까르보나라','/image/main_recipe/recipe_28.jpg','','easy',20,10,'파스타 요리 중 하나로 크림소스를 사용하지 않고 계란과 파마산 치즈로 진한 크림같은 맛을 갖고있습니다.'),(29,1,2,2,'밀푀유나베','/image/main_recipe/recipe_29.jpg',NULL,'normal',30,3,'일본 요리 중 하나로,  전통적인 뚝배기 요리입니다. 닭고기, 채소, 버섯 등 육수에 끓여내며, 매운맛과 감칠맛이 어우러진 특징을 가지고 있으며, 겨울철에 인기 있는 요리입니다.');
/*!40000 ALTER TABLE `Recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:33:00
