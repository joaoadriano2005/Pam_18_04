const nomes = ['Jussimar', 'Graciete', 'José', 'Oswaldo']
function exibirNomes() {
    const tabela = document.getElementById('tabela')
    let htmlString = '<ul>';
    for (let i = 0; i < nomes.length; i++) {
        htmlString += `<li>${i} ${nomes[i]}</li>`;
    }
    htmlString += '</ul>';
    tabela.innerHTML = htmlString;
}
window.addEventListener('load', exibirNomes);
function procurarNomes() {
    const procurar = Number(document.getElementById('procurar').value);
    console.log(procurar)
    if (isNaN(procurar) || procurar < 0 || procurar >= nomes.length) {
        alert('Código não encontrado ou não digitado corretamente. Tente novamente.')
    } else {
        const elemento = nomes[procurar];
        const exbirVetores = document.getElementById('exbirVetores')
        exbirVetores.innerHTML = "O nome é: "+elemento
    }
}



