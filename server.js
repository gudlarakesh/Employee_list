//module dependencies
var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

//Create Server
var app = express();

//configure server
app.configure( function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, 'site')));
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

//connect Database
mongoose.connect('mongodb://localhost/employeeList');

var Employee = new mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
	designation: String
});

var EmployeeModel = mongoose.model('Employee', Employee);

var port = 4722;
app.listen(port, function() {
	console.log( 'Express server listening on port %d in %s mode',
        port, app.settings.env );
})