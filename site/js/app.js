var app = app || {};

$(function() {
	var employees = [
		{
			name : "G.Rakesh",
			email: "rakesh@nisum.com",
			phone: "987098654",
			designation: "UI Developer"
		},
		{
			name : "Anji",
			email: "anji@nisum.com",
			phone: "986745321",
			designation: "UI Developer"
		},
		{
			name : "Venkat",
			email: "venkat@nisum.com",
			phone: "980909876",
			designation: "Testing"
		},
		{
			name : "Dinesh",
			email: "dinesh@nisum.com",
			phone: "978654789",
			designation: "Java Developer"
		},
		{
			name : "Nagababu",
			email: "nagababu@nisum.com",
			phone: "956789456",
			designation: "Java Developer"
		},
		{
			name : "Kiran",
			email: "kiran@nisum.com",
			phone: "980674523",
			designation: "Dev Ops"
		},
		{
			name : "Harish",
			email: "harish@nisum.com",
			phone: "956745632",
			designation: "Testing"
		},
		{
			name : "Panem Kiran",
			email: "panem@nisum.com",
			phone: "970987690",
			designation: "Java Developer"
		}

	]

	new app.EmployeeListView(employees);
});