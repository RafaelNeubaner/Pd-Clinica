import { showToast } from "/js/showToast.js";
import { getPacienteById } from "/js/dados/pacientes.js";

const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");
const paciente = getPacienteById(Number(userId));
if (paciente) {
    document.getElementById("nomePaciente").value = paciente.nome + " " + paciente.sobrenome;
}

document.getElementById("agendamentoForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateAgendamentoForm()) {
    showToast("Agendamento salvo com sucesso!", true);

    setTimeout(() => {
        history.back();
    }, 1200);
  } 
});

document.querySelector("input[type='date']").min = new Date().toISOString().split("T")[0];  

function validateAgendamentoForm() {
  const nomePaciente = document.getElementById("nomePaciente").value.trim();
  const medicoResponsavel = document.getElementById("nomeMedico").value.trim();
  const dataAgendamento = document.getElementById("dataAgendamento").value;
  const horaAgendamento = document.getElementById("horaAgendamento").value;
  


  if (!nomePaciente || !medicoResponsavel || !dataAgendamento || !horaAgendamento) {
    showToast("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  if(dataAgendamento < new Date().toISOString().split("T")[0]) {
    showToast("A data do agendamento não pode ser no passado.");
    return false;
  }
  
  return true;
}