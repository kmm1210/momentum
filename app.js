const body = document.querySelector("body");

function handleResize() {
  const innerWidth = window.innerWidth;
  const classNames = ["changeSkyblue", "changePlum", "changeYellow"];

  if (innerWidth < 400) {
    body.className = classNames[0];
  } else if (innerWidth < 800) {
    body.className = classNames[1];
  } else {
    body.className = classNames[2];
  }
}

window.addEventListener("resize", handleResize);
