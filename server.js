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

app.get( '/api/employees', function( request, response ) { 
	return EmployeeModel.find( function( err, employees ) {
		if( !err ) {
			return response.send( employees );
		} else {
			return console.log( err );
		} 
	});
});

app.post( '/api/employees', function( request, response ) { 
	var employee = new EmployeeModel({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        designation: request.body.designation
	});
	employee.save( function( err ) {
		if( !err ) {
			return console.log( 'created' );
		} else {
			return console.log( err );
		} 
	});
	return response.send( employee );
});

app.get('/api/employees/:id', function( request, response ) {
	return EmployeeModel.findById( request.params.id, function(err, employee) {
		if(!err) {
			return response.send(employee);
		} else {
			return console.log(err);
		}
	});
});

app.put('/api/employees/:id', function( request, response) {
	console.log("updating candidate details" + request.body.name);
	return EmployeeModel.findById( request.params.id, function(err, employee) {
		employee.name = request.body.name;
		employee.email = request.body.email;
		employee.phone = request.body.phone;
		employee.designation = request.body.designation;

		return employee.save( function (err) {
			if(!err) {
				console.log("Employee details updated")
			} else {
				console.log(err);
			}
			return response.send( employee );
		});
	});
});

app.delete('/api/employees/:id', function( request, response ) {
	console.log("Deleting Book with ID" + request.body.id);
	return EmployeeModel.findById( request.params.id , function(err, employee) {
		return employee.remove( function(err) {
			if(!err) {
				coonsole.log("Employee removed");
				return reponse.send( '' );
			} else {
				console.log(err);
			}
		});
	});
});

