var app = app || {};

 app.EmployeeListView = Backbone.View.extend({
 	el: '#employees',
 	initialize: function(intialEmployees) {
 		this.collection = new app.EmployeeList(intialEmployees);
 		this.render();

 		this.listenTo(this.collection, 'add', this.renderEmployee);
 	},
 	render: function() {
 		this.collection.each(function(item) {
 			this.renderEmployee(item)
 		},this);
 	},
 	renderEmployee: function(employee) {
 		var employeeView = new app.EmployeeView({
 			model: employee
 		})
 		this.$el.append(employeeView.render().el);
 	},
 	events: {
 		'click #add': 'addEmployee'
 	},
 	addEmployee: function(e) {
 		e.preventDefault();
 		var formData = {};

 		$('#addEmployee .employeeData').children('input').each( function(i, el) {
 			if($(el).val() != ""){
 				formData[el.id] = $(el).val();
 			}
 		});
 		console.log(this.collection.models);
 		this.collection.add(new app.Employee(formData));
 	}
 });