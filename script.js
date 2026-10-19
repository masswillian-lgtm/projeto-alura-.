function validarEvento() {
    // 1. Captura os valores digitados no HTML e converte para números inteiros
    const alunos = parseInt(document.getElementById('alunos').value) || 0;
    const monitors = parseInt(document.getElementById('monitores').value) || 0;
    const convidados = parseInt(document.getElementById('convidados').value) || 0;

    // Elemento HTML onde vamos exibir a resposta
    const divResultado = document.getElementById('resultado');
    
    // 2. Processamento: calcula o total de pessoas
    const totalPessoas = alunos + monitors + convidados;

    // Limpa as classes de estilo anteriores e exibe a div
    divResultado.className = "resultado"; 

    // 3. Verificação das regras condicionais
    if (totalPessoas > 100) {
        divResultado.classList.add('error');
        divResultado.innerHTML = `❌ <strong>Evento bloqueado!</strong><br>O total de pessoas (${totalPessoas}) ultrapassa o limite máximo de 100 ingressos.`;
    } 
    else if (convidados > 20) {
        divResultado.classList.add('error');
        divResultado.innerHTML = `❌ <strong>Evento bloqueado!</strong><br>O número de convidados (${convidados}) ultrapassa o limite máximo de 20 permitido pela direção.`;
    } 
    else {
        const ingressosSobrando = 100 - totalPessoas;
        divResultado.classList.add('success');
        divResultado.innerHTML = `
            ✅ <strong>Sucesso! O evento pode ser realizado.</strong><br>
            • Total de participantes: ${totalPessoas} / 100<br>
            • Ingressos restantes: ${ingressosSobrando}
        `;
    }
}

