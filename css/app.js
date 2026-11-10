<<<<<<< HEAD

=======
>>>>>>> aa2c45adb8349f584d0825e0c9807214bbe58d23
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

<<<<<<< HEAD
        date: {
            required: true
        },

        time: {
            required: true
        },

        Address: {
            required: true
        }
=======
        Address: {
            required: true
        },
>>>>>>> aa2c45adb8349f584d0825e0c9807214bbe58d23

    },

    messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        email: "Please enter a valid email",
        phone: "Please enter your phone number",
<<<<<<< HEAD
        date: "Please enter date",
        time: "Please enter time",
        Address: "Please enter your Address"
=======
        address: "Please enter your Address",
>>>>>>> aa2c45adb8349f584d0825e0c9807214bbe58d23
        
    },
      submitHandler: function(form) {
        alert("Registration Successful!");
        form.reset();
    }
});