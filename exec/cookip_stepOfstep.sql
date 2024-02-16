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
-- Table structure for table `stepOfstep`
--

DROP TABLE IF EXISTS `stepOfstep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stepOfstep` (
  `stepOfstep_id` int NOT NULL AUTO_INCREMENT,
  `step` int NOT NULL,
  `recipe_id` int NOT NULL COMMENT '레시피는 id로 구분된다',
  `ingredient_id` int NOT NULL COMMENT '1',
  `stepOfstep_tip` varchar(100) DEFAULT NULL,
  `tip_img` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`stepOfstep_id`,`step`,`recipe_id`,`ingredient_id`),
  KEY `FK_step_TO_stepOfstep_1` (`step`),
  KEY `FK_step_TO_stepOfstep_2` (`recipe_id`),
  KEY `FK_Ingredient_TO_stepOfstep_1` (`ingredient_id`),
  CONSTRAINT `FK_Ingredient_TO_stepOfstep_1` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredient` (`ingredient_id`),
  CONSTRAINT `FK_step_TO_stepOfstep_1` FOREIGN KEY (`step`) REFERENCES `step` (`step`),
  CONSTRAINT `FK_step_TO_stepOfstep_2` FOREIGN KEY (`recipe_id`) REFERENCES `step` (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stepOfstep`
--

LOCK TABLES `stepOfstep` WRITE;
/*!40000 ALTER TABLE `stepOfstep` DISABLE KEYS */;
INSERT INTO `stepOfstep` VALUES (1,1,28,3,'다음과 같이 편썰어주세요.','/image/stepofstep/28/28-1-1.gif'),(1,2,28,1,'면을 삶을 때 치킨 스톡을 함께 넣고 삶으면 면에 간이 베어들어 추후 간을 조절할 때 좋습니다.','/image/stepofstep/28/28-2-1.gif'),(1,3,28,3,'올리브유는 가열점이 낮아 금방 타버리니 저온에서 마늘을 서서히 익혀주세요. 어느정도 마늘이 익으면 양파를 넣어주세요. 양파는 투명해질 때까지 볶아주세요.','/image/stepofstep/28/28-3-1.gif'),(1,4,28,11,'달걀 노른자와 치즈는 가열하게 되면 익어버리게 됩니다. 파스타에 잘 어우러지게 불을 끄고 팬을 던져주며 내용물들로 하여금 공기와 마찰을 발생 시킵니다.','/image/stepofstep/28/28-4-1.gif'),(2,1,28,13,'다음과 같이 손으로 찢어주세요.','/image/stepofstep/28/28-1-2.gif'),(2,3,28,1,'면을 삶으면서 나오는 전분은 만테까레할 때 사용합니다. 면을 삶은 후 면수를 버리지 않고 따로 담아두세요.','/image/stepofstep/28/28-3-2.gif'),(3,1,28,2,'다음과 같이 채썰어주세요.','/image/stepofstep/28/28-1-3.gif'),(4,1,28,4,'다음과 같이 잘게 썰어주세요.','/image/stepofstep/28/28-1-4.gif');
/*!40000 ALTER TABLE `stepOfstep` ENABLE KEYS */;
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
