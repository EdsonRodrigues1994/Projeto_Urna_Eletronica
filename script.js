const seuVotoPara = document.querySelector(".d-1-1 span");
const cargo = document.querySelector(".d-1-2 span");
const descricao = document.querySelector(".d-1-4");
const aviso = document.querySelector(".d-2");
const lateral = document.querySelector(".d-1-right");
const numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = "";

function comecarEtapa(){
  let etapa = etapas[etapaAtual];
  let numeroHtml = "";

  for(let i = 0; i < etapa.numeros; i++){
    if(i === 0){
      numeroHtml += "<div class='numero pisca'></div>";
    } else{
      numeroHtml += "<div class='numero'></div>";
    }
  }

  seuVotoPara.innerHTML = "";
  cargo.innerHTML = etapa.titulo.toUpperCase();
  descricao.innerHTML = "";
  aviso.innerHTML ="";
  lateral.innerHTML ="";
  numeros.innerHTML = numeroHtml;
};

function atualizaInterface(){
  console.log("Atualizando inteface");
  console.log(numero);

};

function clicou(event){
  let digitaNumero = document.querySelector(".numero.pisca");
  if(digitaNumero !== null){
    digitaNumero.innerHTML = event;
    numero = `${numero}${event}`;

    digitaNumero.classList.remove("pisca");
    if(digitaNumero.nextElementSibling !== null){
      digitaNumero.nextElementSibling.classList.add("pisca");
    }else{
      atualizaInterface();
    }
  }
};

function branco(){
  console.log("branco");
};

function corrige(){
  console.log("corrige");
};

function confirma(){
  console.log("confirma");
};


comecarEtapa();