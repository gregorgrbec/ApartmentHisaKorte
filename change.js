function change(value) {
  var phone = document.getElementById("phone-icon");
  var email = document.getElementById("email-icon");
  var text = "";

  if (value == "phone") {
    text = "051818866";
    phone.innerHTML = text;
  }
  if (value == "email") {
    text = "ggrbec@gmail.com";
    email.innerHTML = text;
  }
}
