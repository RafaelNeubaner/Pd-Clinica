$(document).ready(function () {
  // Alternar entre Perfil e Consultas
  $(".sidebar-nav .nav-link").on("click", function (e) {
    e.preventDefault();

    // Remove active de todos os links
    $(".sidebar-nav .nav-link").removeClass("active");

    // Adiciona active ao link clicado
    $(this).addClass("active");

    // Pega a seção alvo
    const targetSection = $(this).data("section");

    // Esconde todas as seções
    $(".content-section").hide();

    // Mostra a seção alvo
    if (targetSection === "perfil") {
      $("#secaoPerfil").show();
    } else if (targetSection === "consultas") {
      $("#secaoConsultas").show();
    }
  });

  // Atualizar nome do paciente quando digitar nome ou sobrenome
  $("#nome, #sobrenome").on("input", function () {
    const nome = $("#nome").val().trim();
    const sobrenome = $("#sobrenome").val().trim();
    const nomeCompleto = (nome + " " + sobrenome).trim();
    
    if (nomeCompleto) {
      $("#nomePaciente").text("Paciente: " + nomeCompleto);
    } else {
      $("#nomePaciente").text("Paciente:");
    }
  });

  // Filtros de consultas
  $(".btn-group button").on("click", function () {
    $(".btn-group button").removeClass("active");
    $(this).addClass("active");

    const filter = $(this).data("filter");

    if (filter === "todas") {
      $(".consultaItem").show();
    } else if (filter === "agendadas") {
      $(".consultaItem").hide();
      $('.consultaItem[data-status="agendada"]').show();
    } else if (filter === "concluidas") {
      $(".consultaItem").hide();
      $('.consultaItem[data-status="concluida"]').show();
    }
  });
});