function sendData() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userConfirm = document.getElementById("confirm").value;
    var Result = document.getElementById("alarmText");

    console.log(userName);
    console.log(userPassword);
    console.log(userEmail);
    console.log(userConfirm);

   
    Result.style.color = "white";
    Result.style.backgroundColor = "red";
    Result.style.fontSize="18px";
    if (userName == "" && userEmail == "" && userPassword == "" && userConfirm == "") {
        Result.innerHTML = `Enter all data `;
        return false;
    } else if (userName.length < 5 || userName.length > 15) {
        Result.innerHTML = `user name 5 letter at least `;
        return false;
    }
    else if (userEmail.indexOf("@") == -1) {
        Result.innerHTML = `incorrect e-mail`;
        return false;
    }
    else if (userPassword.length < 8) {
        Result.innerHTML = `password at least 8 characters`;
        return false;
    }
    else if (userConfirm != userPassword ) {
        Result.innerHTML = `this password not matched`
        return false;
    }
    else{
        
        return true;
    }
   
}