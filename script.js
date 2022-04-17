let title = document.querySelector("h1");
const color = [
  "green",
  "blue",
  "yellow",
  "white",
  "purple",
  "grey",
  "brown",
  "navy blue",
  "orange",
  "aqua",
];
let nbre = 0;

const createCircle = () => {
  const createCircle = document.createElement("div");
  document.body.appendChild(createCircle);
  createCircle.classList.add("circle");
  createCircle.style.left = Math.ceil(Math.random() * 1200) + "px";
  createCircle.style.top = Math.ceil(Math.random() * 200) + "px";
  if (createCircle) {
    createCircle.addEventListener("click", () => {
      nbre++;
      createCircle.remove();
      title.textContent = nbre;
    });
  }

  createCircle.style.setProperty(
    "--x",
    color[Math.ceil(Math.random() * color.length - 1)]
  );
};

setInterval(() => {
  createCircle();
}, 1000);
