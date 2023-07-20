const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const body = document.querySelector("body");
const button = body.querySelector("#gradient");

function gerRandomNum(length) {
    return Math.floor(Math.random() * length);
}

function handleChangeGradient() {
    const random = gerRandomNum(colors.length);
    const fistColor = colors[gerRandomNum(colors.length)];
    const removeRandomColors = colors.filter((v, i) => i !== random);
    const secColor = removeRandomColors[gerRandomNum(removeRandomColors.length)];

    const deg = gerRandomNum(50);
    body.style.backgroundImage = `linear-gradient(${deg}deg, ${fistColor}, ${secColor})`;
}

button.addEventListener("click", handleChangeGradient);
