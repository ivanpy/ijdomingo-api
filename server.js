'use stritc'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 1245;


// MongoDb connection with mongoose
mongoose.connect('mongodb://admin:password@ds111851.mlab.com:11851/bdjdomprod', (err, res) => {
	if(err){
		console.error('Error to connect Database: bdjdom');
		throw err;
	}else{
		console.info('Se conectó con exito a la base de datos: bdjdom');
		app.listen(port, () => console.log(`Servidor ejecutandose en http://localhost:${port}`));
	}
});
