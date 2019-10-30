
function checkvalidity() {
   fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
 
     var reg = /[a-z]|[A-Z]/;
    var regi = /[0-9]&[A-Z]|[a-z]/;
    var em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pa = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    
  
  if (!reg.test(fname)) {
    str = "first name is not correct";
    var result = str.fontcolor("red");
    console.log(result.value);
        document.getElementById("fname").value = (result);
    }
    if (!regi.test(lname)) {
        alert("last name is not correct");
    }
    if (!em.test(email)) {
        alert("email is not correct");
    }
    if (!pa.test(password)) {
        alert("password is not correct");
    }
}


