let numClick = 0;
const botaoIn = document.getElementById("botaoIn");
const botaoDe = document.getElementById("botaoDe");
const contador = document.getElementById("contador");

botaoIn.onclick = function () {
  numClick++;
  contador.textContent = "Contador: " + numClick;
};

botaoDe.onclick = function () {
  if (numClick < 1) {
    alert("Contador não pode ser menor que zero!");
  } else {
    numClick--;
    contador.textContent = "Contador: " + numClick;
  }
};

const nText = document.getElementById("nText");
const caracterCount = document.getElementById("caracterCount");
const final = document.getElementById("final");

nText.addEventListener("input", () => {
  const textoSemEspaco = nText.value.replace(/\s/g, "");
  caracterCount.textContent = "numero de caracteres: " + textoSemEspaco.length;
});

nText.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && nText.value.trim() !== "") {
    const intDiv = document.createElement("div");
    intDiv.textContent = nText.value;
    final.appendChild(intDiv);

    nText.value = "";
    caracterCount.textContent = "numero de caracteres: 0";
  }
});

let lista = [];
const botaoList = document.getElementById("botaoList");
const botaoOr = document.getElementById("botaoOr");
const final2 = document.getElementById("final2");
const numDiv = document.createElement("div");
final2.appendChild(numDiv);

botaoList.onclick = function () {
  const num = Math.floor(Math.random() * 10);
  lista.push(num);

  const intDivNum = document.createElement("div");
  intDivNum.textContent = num;
  numDiv.appendChild(intDivNum);
};

botaoOr.onclick = function () {
  lista.sort((a, b) => a - b); 
  numDiv.innerHTML = ""; 

  lista.forEach((numero) => {
    const intDivNum = document.createElement("div");
    intDivNum.textContent = numero;
    numDiv.appendChild(intDivNum);
  });
};

const botaoRe = document.getElementById("botaoRe");
botaoRe.onclick = function () {

  numClick = 0;
  contador.textContent = "Contador: " + numClick;

  final.innerHTML = "";
  nText.value = "";
  caracterCount.textContent = "numero de caracteres: 0";

  lista = [];
  numDiv.innerHTML = "";
};
