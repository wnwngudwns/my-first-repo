CREATE TABLE `students` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(20) NOT NULL,
`ent_year` SMALLINT NOT NULL,
`department` SMALLINT NOT NULL,
`code` SMALLINT NOT NULL,
`phone` VARCHAR(15),
`adress` VARCHAR(40),
`cul_credit` SMALLINT DEFAULT 0,
`aver_credit` FLOAT DEFAULT 0.0,
`is_attend` TINYINT(1) DEFAULT 1,
PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;