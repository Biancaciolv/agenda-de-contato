const form = document.getElementById('form-contato');
const imgWhatsapp = '<img src="./imagens/whatsapp.png" alt="logo whatsapp" />';
const contato = [];
const número = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela();
    atualizaTotalContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('número-contato');

    if (contato.includes(inputNomeContato.value)) {
        alert(`A contato: ${inputNomeContato.value} já foi inserida`);
    } else {
        contato.push(inputNomeContato.value);
        número.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${imgWhatsapp}</td>`;
        linha += '</tr>';

        linhas += linha; 
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

