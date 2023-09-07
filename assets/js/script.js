let elemento = document.getElementsByClassName('.feedback')

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = peso / (altura * altura);

        // Exibe o resultado no span
        document.getElementById('resultado').textContent = `${imc.toFixed(2)}`;

        // Chama a função feedback para calcular e exibir a mensagem
        feedback(imc);
    } else {
        alert('Por favor, insira valores válidos para peso e altura.');
    }
}

function feedback(imc) {
    let mensagem = '';
 
    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Peso normal';
    } else if (imc >= 24.9 && imc < 29.9) {
        mensagem = 'Acima do peso';
    } else {
        mensagem = 'Obeso';
    }

    // Exibe a mensagem na tela
    document.querySelector('.feedback span').textContent = mensagem;
}

// Adiciona um ouvinte de evento de clique ao botão "Calcular"
document.querySelector('.calcular').addEventListener('click', calcularIMC);
