var smallform = document.getElementsByClassName("smallform")[0];
var overlap = document.getElementsByClassName("overlap")[0];
var form = document.getElementsByClassName("form")[0];
var button = document.getElementsByClassName("button")[0];
var username = document.getElementById("username");
var password = document.getElementById("password");
var full = document.getElementsByClassName("full")[0];
var message = document.getElementsByClassName("message")[0];
var smallcontainer = document.getElementsByClassName("smallcontainer")[0];
var bigform = document.getElementsByClassName("bigform")[0];
var btn = button.style;
var container = document.getElementsByClassName("container")[0];
smallcontainer.style.display = "none";
var usr = username.style;
var pass = password.style;
var frm = form.style;
var msg = message.style;
overlap.style.display = "none";
button.addEventListener("click", () => {
  button.innerHTML = "";
  btn.width = "11%";
  btn.backgroundColor = "#f4f4f4";
  btn.border = "2px dashed #23a5d5d3";
  message.innerHTML = "Waitin...";
  msg.border = "3px white solid";
  msg.backgroundColor = "white";
  msg.color = "#fd9c97";
  button.animate(
    [
      {
        transform: "rotateZ(0deg)"
      },
      {
        transform: "rotateZ(360deg)"
      }
    ],
    {
      duration: 1000,
      iterations: Infinity
    }
  );
});
button.addEventListener("dblclick", () => {
  setTimeout(() => {
    overlap.style.display = "flex";
    overlap.classList.add("growinsize");
  }, 1500);
  usr.width = "0%";
  usr.height = "0%";
  pass.width = "0%";
  pass.height = "0%";
  btn.display = "none";
  smallform.style.width = "0%";
  smallform.style.height = "0%";
  full.style.height = "100%";
  frm.borderRadius = "50%";
  frm.width = "0%";
  frm.height = "0%";
});
setTimeout(() => {
  smallcontainer.style.display = "flex";
}, 2500);
setTimeout(() => {
  bigform.style.opacity = "1";
}, 2800);
setTimeout(() => {
  msg.opacity = "1";
}, 3200);
