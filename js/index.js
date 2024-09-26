$(document).ready(function () {
  let oldData = localStorage.getItem("info");
  let newData = oldData ? JSON.parse(oldData) : [];

  $("#btn2").click(function (e) {
    e.preventDefault();

    let usernameInput = $("#usernameInput").val();
    let passwordInput = $("#passwordInput").val();

    let oldData = JSON.parse(localStorage.getItem("info"));

    if (!oldData) {
      $("#passErr").text("No user data found. Please sign up.");
      return;
    }

    let validUser = oldData.find(
      (user) =>
        user.username === usernameInput && user.password === passwordInput
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", validUser.username);
      alert("Logged in successfully!");
      window.location.href = "landing.html";
    } else {
      $("#passErr").text("Invalid username or password");
      alert("404 - user not found, kindly sign-up");
      console.log(newData);
    }
  });
});
