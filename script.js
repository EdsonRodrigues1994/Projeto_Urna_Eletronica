const seuVotoPara = document.querySelector(".d-1-1 span");
const cargo = document.querySelector(".d-1-2 span");
const descricao = document.querySelector(".d-1-4");
const aviso = document.querySelector(".d-2");
const lateral = document.querySelector(".d-1-right");
const numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = "";
let votoBranco = false;
let votos = [];

function comecarEtapa(){
  let etapa = etapas[etapaAtual];
  let numeroHtml = "";
  numero = "";
  votoBranco = false;

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
  }else{
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";  
    descricao.innerHTML = "<div class='aviso-grande pisca'>VOTO NULO</div>"
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
  if (numero === ""){
    votoBranco = true;
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";  
    numeros.innerHTML = "";
    descricao.innerHTML = "<div class='aviso-grande pisca'>VOTO EM BRANCO</div>"
  }else{
    numeros.innerHTML = "";
    descricao.innerHTML = "<div class ='voto-branco pisca'>Para votar NULO os campos não podem ser preenchidos. Aperte CORRIGE para voltar.</div>"
  }
};

function corrige(){
  comecarEtapa();
};

function confirma(){
  let etapa = etapas[etapaAtual];
  let votoConfirmado = false;

  if (votoBranco === true){
    votoConfirmado = true;
    console.log("Confirmando voto em BRANCO");
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: "branco"
    });
  }else if(numeros.length === etapa.numero){
    votoConfirmado = true;
    console.log(`Confirmando voto ${numero}`)
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    });
  }

  if (votoConfirmado){
    etapaAtual++;
    if(etapas[etapaAtual] !== undefined){
      comecarEtapa()
    }else{
      document.querySelector(".tela").innerHTML = "<div class='aviso-gigante '>FIM!</div>"
      console.log(votos)
    }
  }
};

comecarEtapa();
