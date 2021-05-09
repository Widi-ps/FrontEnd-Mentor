const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["fisrtName"].value;
  const lastName = form["lasttName"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  alert(firstName + lastName + email + password);

  if (firstName === "") {
    addErrorTo("firstName", "First Name is required");
  }
  if (lastName === "") {
    addErrorTo("lastName", "Last Name is required");
  }

  if (isValid(email)) {
    addErrorTo("email", "Email is required");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  }

  function addErrorTo(field, message) {
    const small = form[field].parentNode.querySelector("small");
    small.innerText = message;
    small.style.opacity = "1";
  }

  function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
