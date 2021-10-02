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

  seuVotoPara.style.display = "none";
  cargo.innerHTML = etapa.titulo.toUpperCase();
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML ="";
  numeros.innerHTML = numeroHtml;
};

function atualizaInterface(){
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item) =>{
    if (item.numero === numero){
      return true;
    } else{
      return false;
    }
  });
  if(candidato.length > 0){
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`;

    let fotosHtml = "";
    for (let i in candidato.fotos){
      fotosHtml += `<div class="d-1-image"> <img src="${candidato.fotos[i].url}" alt=""> <p>${candidato.fotos[i].legenda}</p> </div>`
    }

    lateral.innerHTML = fotosHtml;
  }
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