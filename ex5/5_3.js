const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'kwebuser',
	password: 'kwebpw',
	database: 'kweb_db',
});

const runQuery = async (pstmt, data) => {
	const conn = await pool.getConnection();

	try {
		const sql = conn.format(pstmt, data);
		const [result] = await conn.query(sql);
		return result;
	} finally {
		conn.release();
	}
};

const express = require('express');
const app = express();
const port = 3000;

const getChargeById = async (id) => {
	const sql = 'SELECT `users`.`name` AS name, SUM(ROUND(`types`.`fare_rate` * `trains`.`distance` / 1000, -2)) AS fare FROM `tickets` JOIN `trains` ON `tickets`.`user` = ? AND `tickets`.`train` = `trains`.`id` JOIN `types` ON `types`.`id` = `trains`.`type` JOIN `users` ON `tickets`.`user` = `users`.`id`'; 
	const results = await runQuery(sql, [id]);
	return results[0];
};

const getSeatById = async (id) => {
	const sql = 'SELECT COUNT(`tickets`.`id`) AS reserve, `types`.`max_seats` AS max FROM `trains` JOIN `types` ON `trains`.`id` = ? AND`types`.`id` = `trains`.`type` JOIN `tickets` ON `tickets`.`train` = `trains`.`id` GROUP BY `trains`.`id` ORDER BY `trains`.`id`';
	const results = await runQuery(sql, [id]);
	return results[0];
};

app.use(express.urlencoded({extended : true}));

app.get('/fare', async(req,res) => {
	const result = await getChargeById(req.query.uid);
	console.log(result.name);
	res.send(`Total fare of ${result.name} is ${result.fare} KRW`);
});

app.get('/train/status', async(req,res) => {
	const result = await getSeatById(req.query.tid);
	var not = "not";
	if(result.reserve < result.max)
		not = "";
	res.send(`${req.query.tid} is ${not} sold out`);
});


app.listen(port, () => console.log(`Server listening on ${port} port!`));
