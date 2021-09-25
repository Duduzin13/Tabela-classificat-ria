var Duduzin = { nome: "Duduzin", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var Gabriela = { nome: "Gabriela", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var Eduardo = { nome: "Eduardo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

// calculando os pontos de um jogador especifico
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  // quando chamamos a função, ela vai retornar o valor.
  // Dessa maneira conseguimos atribuir o resultado dessa função para uma variável.
  return pontos;
}

// aqui estamos acessando a variável rafa, calculando os pontos com a função que fizemos
// e atribuindo o resultado desses pontos na variável pontos.
Duduzin.pontos = calculaPontos(Duduzin);
Gabriela.pontos = calculaPontos(Gabriela);
Eduardo.pontos = calculaPontos(Eduardo);

// vamos criar uma LISTA com os jogadores.
var jogadores = [Duduzin, Gabriela, Eduardo];

//
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    //o += significa a mesma coisa que elemento = elemento + "<tr><td>jogadores.nome</td>"
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarPlacar(" + i + ")'>Zerar</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

// botão vitoria
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

// botão empate
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

// botão derrota
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPlacar(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}