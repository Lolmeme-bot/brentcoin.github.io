window.onload = function(
) {
  const valueToCheck = "exst";
  const redirectUrlIfValueFound = "/main/main.html";
  const redirectUrlIfValueNotFound = "/main/notfound.html";

  document.getElementById("emoji").innerHTML = "🎉";

  setTimeout(function(
) {
    if (!localStorage.getItem(valueToCheck)) {
      localStorage.setItem("exst", "true");
      window.location.href = redirectUrlIfValueNotFound;
    } else {
      window.location.href = redirectUrlIfValueFound;
    }
  }, 5000); // 15 seconds
};
