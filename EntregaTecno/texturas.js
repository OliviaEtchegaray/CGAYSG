/** let imagenes = []; 
let imagenesCalidas = []; 
let imagenesFrias = []; 
let movY = 0; 

function preload() {
  // esto lo pusepar aas imagenes que sino no se me caargaban 
  for (let i = 1; i <= 9; i++) {
    let img = createImg(`img/t${i}.png`);
    img.size(250, 250); 
    img.hide(); 
    imagenes.push(img); y   
  }
}

function setup() {
  createCanvas(800, 600); 
  imageMode(CENTER); 


  let coloresCalidos = [color(0, 255, 0), color(255, 255, 0), color(255, 165, 0), color(255, 0, 0)];
  let numImagenesCalidas = 8; 

  for (let i = 0; i < numImagenesCalidas; i++) {
    let img = random(imagenes);
    let x = random(width); 
    let y = random(height);
    let size = 250;
    let colorTinte = random(coloresCalidos);
    imagenesCalidas.push({ img, x, y, size, colorTinte });
  }


  let coloresFrios = [color(148, 0, 211), color(173, 216, 230), color(135, 206, 235), color(255)];
  let numImagenesFrias = 8; 

  for (let i = 0; i < numImagenesFrias; i++) {
    let img = random(imagenes);
    let x = random(width); 
    let y = random(height); 
    let size = 250;
    let colorTinte = random(coloresFrios);
    imagenesFrias.push({ img, x, y, size, colorTinte });
  }
}

function draw() {
  background(255); 

  for (let i = 0; i < imagenesCalidas.length; i++) {
    let { img, x, y, size, colorTinte } = imagenesCalidas[i];

//tinte negro 
    let newSize = map(movY, -height, height, 100, 500);
    let tinte = red(colorTinte); 
    tint(0, tinte);
    image(img, x, y, newSize, newSize);
  }

//frias
  for (let i = 0; i < imagenesFrias.length; i++) {
    let { img, x, y, size, colorTinte } = imagenesFrias[i];

    let newSize = map(movY, -height, height, 100, 500);

 
    let tinte = red(colorTinte); // rojo
    tint(255, tinte);
    image(img, x, y, newSize, newSize);
  }
}

function mouseMoved() {
  movY = mouseY - height / 2; 
} */