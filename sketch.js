let imagem;
let musica;
function setup() {
  createCanvas(1000, 800);
  palavra = empada();
  musica.loop();
}

function draw() {
  background("rgb(226,53,226)");
  image(imagem,0,0,1000,800);
  batata();
  tortadefrango();
  empada();
}
function preload (){
  imagem = loadImage("imagem.jpg");
  musica = loadSound("musica.mp3");
}
function batata(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
}

function tortadefrango(){fill("linghtblue");
  textSize(50);
  textAlign(CENTER,CENTER);
}

function empada(){
  let palavras = ["amo damon", "damon meu marido", "minha monstrinha", "devil's night"];
  return random(palavras);
}