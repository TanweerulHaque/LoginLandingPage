var message = document.getElementsByClassName("message")[0];
var form = document.getElementsByClassName("form")[0];
var username = document.getElementById("username");
var password = document.getElementById("password");
var full = document.getElementsByClassName("full")[0];
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", () => {
  form.style.justifyContent = "flex-end";
  form.style.width = "0";
  form.style.height = "0";
  form.style.borderRadius = "50%";
  username.style.display = "none";
  password.style.display = "none";
  button.style.display = "none";
  full.style.height = "100%";
  message.style.fontSize = "1.2rem";
  message.innerHTML = "Logged in";
  message.style.backgroundColor = "white";
  message.style.padding = "10px";
  message.style.borderRadius = "25px";
  message.style.color = "red";
  message.style.width = "20%";
});
