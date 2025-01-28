function random(){
  var livros = [
      "Chamado-de-Cthulhu",
      "Dom-Casmurro",
      "Frankenstein",
      "Guerra-dos-Mundos",
      "Um-Estudo-em-Vermelho",
      "Vidas-Secas",
      "pinocchio",
  ]
  const title = livros[Math.floor(Math.random() * (6 - 0 + 1))] 
  console.log(title)
  return title
}

function write(){
  const texto = random();
  const link = "Txt/Livros/Literatura/" + texto + ".zip"
  const container = document.getElementById("container");
  container.innerHTML = `<a href="${link}"><h1>${texto}</h1><a>`;
}

write()