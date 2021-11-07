var campoId;
window.onload = async function() {
    try {
        campoId = sessionStorage.getItem("campoId");

        let campo = await $.ajax({
            url: "/api/campos/"+campoId,
            method: "get",
            dataType: "json"
        });
        document.getElementById("campo").innerHTML= `${campo.campo_nome}`;
        
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

