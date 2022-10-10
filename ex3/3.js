const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));

function facto(n) {
	if(n == 0)
		return 1;
	
	var ret = 1;

	for(var i = 1; i <= n; ++i)
		ret *= i;

	return ret
}

app.get('/factorial', (req,res) => {
	const ft = req.query.factorial;

	res.redirect(`/factorial/${ft}`);
});

app.get('/factorial/:ft', (req,res) => {
	const ft = req.params.ft;

	const ft_ret = facto(ft);
	
	res.send(`${ft}! is ${ft_ret}`);
});


app.listen(port, () => console.log(`Server listening on ${port} port!`));
