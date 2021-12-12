var campoId;
var PessoaId;
window.onload = async function() {
    try {
        campoId = sessionStorage.getItem("campoId");

        let campo = await $.ajax({
            url: "/api/campos/"+campoId,
            method: "get",
            dataType: "json"
        });
        let html1 = `<section>
        <h2>${campo.campo_nome}</h2>
        <p><input type="button" onclick="reservarCampo()" value="Inscrever"></p></section>`;
        
        document.getElementById("campo").innerHTML= html1;
        
        let ativs = await $.ajax({
            url: `/api/campos/${campoId}/ativ`,
            method: "get",
            dataType: "json"
        });
        let html="";
        for (let ativ of ativs)
            html += `<section>
                <h2>${ativ.ativ_nome}</h2>
                <h3>${ativ.ativ_disc}</h3>
                </section>`;

        document.getElementById("ativs").innerHTML =  html;
    } catch(err) {
        console.log(err);
    }
}

async function reservarCampo(campoId, PessoaId){
    try {
        PessoaId = sessionStorage.getItem("PessoaId");
        campoId = sessionStorage.getItem("campoId");
        let obj = {campoId, PessoaId}
        let reservas = await $.ajax({
          url: `/api/campos/${campoId}/reservas`,
          method: "post",
          dataType: "json",
          data: JSON.stringify(obj),
          contentType: "application/json",
    });
      } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
      }
    }



