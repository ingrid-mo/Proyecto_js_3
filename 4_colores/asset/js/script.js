const cubes = document.querySelectorAll(".cube");

cubes.forEach((cube) => {
  const pElement = cube.querySelector("p");
  const originalColor = pElement.style.color;

  cube.addEventListener("click", function () {
    const currentColor = this.style.backgroundColor;
    const color = currentColor === "black" ? originalColor : "black";
    this.style.backgroundColor = color;
  });
});

//Crea cuadrados de colores

let color = "";

const fatherDiv = document.getElementById("father");

function createDiv(id) {
  const div = document.createElement("div");
  div.id = id;
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.background = "white";
  div.style.border = "1px solid black";
  div.style.borderRadius = "15px";
  div.style.display = "none";

  fatherDiv.appendChild(div);
  return div;
}

function showAndSetColor(div, color) {
  div.style.display = "block";
  div.style.background = color;
}
//div rosa,naranjo,celeste

const divNew = createDiv("div1");
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    showAndSetColor(divNew, "pink");
  } else if (event.key === "s") {
    showAndSetColor(divNew, "orange");
  } else if (event.key === "d") {
    showAndSetColor(divNew, "skyblue");
  }
});

// Div para las letras morado, gris, cafe

const divNew2 = createDiv("div2");
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    showAndSetColor(divNew2, "purple");
  } else if (event.key === "w") {
    showAndSetColor(divNew2, "gray");
  } else if (event.key === "e") {
    showAndSetColor(divNew2, "brown");
  }
});
