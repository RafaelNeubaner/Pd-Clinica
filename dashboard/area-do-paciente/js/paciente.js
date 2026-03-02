import { getPacienteById } from '../../../js/dados/pacientes.js';

const queryParameters = new URLSearchParams(window.location.search);
const idPaciente = queryParameters.get('id');
console.log('ID do paciente:', idPaciente);

const paciente = getPacienteById(Number(idPaciente));

if (paciente) {
    document.getElementById('nome').value = paciente.nome;
    document.getElementById('sobrenome').value = paciente.sobrenome;
    document.getElementById('email').value = paciente.email;
    document.getElementById('telefone').value = paciente.telefone;
    document.getElementById('cpf').value = paciente.cpf;
    document.getElementById('dataNascimento').value = paciente.dataNascimento;
    document.getElementById('sexo').value = paciente.sexo;
    document.getElementById('cep').value = paciente.endereco.cep;
    document.getElementById('cidade').value = paciente.endereco.cidade;
    document.getElementById('rua').value = paciente.endereco.rua;
    document.getElementById('numero').value = paciente.endereco.numero;
} else {
    alert('Paciente não encontrado!');
}


document.getElementById("btnNovoAgendamento").addEventListener("click", function () {
    const query = new URLSearchParams();

    query.append("userId", idPaciente);

    window.location.href = "/dashboard/agendamentos/index.html?" + query.toString();
})