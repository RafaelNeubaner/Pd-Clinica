document.addEventListener('DOMContentLoaded', function() {
  // Máscaras de input
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  
  // Máscara de CPF (000.000.000-00)
  if (cpfInput) {
    cpfInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
      }
    });
  }
  
  // Máscara de Telefone ((00) 00000-0000)
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        e.target.value = value;
      }
    });
  }
  
  // Máscara de CEP (00000-000)
  if (cepInput) {
    cepInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 8) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
      }
    });
    
    // Buscar endereço pelo CEP
    cepInput.addEventListener('blur', function() {
      const cep = this.value.replace(/\D/g, '');
      
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            if (!data.erro) {
              document.getElementById('rua').value = data.logradouro || '';
              document.getElementById('cidade').value = data.localidade || '';
            }
          })
          .catch(error => {
            console.error('Erro ao buscar CEP:', error);
          });
      }
    });
  }
  
  // Salvar formulário
  const btnSalvar = document.getElementById('btnSalvar');
  
  if (btnSalvar) {
    btnSalvar.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Coletar dados do formulário
      const dadosPerfil = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        genero: document.getElementById('genero').value,
      };
      
      const dadosEndereco = {
        cep: document.getElementById('cep').value,
        cidade: document.getElementById('cidade').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
      };
      
      // Validação básica
      const formPerfil = document.getElementById('formPerfil');
      const formEndereco = document.getElementById('formEndereco');
      
      if (!formPerfil.checkValidity() || !formEndereco.checkValidity()) {
        formPerfil.reportValidity();
        formEndereco.reportValidity();
        return;
      }
      
      // Aqui você enviaria os dados para o servidor
      console.log('Dados do perfil:', dadosPerfil);
      console.log('Dados do endereço:', dadosEndereco);
      
      // Feedback visual
      this.textContent = 'Salvando...';
      this.disabled = true;
      
      // Simular salvamento (remover em produção)
      setTimeout(() => {
        this.textContent = 'Salvo!';
        setTimeout(() => {
          this.textContent = 'Salvar';
          this.disabled = false;
        }, 1500);
      }, 1000);
    });
  }
});
