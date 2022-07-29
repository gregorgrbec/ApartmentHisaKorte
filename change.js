function change(value) {
  var phone = document.getElementById("phone-icon");
  var email = document.getElementById("email-icon");
  var text = "";

  if (value == "phone") {
    text = "+38656402255";
    // phone.innerHTML = text;
    p1 = document.createElement("p");
    p1.innerHTML = text;
    p1.classList.add("p1");
    phone.replaceWith(p1);
  }
  if (value == "email") {
    text = "info@delta-sp.si";
    // email.innerHTML = text;
    p2 = document.createElement("p");
    p2.innerHTML = text;
    p2.classList.add("p2");
    email.replaceWith(p2);
  }
}
