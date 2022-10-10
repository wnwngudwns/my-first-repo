const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

app.get('/page/:pg', (req,res) => {
	res.send(`This is page #${req.params.pg}`);
});


app.listen(port, () => console.log(`Server listening on ${port} port!`));
