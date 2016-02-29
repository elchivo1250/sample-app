-- MySQL dump 10.13  Distrib 5.6.23, for Linux (x86_64)
--
-- Host: localhost    Database: sumo_me
-- ------------------------------------------------------
-- Server version	5.6.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Answers`
--

DROP TABLE IF EXISTS `Answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `QuestionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `QuestionId` (`QuestionId`),
  CONSTRAINT `Answers_ibfk_1` FOREIGN KEY (`QuestionId`) REFERENCES `Questions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Answers`
--

LOCK TABLES `Answers` WRITE;
/*!40000 ALTER TABLE `Answers` DISABLE KEYS */;
INSERT INTO `Answers` VALUES (1,'aoeu',NULL,'2016-02-29 03:37:16','2016-02-29 03:37:16',1),(2,'uuu',NULL,'2016-02-29 03:37:24','2016-02-29 03:37:24',1),(3,'aaaaaa',NULL,'2016-02-29 03:37:27','2016-02-29 03:37:27',1),(4,'aaaaa',NULL,'2016-02-29 03:49:48','2016-02-29 03:49:48',2),(5,'oooo',NULL,'2016-02-29 03:49:52','2016-02-29 03:49:52',2),(6,'eeee',NULL,'2016-02-29 03:49:55','2016-02-29 03:49:55',2),(7,'aaaa',NULL,'2016-02-29 03:49:59','2016-02-29 03:49:59',3),(8,'oooo',NULL,'2016-02-29 03:50:02','2016-02-29 03:50:02',3),(9,'eeee',NULL,'2016-02-29 03:50:05','2016-02-29 03:50:05',3),(10,'aoeuu',NULL,'2016-02-29 03:50:08','2016-02-29 03:50:08',9),(11,'aoeu',NULL,'2016-02-29 03:50:12','2016-02-29 03:50:12',9),(12,'uuu',NULL,'2016-02-29 03:50:16','2016-02-29 03:50:16',9);
/*!40000 ALTER TABLE `Answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questions`
--

DROP TABLE IF EXISTS `Questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
INSERT INTO `Questions` VALUES (1,'What is your favorite color?','2016-02-29 02:47:17','2016-02-29 02:47:17'),(2,'What is your quest?','2016-02-29 02:50:01','2016-02-29 02:50:01'),(3,'What is your name?','2016-02-29 02:53:55','2016-02-29 02:53:55'),(9,'aoeu','2016-02-29 02:57:13','2016-02-29 02:57:13');
/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserAnswers`
--

DROP TABLE IF EXISTS `UserAnswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserAnswers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `AnswerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `AnswerId` (`AnswerId`),
  CONSTRAINT `UserAnswers_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `UserAnswers_ibfk_2` FOREIGN KEY (`AnswerId`) REFERENCES `Answers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserAnswers`
--

