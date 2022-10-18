const constraints = {
	firstName: {
		presence: {
			allowEmpty: false,
			message: "^Please enter first name",
		},
		length: {
			minimum: 3,
			message: "^Name must be at least 3 characters",
		},
		format: {
			pattern: "[a-z A-Z]+",
			flags: "i",
			message: "^Name should contain only alphabets",
		},
	},
	lastName: {
		presence: {
			allowEmpty: false,
			message: "^Please enter last name",
		},
		length: {
			minimum: 3,
			message: "^Name must be at least 3 characters",
		},
		format: {
			pattern: "[a-z A-Z]+",
			flags: "i",
			message: "^Name should contain only alphabets",
		},
	},
	phoneNumber: {
		presence: {
			allowEmpty: false,
			message: "^Please enter your phone number",
		},
		length: {
			minimum: 13,
			maximum: 13,
			message: "^Please enter a valid phone number",
		},
		format: {
			pattern: "[0-9+]+",
			flags: "i",
			message: "^Phone number should contain only digits",
		},
	},
	email: {
		presence: {
			allowEmpty: false,
			message: "^Please enter your email",
		},
		format: {
			pattern:
				"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
			message: "^Please enter a valid emailId",
		},
	},
	address: {
		length: {
			maximum: 50,
			message: "^Too many characters",
		},
	},
	zipCode: {
		presence: {
			allowEmpty: false,
			message: "^Please enter zip code",
		},
		length: {
			maximum: 6,
			message: "^Too many characters",
		},
	},
	password: {
		presence: {
			allowEmpty: false,
			message: "^Please enter password",
		},
		length: {
			minimum: 6,
			message: "must be at least 6 characters",
		},
	},
	confirmPassword: {
		presence: {
			allowEmpty: false,
			message: "^ConfirmPassword should not be empty",
		},
	},
};

export default constraints;
