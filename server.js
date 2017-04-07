'use stritc'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 1245;


// MongoDb connection with mongoose
mongoose.connect('mongodb://admin:admin@ds143980.mlab.com:43980/bdjdom', (err, res) => {
	if(err){
		console.error('Error to connect Database: bdjdom');
		throw err;
	}else{
		console.info('Se conectó con exito a la base de datos: bdjdom');
		app.listen(port, () => console.log(`Servidor ejecutandose en http://localhost:${port}`));
	}
});
