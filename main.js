let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let apollo = document.querySelector(".apollo");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  moon.style.filter = "hue-rotate(" + value * -3 + "deg)";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  apollo.style.fontSize = value + "px";

  if (value >= 67) {
    apollo.style.fontSize = 67 + "px";
    apollo.style.position = "fixed";
    if (value >= 487) {
      apollo.style.display = "none";
    } else {
      apollo.style.display = "block";
    }

    if (value >= 120) {
      mountains3.style.filter = "hue-rotate(" + value * -2 + "deg)";
      mountains4.style.filter = "hue-rotate(" + value * -2 + "deg)";
      mountains7.style.filter = "hue-rotate(" + value * -0.5 + "deg)";
      stars.style.filter = "hue-rotate(" + value * 4 + "deg)";
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      mountains3.style.filter = "none";
      mountains4.style.filter = "none";
      mountains7.style.filter = "none";
      stars.style.filter = "none";
      document.querySelector(".main").style.background =
        "linear-gradient(#200016,#10001f)";
    }
  }
};
