SELECT `users`.`id`, `users`.`name`, `seat_number` FROM `users` JOIN `tickets` ON  `users`.`id` = `tickets`.`user` JOIN `trains` ON `tickets`.`train` = `trains`.`id` AND `trains`.`id` = 11 ORDER BY `seat_number`;

SELECT `users`.`id`, `users`.`name`, COUNT(`trains`.`id`) AS trains_count, SUM(`trains`.`distance`)/10 AS total_distance FROM users JOIN `tickets` ON `users`.`id` = `tickets`.`user` JOIN `trains` ON `trains`.`id` = `tickets`.`train` GROUP BY `users`.`id` ORDER BY total_distance DESC LIMIT 6; 

SELECT `types`.`name` AS type, `st`.`name` AS src_stn, `dt`.`name` AS dst_stn, `trains`.`departure`, `trains`.`arrival`, `types`.`fare_rate` FROM `trains` JOIN `types` ON `types`.`id` = `trains`.`type` JOIN `stations` AS st ON `st`.`id` = `trains`.`source` JOIN `stations` AS dt ON `dt`.`id` = `trains`.`destination` ORDER BY `departure`;

SELECT `trains`.`id`,`trains`.`type` AS type, `st`.`name` AS src_stn, `dt`.`name` AS dst_stn, `trains`.`departure`, `trains`.`arrival`, COUNT(`tickets`.`id`) AS occupied, `types`.`max_seats` FROM `trains` JOIN `types` ON `types`.`id` = `trains`.`type` JOIN `tickets` ON `tickets`.`train` = `trains`.`id` JOIN `stations` AS st ON `st`.`id` = `trains`.`source` JOIN `stations` AS dt ON `dt`.`id` = `trains`.`destination` GROUP BY `trains`.`id` ORDER BY `trains`.`id`;
