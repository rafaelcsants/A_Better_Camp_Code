window.onload = async function () {
  try {
    let campos = await $.ajax({
      url: "/api/campos",
      method: "get",
      dataType: "json",
    });
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
