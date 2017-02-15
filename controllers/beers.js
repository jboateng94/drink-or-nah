function indexBeers(req, res) {
	res.send('index');
}

function showBeers(req, res) {
	res.send('show');
}

function newBeers(req, res) {
	res.send('new');
}

function createBeers(req, res) {
	res.send('create');
}

function editBeers(req, res) {
	res.send('edit');
}

function updateBeers(req, res) {
	res.send('update');
}

function deleteBeers(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexBeers,
	show: showBeers,
	new: newBeers,
	create: createBeers,
	edit: editBeers,
	update: updateBeers,
	delete: deleteBeers
}