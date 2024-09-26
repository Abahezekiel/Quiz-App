$(document).ready(function () {
  let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let oldData = localStorage.getItem("info");
  let newData = oldData ? JSON.parse(oldData) : [];

  $("#btn").click(function (e) {
    e.preventDefault();
    $(".error").text("");

    let username = $("#usernameInput").val();
    let email = $("#emailInput").val();
    let password = $("#passwordInput").val();
    let confirm_password = $("#confirm_passwordInput").val();

    let hasError = false;

    if (!username) {
      $("#userErr").text("Username is Required!");
      hasError = true;
    }

    if (email === "") {
      emailErr.textContent = "Email is Required!";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailErr.textContent = "Valid Email is Required!";
      isValid = false;
    }

    if (!password) {
      $("#passErr").text("Password is Required!");
      hasError = true;
    }

    if (!confirm_password) {
      $("#pass2Err").text("Password is Required!");
      hasError = true;
    }


    if (password !== confirm_password) {
      $("#pass2Err").text("Passwords do not match!");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    console.log(newData);

    let formData = {
      username: username,
      email: email,
      password: password,
      confirm_password: confirm_password,
    };

    newData.push(formData);
    localStorage.setItem("info", JSON.stringify(newData));
    console.log(newData);

    newData.forEach((e) => {
      console.log(e.username);
    });

    alert("Data saved successfully!");

    $("#usernameInput").val("");
    $("#emailInput").val("");
    $("#passwordInput").val("");
    $("#confirm_passwordInput").val("");

    window.location.href = "index.html";
    console.log(showData);
  });
});