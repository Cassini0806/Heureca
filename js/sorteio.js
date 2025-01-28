function random(){
  var livros = [
      "Chamado-de-Cthulhu",
      "Dom-Casmurro",
      "Frankenstein",
      "Guerra-dos-Mundos",
      "Um-Estudo-em-Vermelho",
      "Vidas-Secas",
      "Pinocchio",
  ]
  const title = livros[Math.floor(Math.random() * (6 - 0 + 1))] 
  console.log(title)
  return title
}

function write(){
  const texto = random();
  const link = "Txt/Livros/Literatura/" + texto + ".zip"
  const container = document.getElementById("container");
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda
  const dia = String(hoje.getDate()).padStart(2, '0');
  const dataFormatada = `${dia}/${mes}/${ano}`;
  container.innerHTML = `<a href="${link}"><h1>${texto}</h1><a><p class="data">${dataFormatada}</p>`;
}



write()
