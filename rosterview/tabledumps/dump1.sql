CREATE DATABASE  IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `test`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	5.6.16

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
-- Table structure for table `theroster`
--

DROP TABLE IF EXISTS `theroster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `theroster` (
  `lname` varchar(30) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `class` varchar(10) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `major` varchar(100) NOT NULL,
  `bio` varchar(400) NOT NULL,
  `picURL` varchar(45) NOT NULL,
  `id` int(2) NOT NULL,
  `links` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Roster for SAE PA TG Class ~2014';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theroster`
--

LOCK TABLES `theroster` WRITE;
/*!40000 ALTER TABLE `theroster` DISABLE KEYS */;
INSERT INTO `theroster` VALUES ('Person1','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/1.jpg',1,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person2','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/2.jpg',2,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person3','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/3.jpg',3,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person4','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/4.jpg',4,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person5','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/5.jpg',5,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person6','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/6.jpg',6,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person7','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/7.jpg',7,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person8','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/8.jpg',8,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person9','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/9.jpg',9,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person10','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/10.jpg',10,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person11','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/11.jpg',11,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person12','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/12.jpg',12,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person13','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/13.jpg',13,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person14','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/14.jpg',14,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person15','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/15.jpg',15,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person16','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/16.jpg',16,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person17','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/17.jpg',17,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person18','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/18.jpg',18,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person19','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/19.jpg',19,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/'),('Person20','Test','Rho','Sophomore','Computer Science','Hey, this is where my biography will go!','img/pics/20.jpg',20,'https://twitter.com/ocon60;https://www.facebook.com/FANDM60;https://www.sae.net/');
/*!40000 ALTER TABLE `theroster` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-02-13 17:28:22
