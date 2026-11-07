$("#myForm").validate({

    rules: {
        firstname: {
            required: true
        },
        
        lastname: {
            required: true
        }, 

        email: {
            required: true,
            email: true
        },

        phone: {
            required: true
        },

        Address: {
            required: true
        },

    },

    messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        email: "Please enter a valid email",
        phone: "Please enter your phone number",
        address: "Please enter your Address",
        
    },
      submitHandler: function(form) {
        alert("Registration Successful!");
        form.reset();
    }
});