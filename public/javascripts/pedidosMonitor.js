window.onload = async function () {
try {
    let pedidos = await $.ajax({
      url: "/api/admin/pedidosMonitor",
      method: "get",
      dataType: "json",
    });
    let html = "";
    for (let monitor_insc  of pedidos) {
      html += `<section>
            <h2>${monitor_insc.pessoa_id}</h2>
            <p><input type="button" onclick="aceitarMonitor(  )" value="Aceitar o monitor"></p>
        </section>`;
    }
  } catch (err) {
    console.log('hi');
    document.getElementById("msg").innerText = err.responseJSON.msg;
  }
}

async function aceitarMonitor(){
    sessionStorage.setItem("monitorId", monitor_insc.pessoa_id);
    try {
        let obj = {moniotrId}
        let pessoa = await $.ajax({
          url: "/api/admin/aceitarMonitor",
          method: "put",
          dataType: "json",
          data: JSON.stringify(obj),
          contentType: "application/json",
        });
      } catch (err) {
        document.getElementById("msg").innerText = err.responseJSON.msg;
      }
    }

