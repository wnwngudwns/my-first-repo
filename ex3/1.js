const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

app.get('/', (req,res) => {
	const get_query = Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('\n');
	res.send(`${get_query}`)
});


app.post('/', (req,res) => {
	const req_body = Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n');
	res.send(`${req_body}`)
});
app.put('/', (req,res) => {
	const req_body = Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n');
	res.send(`${req_body}`)
});
app.delete('/', (req,res) =>  {
	const req_body = Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n');
	res.send(`${req_body}`)
});

app.listen(port, () => console.log(`Server listening on ${port} port!`));
