function adicionarAmigo() {
    nomeAmigos = document.getElementById('amigo').value;
  
    if (nomeAmigos === '') {
      alert('Campo vazio, Insira um nome');
      return;
    }
  
    let li = document.createElement('li');
    li.innerHTML = nomeAmigos;
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('amigo').value = '';
  }
  
  function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let quantidadeDeAmigos = listaAmigos.children.length;
  
    if (quantidadeDeAmigos === 0) {
      alert('Amigos insuficiente, Adicione nomes');
      return;
    }
  
    let indiceAleatorio = Math.floor(Math.random() * quantidadeDeAmigos);
    let amigoSorteado = listaAmigos.children[indiceAleatorio].innerHTML;
    document.getElementById(
      'resultado',
    ).innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
  }
  
  function limparCampo() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    let inputAmigo = document.getElementById('amigo');
    inputAmigo.value = '';
  }