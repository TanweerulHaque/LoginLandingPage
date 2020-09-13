var burger = document.getElementsByClassName("burger")[0];
var state = false;
var smallcontainer = document.getElementsByClassName("smallcontainer")[0];
var lilist1 = document.getElementsByClassName("lilist1")[0];
var lilist2 = document.getElementsByClassName("lilist2")[0];
var lilist3 = document.getElementsByClassName("lilist3")[0];
var lilist4 = document.getElementsByClassName("lilist4")[0];
var line1 = document.getElementsByClassName("line1")[0];
var line2 = document.getElementsByClassName("line2")[0];
var line3 = document.getElementsByClassName("line3")[0];
burger.addEventListener("click", () => {
  state = !state;
  if (state) {
    smallcontainer.setAttribute("class", "animatedElement smallcontainer open");
    lilist1.classList.add("xtra1");
    lilist2.classList.add("xtra2");
    lilist3.classList.add("xtra3");
    lilist4.classList.add("xtra4");
    line1.style.transform = "translate(0,185%) rotate(45deg)";
    line3.style.transform = "translate(0,-185%) rotate(-45deg)";
    line2.style.display = "none";
  } else {
    smallcontainer.setAttribute("class", "animatedElement smallcontainer");
    lilist1.classList.remove("xtra1");
    lilist2.classList.remove("xtra2");
    lilist3.classList.remove("xtra3");
    lilist4.classList.remove("xtra4");
    line1.style.transform = "";
    line3.style.transform = "";
    line2.style.display = "block";
  }
});
var reset1 = document.getElementsByClassName("reset1")[0];
var reset2 = document.getElementsByClassName("reset2")[0];
var reset3 = document.getElementsByClassName("reset3")[0];
var reset4 = document.getElementsByClassName("reset4")[0];
var reset5 = document.getElementsByClassName("reset5")[0];
var card1 = document.getElementsByClassName("card1")[0];
var card2 = document.getElementsByClassName("card2")[0];
var card3 = document.getElementsByClassName("card3")[0];
var card4 = document.getElementsByClassName("card4")[0];
var card5 = document.getElementsByClassName("card5")[0];
var modalbg = document.getElementsByClassName("modalbg")[0];
reset1.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this??"))
    card1.style.display = "none";
  modalbg.style.display = "none";
});
reset2.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this??"))
    card2.style.display = "none";
  modalbg.style.display = "none";
});
reset3.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this??"))
    card3.style.display = "none";
  modalbg.style.display = "none";
});
reset4.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this??"))
    card4.style.display = "none";
  modalbg.style.display = "none";
});
reset5.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this??"))
    card5.style.display = "none";
  modalbg.style.display = "none";
});
var restorebutton = document.getElementsByClassName("restorebutton")[0];
restorebutton.addEventListener("click", () => {
  card1.style.display = "flex";
  card2.style.display = "flex";
  card3.style.display = "flex";
  card4.style.display = "flex";
  card5.style.display = "flex";
});
var value;
var editingmodal = document.getElementsByClassName("modal")[0];
var editcard1 = document.getElementsByClassName("submit1")[0];
var editcard2 = document.getElementsByClassName("submit2")[0];
var editcard3 = document.getElementsByClassName("submit3")[0];
var editcard4 = document.getElementsByClassName("submit4")[0];
var editcard5 = document.getElementsByClassName("submit5")[0];
editcard1.addEventListener("click", () => {
  value = 0;
  editingmodal.style.display = "flex";
  editing();
});
editcard2.addEventListener("click", () => {
  value = 1;
  editingmodal.style.display = "flex";
  editing();
});
editcard3.addEventListener("click", () => {
  value = 2;
  editingmodal.style.display = "flex";
  editing();
});
editcard4.addEventListener("click", () => {
  value = 3;
  editingmodal.style.display = "flex";
  editing();
});
editcard5.addEventListener("click", () => {
  value = 4;
  editingmodal.style.display = "flex";
  editing();
});
function editing() {
  document.getElementById(
    "modalinput"
  ).innerHTML = document.getElementsByClassName("info")[value].innerHTML;
  document.getElementById(
    "eventnameinput"
  ).innerHTML = document.getElementsByClassName("title")[value].innerHTML;
  document.getElementById(
    "categoryinput"
  ).innerHTML = document.getElementsByClassName("category")[value].innerHTML;
  document.getElementById(
    "dayinput"
  ).innerHTML = document.getElementsByClassName("days")[value].innerHTML;
}
document
  .getElementsByClassName("savemebutton")[0]
  .addEventListener("click", () => {
    editingmodal.style.display = "none";
  });
document.getElementsByClassName("closebtn")[0].addEventListener("click", () => {
  if (editingmodal.style.display == "none") {
    editingmodal.style.display = "flex";
  } else {
    editingmodal.style.display = "none";
  }
});
