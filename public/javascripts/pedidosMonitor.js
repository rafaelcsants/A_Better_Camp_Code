window.onload = async function () {
try {
    let AdminId = sessionStorage.getItem("AdminId");
    let pedidos = await $.ajax({
      url: `/api/admin/${AdminId}/pedidosMonitor`,
      method: "get",
      dataType: "json",
    });
    let html = "<ul class='list-group my-3'>";
    for (let pessoa  of pedidos) {
      html += `<li class="list-group-item d-flex justify-content-between align-items-center px-5">
            <h2>${pessoa.pessoa_nome}</h2>
            <p><input type="button" onclick="aceitarMonitor(${pessoa.pessoa_id})" value="Aceitar o monitor" class="btn btn-success"></p>
        </li>`;
    }
    html += "</ul>";
    document.getElementById("pedidos").innerHTML = html;
  } catch (err) {
  }
}

async function aceitarMonitor(pessoa_id){
    sessionStorage.setItem("monitorId", pessoa_id);
    try {
        let obj = {pessoa_id}
        let pessoa = await $.ajax({
          url: "/api/admin/aceitarMonitor",
          method: "put",
          dataType: "json",
          data: JSON.stringify(obj),
          contentType: "application/json",
        });
        location.reload(true);
      } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
      }
    }

