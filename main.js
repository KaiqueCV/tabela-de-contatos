document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (!nome || !telefone) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const tabela = document.getElementById('contatos');
    let repetido = false;

    for (let i = 1; i < tabela.rows.length; i++) {
        if (tabela.rows[i].cells[0].textContent === nome) {
            alert('Nome já cadastrado!');
            repetido = true;
            break;
        }

        if (tabela.rows[i].cells[1].textContent === telefone) {
            alert('Número de telefone já cadastrado!');
            repetido = true;
            break;
        }
    }

    if (!repetido) {
        const linha = tabela.insertRow();

        const celulaNome = linha.insertCell();
        const celulaTelefone = linha.insertCell();

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;
    }
});