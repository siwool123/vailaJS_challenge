const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const body = document.querySelector("body");
const title = document.querySelector("h2");
const loginForm = document.forms[0];
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
console.log(loginForm.uname);
if (localStorage.getItem("username")) {
  toggleT(localStorage.getItem("username"));
}
function windowResize() {
  if (window.innerWidth > 800) body.style.backgroundColor = colors[0];
  else if (window.innerWidth > 700) body.style.backgroundColor = colors[1];
  else if (window.innerWidth > 600) body.style.backgroundColor = colors[2];
  else if (window.innerWidth > 500) body.style.backgroundColor = colors[3];
  else if (window.innerWidth > 400) body.style.backgroundColor = colors[4];
  console.log(window.innerWidth, title.className);
}

function windowCopy() {
  alert("Copied!");
}
function windowPaste() {
  alert("Pasted!");
}
function titleClick() {
  title.classList.toggle("active");
  console.log(window.innerWidth, title.className);
}

function toggleT(uname) {
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  let hello = "morning";
  let now = new Date();
  if (now.getHours() >= 12 && now.getHours() <= 18) hello = "afternoon";
  else if (now.getHours() > 18 && now.getHours() < 25) hello = "evening";
  greeting.innerText = `Good ${hello}, ${uname}`;
}
function onSubmit(e) {
  e.preventDefault();
  console.log(e, loginForm.uname.value);

  let trimV = loginForm.uname.value.replace(/\s+/g, "");
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/g;
  if (specialChar.test(trimV) || trimV === "") {
    alert("Please enter your name without special character or white space.");
    console.log(trimV);
    loginForm.uname.focus();
    loginForm.uname.value = "";
    return;
  }
  localStorage.setItem("username", loginForm.uname.value);
  toggleT(loginForm.uname.value);
}
function linkClick(e) {
  e.preventDefault();
  console.log(e);
  alert("Clicked!");
}
document.addEventListener("DOMContentLoaded", windowResize);
window.onresize = windowResize;
window.addEventListener("copy", windowCopy);
window.addEventListener("paste", windowPaste);
title.addEventListener("click", titleClick);
loginForm.onsubmit = onSubmit;
link.onclick = linkClick;

const clock = document.querySelector("#clock");
function getClock() {
  let now = new Date();
  let hour = String(now.getHours()).padStart(2, "0");
  let minute = String(now.getMinutes()).padStart(2, "0");
  let second = String(now.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
