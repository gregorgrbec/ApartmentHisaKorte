// if (window.location.pathname.endsWith("index.html")) {
//   window.history.replaceState(
//     null,
//     null,
//     window.location.pathname.slice(0, -10)
//   );
// } else {
//   window.history.replaceState(
//     null,
//     null,
//     window.location.pathname.slice(0, -17)
//   );
// }

function changeBG() {
  document.getElementsByClassName("dropbtn")[0].style.backgroundColor =
    "#afafaf";
}

function changeBGback() {
  document.getElementsByClassName("dropbtn")[0].style.backgroundColor = "white";
}
