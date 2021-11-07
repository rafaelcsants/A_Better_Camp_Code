var PessoaId = sessionStorage.getItem("PessoaId");

window.onload = async function () {
  try {
    let pessoa = await $.ajax({
      url: `/api/pessoas/${PessoaId}`,
      method: "get",
      dataType: "json",
    });
    let html = `<section>
        <h3>${pessoa.pessoa_nome}</h3> </section>`;

    document.getElementById("perfil").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

async function pedirMonitor() {
  try {
    let obj = {PessoaId}
    let pessoa = await $.ajax({
      url: "/api/pessoas/pedirMonitor",
      method: "post",
      dataType: "json",
      data: JSON.stringify(obj),
      contentType: "application/json",
    });
  } catch (err) {
    document.getElementById("msg").innerText = err.responseJSON.msg;
  }
}
