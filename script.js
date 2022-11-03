function validate() { 
    var userID = document.getElementById("userID").value; 
    var password = document.getElementById("pwd").value;
    var email = document.getElementById("email").value;
    if (userID.length < 5 || userID.length > 12) { 
        alert("UserID length must be 5-12 character");
        return false;
    }
    if ((password.length < 7 || password.length > 12)) { 
        alert("Password length must be 7-12 character"); 
        return false;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) { 
        alert("Email must contain @ and .");
        return false; 
    }
    else {
        alert("submited successfully");
    }   
}