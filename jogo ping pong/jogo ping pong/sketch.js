//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2

//variávéis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente; 

let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//chance do oponente errar
let chanceDoOponenteErrar;

function preload(){
  trilha = loadSound ("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 600);
  trilha.loop();
}


// onde realmente o jogo funciona, dentro do draw
function draw(){
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete,yRaquete);
  movimentoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

//variavéis de funções pra refatoração do código
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}
function movimentoBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}
  
function verificaColisaoBorda(){
   if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  } 
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  
  }
}

function mostrarRaquete(x,y){
   rect( x, y,  raqueteComprimento, raqueteAltura   );
}


function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}


function movimentoBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
} 


function colisaoMinhaRaqueteBiblioteca(){
   colidiu = 
  collideRectCircle(xRaquete, yRaquete,     raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y){
   colidiu = 
  collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function movimentoRaqueteOponente() {
   if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

  


function incluiPlacar() {
  stroke(255)
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0, 255, 127));
  rect(450, 10, 40,20 );
  fill(255);
  text(pontosDoOponente, 470, 26);

}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

















































