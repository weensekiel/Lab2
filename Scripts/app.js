/**
 * Author: Ryan Taylor, Ezekiel Evangelista
 * IDs:                     100577786
 * Date Completed: 20222-02-25
 */

class User {
    constructor(firstName="", lastName="", username="", email="", password="") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function DisplayRegisterContent()
{
    document.title = "WEBD 6201 - Register";


    //function to validate inputs
    function validateInput(selector, condition, errorMessage) {
        if (condition) {
            $("#ErrorMessage").show();
            $("#ErrorMessage").text(errorMessage);
            $(selector).select();
            $(selector).css("border", "2px solid red");
        }
        else {
            $("#ErrorMessage").hide();
            $(selector).css("border", "1px solid #ced4da");
        }
    }

    $("#firstName").blur((e) => {
        validateInput("#FirstName", ($("#FirstName").val().length < 2), "First Name is too short");
    });

    $("#lastName").blur((e) => {
        validateInput("#lastName", ($("#lastName").val().length < 2), "Last Name is too short");
    });

    //user presses submit button
    $("#registerForm").submit((e) => {
        //stop default events
        e.preventDefault();
        e.stopPropagation();

        //get values from form
        var firstName = $('firstName').val();
        var lastName = $('lastName').val();
        var email = $('email').val();
        var password = $('password').val();
        var confirmPassword = $('confirmPassword').val();

        //create user
        var userObject = new User(firstName, lastName, email, password)
    });
}

