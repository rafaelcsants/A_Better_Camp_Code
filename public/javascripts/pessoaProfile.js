var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");

window.onload = async function () {
  try {

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

    let pessoa = await $.ajax({
      url: `/api/pessoas/${PessoaId}`,
      method: "get",
      dataType: "json",
    });
    let dtnasc = new Date(pessoa.pessoa_dtnasc).toLocaleDateString("pt-PT");
    let html = `<div class="card text-center shadow" style="width: 25rem;">
    <div class="card-body">
          <h5 class="card-title text-capitalize">${pessoa.pessoa_nome}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Data de Nascimento: ${dtnasc}</h6>
          <hr/>
          <p class="card-text"><b>Morada:</b> ${pessoa.pessoa_morada}</p>
          <p class="card-text"><b>Email:</b> ${pessoa.pessoa_email}</p>
          <p class="card-text"><b>Telefone:</b> ${pessoa.pessoa_tlm}</p>
          <input type="button" onclick="pedirMonitor(  )" value="Pedir para ser monitor">
          <p id="msg"></p>
        </div>
      </div>`;

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
  }
}


async function logout (){
    sessionStorage.removeItem("PessoaId");
    sessionStorage.removeItem("AdminId");
    sessionStorage.removeItem("monitorId");
    window.location = "index.html";
}