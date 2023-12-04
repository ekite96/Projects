/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE IF NOT EXISTS `user` (
    `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `user_username` varchar(100) NOT NULL,
    `user_firstname` varchar(100) NOT NULL,
    `user_lastname` varchar(100) NOT NULL,
    `user_passwordhash` varchar(500) NOT NULL,
    `user_salt` varchar(500) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `user`;
INSERT INTO `user` (`user_id`, `user_username`, `user_firstname`, `user_lastname`, `user_passwordhash`, `user_salt`) VALUES
    (1, 'epkite', 'Evan', 'Kite', 'd2fc74acf8259c90b8a909db51ecd6b360df56433acfe4c87280fac8c023b3979bc7274466ca4e64063cc53a46ae8fdd278698fea635774f19ceb7a96ccf038b', '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9'),
    (2, 'student', 'Stu', 'Dent', '809e2b3d4d2729e101a7d13146152ad7d77d4913a5bbb13d99920850405aca04eb0e4d8930e51b8075a9e004a4241c52bd9171d2005b6efbfb05b490808dff22', '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9'),
    (3, 'graduate', 'Gra', 'Duate', '2e9155150897cfd432903098774d887375bafa71240cc720998fa046305f9ddb773b4734cb268391c200555c7490a8ab141dee6acd07b8a1c72adeba92f54e89', '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9');

CREATE TABLE IF NOT EXISTS `note` (
  `note_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `note_userID` int(10) unsigned NOT NULL,
  `note_restID` int(10) NOT NULL,
  `note_dish` varchar(100) NOT NULL,
  `note_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `note_rating` int(10) NOT NULL,
  `note_body` varchar(250) NOT NULL,
  PRIMARY KEY (`note_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `note`;
INSERT INTO `note` (`note_id`, `note_userID`, `note_restID`, `note_dish`, `note_rating`, `note_body`) VALUES
    (1, 1, 3835169, 'cheese pizza', 1, 'Vestibulum sed magna at nunc commodo placerat.');


CREATE TABLE IF NOT EXISTS `restaurant` (
  `rest_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rest_name` varchar(100) NOT NULL,
  `rest_add` varchar(250) NOT NULL,
  `rest_rating` int(10) unsigned NOT NULL,
  PRIMARY KEY (`rest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DELETE FROM `restaurant`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
