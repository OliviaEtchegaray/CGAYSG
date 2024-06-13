 // mantngamos este fondo 
 let imagenes = []; 
let imagenesCalidas = []; 
let imagenesFrias = [];
let movY = 0; 
const FondoColor = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f']; 

function preload() {

  for (let i = 1; i <= 9; i++) {
    let img = loadImage(`img/t${i}.png`);
    imagenes.push(img);    
  }
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER); 


  let coloresCalidos = [color(0, 255, 0), color(255, 255, 0), color(255, 165, 0), color(255, 0, 0)];
  for (let i = 0; i < 8; i++) {
    let img = random(imagenes);
    let x = random(width);
    let y = random(height);
    let size = 250;
    let colorTinte = random(coloresCalidos);
    imagenesCalidas.push({ img, x, y, size, colorTinte });
  }


  let coloresFrios = [color(148, 0, 211), color(173, 216, 230), color(135, 206, 235), color(255)];
  for (let i = 0; i < 8; i++) {
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


    let newSize = map(movY, -height / 2, height / 2, 100, 500);


    image(img, x, y, newSize, newSize);
  }


  for (let i = 0; i < imagenesFrias.length; i++) {
    let { img, x, y, size, colorTinte } = imagenesFrias[i];


    let newSize = map(movY, -height / 2, height / 2, 100, 500);


    image(img, x, y, newSize, newSize);
  }
}

function mouseMoved() {
  movY = mouseY - height / 2;
} 