LOCK TABLES `UserAnswers` WRITE;
/*!40000 ALTER TABLE `UserAnswers` DISABLE KEYS */;
INSERT INTO `UserAnswers` VALUES (4,'2016-02-29 05:37:44','2016-02-29 05:37:44',1,10),(5,'2016-02-29 05:37:49','2016-02-29 05:37:49',1,2),(6,'2016-02-29 05:37:52','2016-02-29 05:37:52',1,7),(7,'2016-02-29 05:37:55','2016-02-29 05:37:55',1,5),(8,'2016-02-29 05:42:32','2016-02-29 05:42:32',3,3),(9,'2016-02-29 05:43:14','2016-02-29 05:43:14',3,10),(10,'2016-02-29 05:43:20','2016-02-29 05:43:20',3,5),(11,'2016-02-29 05:43:21','2016-02-29 05:43:21',3,9),(12,'2016-02-29 05:43:35','2016-02-29 05:43:35',4,7),(13,'2016-02-29 05:43:36','2016-02-29 05:43:36',4,3),(14,'2016-02-29 05:43:38','2016-02-29 05:43:38',4,11),(15,'2016-02-29 05:43:40','2016-02-29 05:43:40',4,5);
/*!40000 ALTER TABLE `UserAnswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(1024) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'elchivo','07d2cfd752ccc584fd67e6ef8ae8a1540a241b5450e1bd128d298532d545cdd18cf4c8ae937306d312070ea6885eeb2b44bab0f80724c5fd7bf97e2bdee63e83294cd7d29975dcf69fe890e027c209e5cf22fc3acff878e9509933d458a9575cfa96dea44146282ec1f7c38c9c9aa2f10cbac6d3371f19038dfe27eaef28a45603f571947d6b14248233c8f4890cd2232265851bd698a2876338f99430e4d134d566337e0b3163219ec671d69b0649dbc2f28fdcc7edceff80912d095af8acceb72bbe40c41d632a96b4ce53e18dd1bdb3bcf9927c953a0b0135befb38d38804a9cef945021eb35e45bbfbd89f0108f3b3b2691c07634592c36c5096bf9a98438384d776ad6016a1c1fc0e184ce2b701f8c97e2ef1b27493479619e66e0ee1ca4e84ac4e0b279fc193423e82505ebbe5cb92ab79e91c19ec7c56d52164692ad0d8e7ae1de4095d16508963ff9834f99e4242b3c9ee6253c4f1a049ba6ddad951f5b8b497b7f5b79b0b5245d7992466eccbb5092f734c768cb43cc7eb7685069e2b9efa5731769dd38187388460a1f2e26aea0d8c409d2938841fd43bd13443b7b1c8e0cb2b46c5952bcdfcf6514ae1e8e904043cb5fbb08a1093441f74cce6048bd14eda00528749a26f90e33815a1c156a1659997ec7916e864d8411bf6744b27d27da55dabebb0a4b1fdd784b44665371eb4f9871405936b07f5f66e185d30','4f563714717d6888d22ddc31a98dc868b1bf4b8ea7a159bcebb79854887f4699','admin','2016-02-28 19:38:15','2016-02-28 19:38:15'),(2,'user','f8fe9aaf91ab2e05ae7ed344232203972de342e6b3103af2e3adf9ac43ae76b7f4aea4ee02f9353ec2abd618f5201376b806d13f2d5105e0bdbf8dee08d49ad078bedaa1d5b6e0f9891a250eedf629e2f00f54b22209cee0f08c4e790478eeaffcd39f437f280739fed6a9af4fb27f78bb7b7e7798ab0c0e8dc71ecf91c44562f31ef4f01530a719f51c291e573aff3c39816e2ae916181d529b8a8b99a227e21e29b91313b6a29bd77646311e77f618c23e2435b5efe3feff687cf033c3b44175a241848b6b5f2c46c92299e4b6dddf26df8c88f5bd6b0e49acea57e8ab90302030ba9110a05a5bfac6fc6a7c7cb2076898a6944cb06b866633b9df549d35643ab0a3a4cbcfea182ba62ca62b6190ce0809d5858b5267200d5a4f12627072c2ea6c743fc0a505902bfa9da32d834f4fd10705f3ba2fce689896ce5fbbd58da14fef9987a50558a514c0acc707bb4c101fa2c238c55832204ef97934abb438707c6decfbebfdacfb8a42c6aceaafc66b13d479beea6ed26192c38ddb1f2c05268c97040edce84b301f46c1a5a6c69cf0e81c4a9dada7f8991c7ea60daa2c40473e864d5f733bd74653ab41c2ccff4528c4e9f1feeaed60078e0cee28037bb642b18012c60195a7bdd9eba627f7020221528608e6bce92593840515a3ff48d816282700162c503c535a61e6f398e9caf4c97a146b549441f441576a8063c440ef','3b1f10a87855aa806260df830f961d0cf2f5ccb1d3793891f7d510408952d018','user','2016-02-28 22:21:49','2016-02-28 22:21:50'),(3,'user2','58a8d60c8cd4e9147d61890d0887982fb469cbed245c49beda79f2175529bc5125c2d74858de588d75caadf3d4e295f3acd7268bf9a9800c1eb6d085ee17df7c9980b5c8f6c28e44c67374aec9f81288c400cbefb54a93ef8e7c3e83d383cf22e7bf139ebece89a955deb967e5ee29b8771ff4ee3a5909fd59530dce9d12d3b5e1ece8f8dfa3d7c20eecba1301af38eedf5afb045ef4208e895ad2293d12303edc0691382344fb7562ab5e6f37c08912efe52e1f37484a88806f33467521d33b529708616b76a24617f7afe3ef0b819a5fa43891f8f3a9e1b9787e003bd14d6f7a57de0dd9e2edff756c0d9095e7f51a5a59e46c9335602c1bd8eb89b77f818f6d3b67879708fcf3f8e01d1062487e9f2bb9d1a10b6c2cd8f21fe4d4ea886c988bee0346129569c5dc920b593562f38c34460394de67d668ff94b1350a6cbb2840ccd73341c75adc0ba217b8e476b3275befdafa20d6be643fee507520ef90d4774111389019d78bd11a65c1a78d4522a536865e9c3898ec4767f66e6a9a617d492ddd87c5e11b2c3a5e84b7a999b5a77028b399202fb9abfbb993b15fe3ec102ddd26971cd64130efce7f4081f1665c1f9027991f897af1b02c7b866467e6b0dc35e676c68841427f997b86d8de3aab019dab2d772d9d7fbdf655408184ab5fae3b2ede7b22063b5f445a4b2e79bfe700107aefe732f6f36c59e25169f58a00','0897f5c2393b0f321e231f74f7690e3d65929f73cbce3790fd9734914b377b8a','user','2016-02-29 02:33:13','2016-02-29 02:33:13'),(4,'user3','3bfde44e199f5037c391df756df3557c5fab410d50da8652dbd6e147a6307e9ea2f85bae1e41f13d2d08d2aaf4a93df0604d108fbf4365f0be0cf904212e2aa2c3aa223b175a291a08e895d2f831594e72ec38a41053d38affcd58fab99b79895c875ac2b26423d5f8761189e0c1fcd5325f316338e257c1aee39c872efa2e1aeb97ab1d135f417689365ce4be8230dc01a72cb2ce9495058dc42831dc5db29ede690e61019fce23df928247644f5e912c9492d29908ca54547686e9d56a1a6de4c77242a2c8970432115e93479a283739aeacb0d887465eea04fd805af09ed6e05aa74261c39db39e3c1016a5f7413f1096e188e183514e21fcbbb5933fc8cfee485ee140ebc0519c5add9a17613fb475d8ccb89002aab54dd0ca125aca607e0af4bce62e745c4ce97ac4e69bd02c79a69120add4cd2059060098fb3e65d4e1b3a8bf4e32d8433d3d41b609e3aebf37e1adc9e9bc84445fb8c9c8f22e36b47ca5ce3232ad6697e0f5eee4e8aba8e583f9238845d8f1268bb9af5a9ad03b38cfe1542eb3598c8eed57ad1ed7ecdc7dc3a27747b623f856eeef56b51ce38b57395c05baff1033462654826f0d4599825051e3f3c8416c8b0e4481bf0f9801ca6b8a9cc6025a4ff3344133e8173429929da6edce0ccc40e3702da4c92c806acc7d462718dfd2be60944151afc149547c1910a74dfb5ac29206a4726d8889651f25','8a8f48defc3ac4f7785dcdb9168812e034c58019bf36b3b26e70377f2f7ecae1','user','2016-02-29 05:43:31','2016-02-29 05:43:31'),(5,'user4','6bb3ad862870ce68b2b37581d91fad0f3f61cd100aba29ca9a8c95dd153a2941b00c67eaeaeb98b5cf966638b1abf10054b7558d2bc4a09563b648e8c70d4a2d69ab61cd0191e4d2c0e1446eb872781e223e7da2545f10d62b68820e979bc52c30e9216d42ddd931ada8b145b255ec2400e9737b03a5dfa69ab75305accd359a55e1b37c03524fbda4468dc0c03c61e1953d240a9db24c3bcdd18e1df35e2d3c17fcde7a15c8a86016db057e6f43d8bb4eec1fdcc0af6f49697657f34d32e4509afcd17bf7eb96c3065b8ac4a41eb888f314c90fd55dc16715efaddcc13a624b45f1ca29f94b5b5a23a7d88b42691a2b5c01b290404ac4f0077475bd4aaed844fe819d93a9f22f453f0a61ccd2c2e674f2f0ad9ef612413ce9ac7e8ad70473970bf6666b39c727812c5969c1591c447ec95a823c7823cd839970d2e9c7b97ff363f217292bdcc2abc8648ffcff64d9cf3c28d9a5ef7e8e986c1eed0799340c3623d4c5a44ea0616dbd1392e92d852496a4954810fbedab1061d18124fe65f01e06b93de14a0fded4681e8510b3fc1691651e8fa094f2222d1cbe9b2869896fd5844525c6163fd24af5cf7c71ff090557f2b6f27f9d6c059ff239e8aaa82cda535fa4f11a8cdfc60f0b64cb1d788e8ee3f6c87f76c375f14190fa6c5031d5beb647aecb453acf3c150de757c4ae1ac12f9342c54c5d85b6f77325774c6d4967c5','d0e6495a29b67c16a94e837d2ebf21f926d4bd4cfa00e35b6c9e67a443dc3c07','user','2016-02-29 17:23:36','2016-02-29 17:23:36');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-29 12:32:42