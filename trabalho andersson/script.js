let votosSim = 0;
let votosNao = 0;

function votar(sim) {
  if (sim) {
    votosSim++;
  } else {
    votosNao++;
  }

  atualizarResultado();
}

function atualizarResultado() {
  const total = votosSim + votosNao;
  const simPorcentagem = total ? ((votosSim / total) * 100).toFixed(1) : 0;
  const naoPorcentagem = total ? ((votosNao / total) * 100).toFixed(1) : 0;

  document.getElementById('simPorcentagem').innerText = simPorcentagem + "%";
  document.getElementById('naoPorcentagem').innerText = naoPorcentagem + "%";
}

function irParaTribo(nomeTribo) {
  window.location.href = nomeTribo + ".html";
}