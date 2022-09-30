const facto = (n) => {
	let ret = 1;

	for(let i = 1; i <= n; ++i)
		ret *= i;

return ret;
}


const permutation = (n, r) => {
	
	return (facto(n) / facto(n-r));
}

const combination = (n, r) => {
	return ((facto(n) / facto(n-r)) / facto(r));
}

const multiPermutation = (n, r) => {

	return n**r;
}

const multiCombination = (n, r) => {

	return combination (n+r-1, r);
}

module.exports = {
	permutation,
	combination,
	multiPermutation,
	multiCombination,
};
