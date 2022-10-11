CREATE TABLE `user`(
`id` INT NOT NULL AUTO_INCREMENT,
`user_id` VARCHAR(20) NOT NULL,
`user_pw` VARCHAR(20) NOT NULL,
`user_nick` VARCHAR(20) NOT NULL,
`prof_link` VARCHAR(40),
`prof_mess` VARCHAR(30),
`is_out` TINYINT(1) DEFAULT 0,
`reg_date` DATE NOT NULL,
PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels`(
`id` INT NOT NULL AUTO_INCREMENT,
`chan_name` VARCHAR(20) NOT NULL,
`made_user` INT NOT NULL,
`chan_link` VARCHAR(40) NOT NULL,
`num_avail` INT NOT NULL,
`is_out` TINYINT(1) DEFAULT 0,
`reg_date` DATE NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`made_user`)
REFERENCES `user`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats`(
`id` INT NOT NULL AUTO_INCREMENT,
`contents` VARCHAR(50) NOT NULL,
`write_user` INT NOT NULL,
`chat_channel` INT NOT NULL,
`reg_date` DATE NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`write_user`)
REFERENCES `user`(`id`),
FOREIGN KEY (`chat_channel`)
REFERENCES `channels`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows`(
`id` INT NOT NULL AUTO_INCREMENT,
`follower` INT NOT NULL,
`following` INT NOT NULL,
`reg_date` DATE NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`follower`)
REFERENCES `user`(`id`),
FOREIGN KEY (`following`)
REFERENCES `user`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks`(
`id` INT NOT NULL AUTO_INCREMENT,
`blocker` INT NOT NULL,
`blocked` INT NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`blocker`)
REFERENCES `user`(`id`),
FOREIGN KEY (`blocked`)
REFERENCES `user`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
