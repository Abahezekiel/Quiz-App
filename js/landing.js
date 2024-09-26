$(document).ready(function () {
  function getData() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let showData = $("#welcome");

    if (loggedInUser) {
      showData.text(
        `Hello ${loggedInUser}! You're welcome to EazyDevs, where we make the lives of developers easy with tutorials that teaches how to solve real-world problems.`
      );
    } else {
      showData.text("User not found. Please login.");
    }
  }

  getData();

  $("#btn3").click(function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
    console.log(showData);
  });
});
