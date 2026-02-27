# Uso da plataforma PDClínica

## Login

### Requisitos email:
- Ter formato válido

### Requisitos senhas:
- Ter no mínimo 6 dígitos


### Uso:
- Se digitar um email válido e uma senha válida o login é feito com sucesso como atendente

    ### Acesso médico:

    Se digitar essas credenciais:
    ```json
        {
            "email": "medico@gmail.com",
            "senha": "medico123"
        }
    ```

    o login vai ser validado como o usuário sendo médico. Sendo assim ele pode acessar a tela de consulta que é exclusiva para o médico


### Validação de autenticação
As telas quem complementam o dashboard, descritas abaixo só abrem se o houver um usuário logado

- /dashboard
- /dashboard/agendamentos
- /dashboard/area-do-paciente
- /dashboard/consulta-medica

