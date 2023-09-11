const nav = document.getElementById("nav");
const main = document.getElementById("main");
function stickNav(event) {
  if (window.pageYOffset > 70) {
    nav.style.position = "fixed";
    nav.style.zIndex = "5";
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "1px 6px 20px rgba(0, 0, 0, 0.05)";
    nav.style.width = "100%";
    nav.style.top = "0px";
    nav.style.left = "0px";
    nav.style.transition = "all 300ms ease-in-out";

    main.style.paddingTop = "100px";
  } else if (window.pageYOffset < 70) {
    nav.style.position = "static";
    nav.style.boxShadow = "none";
    main.style.paddingTop = "0px";
  }
}
window.addEventListener("scroll", stickNav);
