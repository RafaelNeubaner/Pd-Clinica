import {pacientes} from '../../js/dados/pacientes.js';

function setPacientes(pacientes) {
    const tableBody = document.getElementById('table-pacientes').querySelector('tbody');
    tableBody.innerHTML = '';
    for (let paciente of pacientes) {
        const pacientTr = document.createElement('tr');
        pacientTr.onclick = () => {
            window.location.href = `area-do-paciente/index.html?id=${paciente.id}`;
        }
        pacientTr.innerHTML = `
            <td>${paciente.nome} ${paciente.sobrenome}</td>
            <td>${paciente.cpf}</td>
            <td>${paciente.telefone}</td>
            <td>${paciente.email}</td>
        `;
        document.getElementById('table-pacientes').querySelector('tbody').appendChild(pacientTr);
    }
}

setPacientes(pacientes);

document.getElementById('buscaPaciente').addEventListener('input', (event) => {
    const search = event.target.value.toLowerCase();
    const filteredPacientes = pacientes.filter(paciente =>
        `${paciente.nome} ${paciente.sobrenome}`.toLowerCase().includes(search) ||
        paciente.cpf.includes(search) ||
        paciente.telefone.includes(search) ||
        paciente.email.toLowerCase().includes(search)
    );
    setPacientes(filteredPacientes);
});

