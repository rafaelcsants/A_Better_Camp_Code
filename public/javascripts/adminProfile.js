window.onload = async function() {
    try {
        let AdminId = sessionStorage.getItem("AdminId");
        let pessoa = await $.ajax({
            url: `/api/admin/${AdminId}`,
            method: "get",
            dataType: "json"
        })
        let html = `<section>
        <h3>${pessoa.pessoa_nome}</h3>
    </section>`;
        document.getElementById("perfil").innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}

function toPedidosMonitor() {
    window.location = "pedidosMonitor.html"
}
