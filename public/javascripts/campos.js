var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");

window.onload = async function () {
  try {
    let campos = await $.ajax({
      url: "/api/campos",
      method: "get",
      dataType: "json",
    });

    let html10 = `<ul class="navbar-nav ms-auto">
      <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/campos.html"
              >CAMPOS</a
          >
      </li>
      <ul class="navbar-nav ms-auto">
      <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/CamposMap.html"
              >CAMPOS MAP</a
          >
      </li>
      <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/Contactos.html"
              >CONTACTOS</a
          >
      </li>`
      
      if(PessoaId){
          html10 += `
          <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/pessoaProfile.html"
              >PERFIL</a
          >
      </li>
      <li class="nav-item mx-3">
          <a class="nav-link text-white" onclick="logout()">LOGOUT
      </li>`
      }
      else if (AdminId){
          html10 += `
          <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/adminProfile.html"
              >PERFIL</a
          >
      </li>
      <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/gerirMonitor.html"
              >GERIR MONITORES</a
          >
      </li>
      <li class="nav-item mx-3">
          <a class="nav-link text-white" onclick="logout()">LOGOUT
      </li>`
      }
      else{
          html10 += `
          </li>
          <li class="nav-item mx-3">
              <a class="nav-link text-white" href="/login.html"
                  >LOGIN</a
              >
          </li>
          <li class="nav-item mx-3">
              <a class="nav-link text-white" href="/register.html"
                  >REGISTAR</a
              >
          </li>
      </ul>`
      }
      
          document.getElementById("navbarNav").innerHTML = html10;

    let html = "";
    for (let campo of campos) {
      html += `<section onclick="toCampo(${campo.campo_id})">
            <h3>${campo.campo_nome}</h3>
        </section>`;
    }
    document.getElementById("campos").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

function toCampo(id) {
  sessionStorage.setItem("campoId", id);
  window.location = "campo.html";
}

