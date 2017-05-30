var app = app || {};

 app.EmployeeView = Backbone.View.extend({
 	tagName: 'div',
 	className: 'employeeContainer',
 	template: _.template($('#employeeTemplate').html()),
 	render: function() {
 		this.$el.html(this.template(this.model.toJSON()));
 		return this;
 	},
 	parse: function( response ) { 
 		response.id = response._id; 
 		return response;
	},
 	events: {
 		'click .delete': 'deleteEmployee'
 	},
 	deleteEmployee: function() {
 		this.model.destroy(); //delete model

 		this.remove(); //delete view
 	}
 })