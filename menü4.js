function verify() {
  // set some vars
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  var msg = "";

  if (user.value == "") {
    msg += "Please enter a username ! \n";
    user.className = "inPBoxError";
  }

  if (pass.value == "") {
    msg += "Please enter a password ! \n";
    pass.className = "inPBoxError";
  }

  // this is the part that gives the ok to submit the form !
  if (msg == "") {
    return true;
  } else {
    alert(msg);
    return false;
  }
}