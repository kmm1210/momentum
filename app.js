const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseenter: () => {
    console.log("The mouse is here!");
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },

  mouseleave: () => {
    console.log("The mouse is gone!");
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },

  contextmenu: () => {
    console.log("That was a right click!");
    title.style.color = colors[2];
    title.innerText = "That was a right click!";
  },

  resize: () => {
    console.log("You just resize!");
    title.style.color = colors[3];
    title.innerText = "You just resize!";
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
window.addEventListener("resize", superEventHandler.resize);
