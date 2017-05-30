var app = app || {};

 app.EmployeeListView = Backbone.View.extend({
 	el: '#employees',
 	initialize: function(intialEmployees) {
 		this.collection = new app.EmployeeList(intialEmployees);
 		this.collection.fetch({reset : true});
 		this.render();
 		this.listenTo(this.collection, 'add', this.renderEmployee);
 		this.listenTo(this.collection, 'reset', this.render);
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
 		this.collection.create(formData);
 	}
 });