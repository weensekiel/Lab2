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

"use strict";

function validateName() {
    let firstName = document.forms["registerForm"]["firstName"].value;
    let lastName = document.forms["registerForm"]["lastName"].value;


    if (firstName == "")
    {
        alert("First name cannot be empty.");
        // alert("First name cannot be empty.");
    }
    else if (firstName.length < 2) 
    {
        alert("First name has to be longer than 2 letters.");
    }
    else if (lastName == "")
    {
        alert("Last name cannot be empty.");
    }
    else if (lastName.length < 2) 
    {
        alert("Last name must be longer than 2 letters.");
    }
    return false;
}

function validateEmail()
{
    let email = document.forms["registerForm"]["email"].value;

    if (email == "")
    {
        alert("Email cannot be empty.");
    }
    else if (email.length < 8)
    {
        alert("Email is too short. Must be longer than 8 characters.");
    }
    return false;
}

function validatePasswords()
{
    let password = document.forms["registerForm"]["password"].value;
    let confirmPassword = document.forms["registerForm"]["confirmPassword"].value;

    if (password == "")
    {
        // document.getElementById("ErrorMessage").innerHTML = "Password cannot be empty."
        alert("Password cannot be empty.");
    }
    else if (password.length < 6)
    {
        alert("Password must be longer than 6 characters.")
    }
    else if (password != confirmPassword)
    {
        alert("Passwords do not match.")
    }
    return false;
}