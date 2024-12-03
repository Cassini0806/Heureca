function confirmDownload() {
  // Mostra uma caixa de diálogo de confirmação
  if (confirm("Você deseja baixar o arquivo?")) {
      // Se o usuário confirmar, o download será iniciado
      window.location.href = 'Txt/Livros/Literatura/Frankenstein.zip'; // Substitua 'seuarquivo.zip' pelo caminho real do seu arquivo
  }
}