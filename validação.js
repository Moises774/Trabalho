//validação simples antes de enviar
document.getElementById('formContato').addEventListener('submit', function(event) {
    alert('Mensagem enviada com sucesso!');
    event.preventDefault(); // evita o envio real do formulário (já que o backend não é obrigatório)
});
