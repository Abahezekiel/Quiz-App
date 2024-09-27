$(document).ready(function () {
  function getData() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let showData = $("#welcome");

    if (loggedInUser) {
      showData.text(
        `Hello ${loggedInUser}! You're welcome to FRONT-END EXPLORER QUIZ-APP, where we make the lives of developers easy with quiz game that teaches how to familiarize with some Front-End Interview Questions.`
      );
    } else {
      showData.text("User not found. Please login.");
    }
  }

  getData();

  $("#btn3").click(function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    window.location.href = "qstn1.html";
    console.log(showData);
  });
});
