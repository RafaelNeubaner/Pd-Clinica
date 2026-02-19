export const pacientes = [
    {
        id: 1,
        nome: "Humberto",
        sobrenome: "de Souza",
        cpf: "123.456.789-00",
        telefone: "(11) 99999-9999",
        email: "humberto@email.com",
        dataNascimento: "1990-01-01",
        sexo: "masculino",
        endereco: {
            cep: "12345-678",
            cidade: "São Paulo",
            estado: "SP",
            rua: "Rua Exemplo",
            numero: "123",
            complemento: "Apto 45"
        },
    },
    {
        id: 2,
        nome: "João",
        sobrenome: "Silva",
        cpf: "987.654.321-00",
        telefone: "(31) 98888-8888",
        email: "joao@email.com",
        dataNascimento: "1985-05-15",
        sexo: "masculino",
        endereco: {
            cep: "12345-678",
            cidade: "Belo Horizonte",
            estado: "MG",
            rua: "Rua Exemplo",
            numero: "548",
            complemento: "Casa"
        },
    },
    {
        id: 3,
        nome: "Maria",
        sobrenome: "Oliveira",
        cpf: "123.456.789-00",
        telefone: "(21) 99999-9999",
        email: "maria@email.com",
        dataNascimento: "1990-01-01",
        sexo: "feminino",
        endereco: {
            cep: "12345-678",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            rua: "Rua das Flores",
            numero: "2784",
            complemento: "Apto 12"
        },
    }
];

function getPacienteById(id) {
    return pacientes.find(paciente => paciente.id === id);
}

export { getPacienteById };