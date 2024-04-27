//variavéis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2
//variavéis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//variavéis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
function setup() {
  createCanvas(600, 600);
}
// onde realmente o jogo funciona, dentro do draw
function draw(){
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostrarRaquete();
  movimentoRaquete();
  verificaColisaoRaquete();

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

function mostrarRaquete(){
   rect( xRaquete, yRaquete,  raqueteComprimento, raqueteAltura   );
}


function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
   if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ) 
  {
     velocidadeXBolinha *= -1;
   }
  
  
}

















































