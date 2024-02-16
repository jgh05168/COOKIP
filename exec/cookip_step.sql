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
-- Table structure for table `step`
--

DROP TABLE IF EXISTS `step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step` (
  `step` int NOT NULL AUTO_INCREMENT,
  `recipe_id` int NOT NULL COMMENT '레시피는 id로 구분된다',
  `method` varchar(1000) DEFAULT NULL COMMENT '1.감자 체썰기 2.당근 볶기',
  `cook_tool` varchar(1000) DEFAULT NULL COMMENT '1.사진 2.사진',
  `ingredient` varchar(1000) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`step`,`recipe_id`),
  KEY `FK_Recipe_TO_step_1` (`recipe_id`),
  CONSTRAINT `FK_Recipe_TO_step_1` FOREIGN KEY (`recipe_id`) REFERENCES `Recipe` (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step`
--

LOCK TABLES `step` WRITE;
/*!40000 ALTER TABLE `step` DISABLE KEYS */;
INSERT INTO `step` VALUES (1,1,'양파는 채를 썰어주세요. \n애호박은 먹기 좋게 나박 썰고 \n청양고추와 대파는 어슷하게 썰어주세요. \n표고는 채를 썰어주세요.','도마,칼','섯양파, 애호박 청양고추, 대파, 표고버섯',NULL),(1,26,'달군 팬에 오일을 두르고 통삼겹살을 올려주세요. 소금과 후춧가루를 뿌린 후 겉면을 바삭하게 구워주세요.','화구,팬','일소금,후춧가루,오일',NULL),(1,27,'차돌박이는 2등분으로 자르고 키친 타올에 올려 핏물을 빼주세요.',NULL,NULL,'재료 손질하기 - 고기'),(1,28,'양파와 마늘을 썰어주고 페퍼론치노를 준비해주세요. 베이컨은 잘게 썰어주세요.',NULL,NULL,'재료 손질하기'),(2,1,'볼에 양념 재료를 넣어주세요.','저계량도구,수저','름소금, 고춧가루, 맛술, 국간장, 다진마늘, 후춧가루, 들기름',NULL),(2,26,'냄비에 통삼겹살과 우유, 마늘, 생강, 월계수잎, 통후추를 넣어주세요.','화구,냄비','추우유, 마늘, 생강, 월계수잎,통후추',NULL),(2,27,'무, 표고, 양파, 두부는 한 입 크기로 썰고 애호박은 반달 모양으로 썰어주세요. 대파, 고추는 송송 썰어주세요.',NULL,NULL,'재료 손질하기 - 야채'),(2,28,'팬에 치킨스톡을 넣고 물을 끓인 후 스파게티 면을 5분간 삶아주세요.',NULL,NULL,'조리 준비하기'),(3,1,'냄비에 고추기름과 대파 반을 넣고 \n중약불에서 달달 볶다가 파 향이 올라오면 양파를 넣어 볶아주세요.','화구, 냄비, 요리용 수저','파고추기름, 대파, 양파',NULL),(3,26,'30분 정도 중불로 끓이다가 고기를 뒤집은 후 중약불로 줄여 30분 정도 더 삶아주세요.','화구, 냄비',NULL,NULL),(3,27,'냄비에 차돌박이와 고기양념을 넣고 중약불에서 볶다가 기름이 나오면 무를 넣고 1분 정도 볶아주세요.',NULL,NULL,'조리 시작하기'),(3,28,'올리브유를 충분히 두른 팬에 베이컨과 양파와 마늘을 볶아주세요. 양파와 마늘을 볶은 팬에 면수와 면을 넣고 면수의 양이 반으로 줄어들 때까지 계속 비벼주세요.',NULL,NULL,'조리하기'),(4,1,'다시마물을 붓고 \n양념장과 애호박과 표고버섯을 넣고 \n약 5분 이후 순두부를 넣고 끓여주세요.','화구, 냄비, 요리용 수저','장다시다 물, 애호박, 순두부, 양념장',NULL),(4,26,'완성된 우유 수육을 먹기 좋게 썰어 맛있게 즐겨주세요.',NULL,NULL,NULL),(4,27,'냄비에 다시마 멸치육수와 된장을 넣고 끓여주세요.',NULL,NULL,'조리하기 (1) 기본 육수 만들기'),(4,28,'불을 끄고 달걀을 넣어 면과 잘 비빈 후 그라나 파다노 치즈, 파슬리, 후추를 올려 마무리합니다.',NULL,NULL,'조리 마무리하기'),(5,1,'마지막에 청양고추와 대파를 넣고 한소끔\n 끓여 맛있게 즐겨주세요.\n(tip 소금을 가감해서 간을 조절해 주세\n요.)','화구, 냄비, 요리용 수저','청양고추, 대파',NULL),(5,27,'무가 익으면 표고버섯과 양파, 애호박을 넣어 3분 정도 끓이고 두부와 다진마늘, 고춧가루를 넣고 끓여주세요.',NULL,NULL,'조리하기 (2) 야채 넣기'),(6,27,'마지막에 대파, 홍고추, 청고추를 넣고 한소끔 더 끓여주세요.',NULL,NULL,'조리 마무리하기');
/*!40000 ALTER TABLE `step` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-16 11:32:59
