var campoId;
var PessoaId;
<<<<<<< HEAD
=======
var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");

>>>>>>> main
window.onload = async function() {
    try {
        campoId = sessionStorage.getItem("campoId");

        let campo = await $.ajax({
            url: "/api/campos/"+campoId,
            method: "get",
            dataType: "json"
        });
<<<<<<< HEAD
        let html1 = `<section>
        <h2>${campo.campo_nome}</h2>
        <p><input type="button" onclick="reservarCampo()" value="Inscrever"></p></section>`;
        
        document.getElementById("campo").innerHTML= html1;
=======

     let semanas = await $.ajax({
        url: "/api/semana",
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
        
        let html3 = `<h1><b>${campo.campo_nome}</b></h1>`
        let html1 = ""
        let html = ""
        if(PessoaId || AdminId || monitor){
        for (let semana of semanas) {
            html +=
            `<option value = ${semana.semana_id}>` +
            new Date(semana.semana_start).toLocaleDateString("pt-PT") +
            `</option>`
        }
            
            html1 += `<section>
            <p><input type="button" onclick="reservarCampo()" value="Inscrever"></p></section>`;

            document.getElementById("semana").innerHTML= `<select name="semana" id="semana">` + html + `</select>`;
    }
        else{
            html1 += `<section> <p><input type="button" onclick="toLogin()" value="Inscrever"></p></section>`;
        }

        document.getElementById("campo").innerHTML= html1;
        document.getElementById("nome").innerHTML= html3;

>>>>>>> main
        
        let ativs = await $.ajax({
            url: `/api/campos/${campoId}/ativ`,
            method: "get",
            dataType: "json"
        });
        let html2="";
        for (let ativ of ativs)
            html2 += `<section>
                <h2>${ativ.ativ_nome}</h2>
                <h3>${ativ.ativ_disc}</h3>
                </section>`;

        document.getElementById("ativs").innerHTML =  html2;
    } catch(err) {
        console.log(err);
    }
}

async function reservarCampo(campoId, PessoaId){
    try {
<<<<<<< HEAD
        PessoaId = sessionStorage.getItem("PessoaId");
        campoId = sessionStorage.getItem("campoId");
        let obj = {campoId, PessoaId}
=======
        semana = document.getElementById("semana").value;
        console.log(semana);
        PessoaId = sessionStorage.getItem("PessoaId");
        campoId = sessionStorage.getItem("campoId");
        let obj = {campoId, PessoaId, semana}
>>>>>>> main
        let reservas = await $.ajax({
          url: `/api/campos/${campoId}/reservas`,
          method: "post",
          dataType: "json",
          data: JSON.stringify(obj),
          contentType: "application/json",
    });
<<<<<<< HEAD
=======
        alert("Reserva efetuada com sucesso");

>>>>>>> main
      } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
      }
    }

<<<<<<< HEAD
=======
    async function toLogin(){
    try{
        window.location = "login.html";
    }
    catch (err) {
    document.getElementById("msg").innerText = err.responseJSON.msg;
  }
};

>>>>>>> main


