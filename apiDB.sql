/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.20-MariaDB : Database - monitoringdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`monitoringdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `monitoringdb`;

/*Table structure for table `creatives` */

DROP TABLE IF EXISTS `creatives`;

CREATE TABLE `creatives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `theaterCode` varchar(255) DEFAULT NULL,
  `orderId` varchar(255) DEFAULT NULL,
  `orderName` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `screens` varchar(255) DEFAULT NULL,
  `bActive` varchar(255) DEFAULT NULL,
  `bDownloadedToDS` varchar(255) DEFAULT NULL,
  `bUploadedAtDSCentral` varchar(255) DEFAULT NULL,
  `bUploadedAtDSMedia` varchar(255) DEFAULT NULL,
  `bUploadedAtMagicInfo` varchar(255) DEFAULT NULL,
  `bUploadedToTV` varchar(255) DEFAULT NULL,
  `creativeCaption` varchar(255) DEFAULT NULL,
  `creativeId` varchar(255) DEFAULT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `endDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `creatives` */

insert  into `creatives`(`id`,`theaterCode`,`orderId`,`orderName`,`remark`,`screens`,`bActive`,`bDownloadedToDS`,`bUploadedAtDSCentral`,`bUploadedAtDSMedia`,`bUploadedAtMagicInfo`,`bUploadedToTV`,`creativeCaption`,`creativeId`,`startDate`,`endDate`,`createdAt`,`updatedAt`) values 
(1,'TGRCIKU','1','TESTER 2 Promo','Complete','9,10','true','true','true','false','false','false','Promo','1','Nov 1, 2021','Nov 30, 2021','2021-11-09 07:31:18','2021-11-09 07:31:18'),
(2,'TGRCIKU','2','TESTER 2 Promo','Complete','9,10','true','true','true','false','false','false','Promo','1','Nov 1, 2021','Nov 30, 2021','2021-11-09 07:33:32','2021-11-09 07:33:32');

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `theaterCode` varchar(255) DEFAULT NULL,
  `orderId` varchar(255) DEFAULT NULL,
  `orderName` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `screens` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `orders` */

insert  into `orders`(`id`,`theaterCode`,`orderId`,`orderName`,`remark`,`screens`,`createdAt`,`updatedAt`) values 
(1,'TGRCIKU','1','TESTER 1 Promo','InComplete','1,2,3,4,5,6,7','2021-11-09 06:42:57','2021-11-09 06:42:57'),
(2,'TGRCIKU','2','TESTER 2 Promo','Complete','9,10','2021-11-09 06:44:49','2021-11-09 06:46:00');

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`createdAt`,`updatedAt`) values 
(1,'user','2021-11-08 16:55:02','2021-11-08 16:55:02'),
(2,'moderator','2021-11-08 16:55:40','2021-11-08 16:55:40'),
(3,'admin','2021-11-08 16:55:45','2021-11-08 16:55:45');

/*Table structure for table `theaters` */

DROP TABLE IF EXISTS `theaters`;

CREATE TABLE `theaters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `published` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

/*Data for the table `theaters` */

insert  into `theaters`(`id`,`code`,`name`,`createdAt`,`updatedAt`,`published`) values 
(1,'JKTANGG','Taman Anggrek','2021-11-09 04:41:36','2021-11-09 04:41:36',0),
(2,'JKTCICE','Ciplaz Cengkareng','2021-11-09 05:11:18','2021-11-09 05:11:18',0),
(4,'BDGBSM','TSM XXI BDG','2021-11-09 05:37:49','2021-11-09 05:37:49',0),
(5,'BDGCIWL','CIWALK XXI BDG','2021-11-09 05:38:42','2021-11-09 05:38:42',1),
(6,'JKTARGA','Mall Artha Gading','2021-11-09 05:47:45','2021-11-09 05:47:45',1),
(7,'BDGBRAG','BRAGA XXI','2021-11-15 07:35:37','2021-11-15 07:35:37',1),
(8,'BDGBTC','BTC XXI','2021-11-15 07:35:59','2021-11-15 07:35:59',1),
(9,'BDGBSM','TSM XXI','2021-11-15 07:36:11','2021-11-15 07:36:11',1),
(10,'BGRMECI','METMALL CILEUNGSI XXI','2021-11-15 07:36:36','2021-11-15 07:36:36',1),
(11,'BGRPESQ','PESONA SQUARE XXI','2021-11-15 07:36:54','2021-11-15 07:36:54',1),
(12,'BGRMAPL','MARGO XXI','2021-11-15 07:37:19','2021-11-15 07:37:19',1),
(13,'JKTBAPL','BAYWALK XXI','2021-11-15 07:37:41','2021-11-15 07:37:41',1),
(14,'JKTATRI','ATRIUM XXI','2021-11-15 07:38:00','2021-11-15 07:38:00',1),
(15,'JKTATRI','ATRIUM XXI','2021-11-15 07:38:01','2021-11-15 07:38:01',1),
(16,'JKTEPIC','EPICENTRUM XXI','2021-11-15 07:38:50','2021-11-15 07:38:50',1);

/*Table structure for table `user_roles` */

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_roles` */

insert  into `user_roles`(`createdAt`,`updatedAt`,`roleId`,`userId`) values 
('2021-11-09 02:37:51','2021-11-09 02:37:51',1,1),
('2021-11-09 02:37:51','2021-11-09 02:37:51',2,1),
('2021-11-11 07:05:59','2021-11-11 07:05:59',3,2);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) values 
(1,'raihan','raihan@gmail.com','$2a$08$92r531THiPK9mL9oVbDqOO6hlacNT/NLofzze4uKLa4B3lDpCOdgW','2021-11-09 02:37:51','2021-11-09 02:37:51'),
(2,'raihankamil','kamilraihan94@Gmail.com','$2a$08$bhtfubYmlpLmboYF8Z8ya.d5ohiACXL9Pf.Ob4.JzFWMN5hx0e1Pi','2021-11-11 07:05:59','2021-11-11 07:05:59');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
