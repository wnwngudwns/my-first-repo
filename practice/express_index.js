const express = require('express');

const app = express();
const port = 3000;

//app.get('/', (req, res) => res.send('GET /'));
app.get('/', (req, res) => {
	const { sid, t } = req.query;
	console.log(`sid is ${sid}\nt is ${t}`);
	return res.status(400).send('Get /');
});

app.post('/', (req, res) => res.send('POST /'));

app.listen(port, () => console.log(`Server on port : ${port}`));
