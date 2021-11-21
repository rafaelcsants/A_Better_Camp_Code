var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");
window.onload = async function () {
    let html = `<a href="CamposMap.html">Campos Map</a> <br />`

    if(PessoaId){
        html += `
        <a href="pessoaProfile.html">Perfil</a> <BR />
        <section onclick="logout()">Log Out</section>`
    }
    else if (AdminId){
        html += `<a href="adminProfile.html">Perfil</a> <BR />
                 <a href="gerirMonitor.html">Gerir Monitores</a> <BR />
        <section onclick="logout()">Log Out</section> `
    }
    else{
        html += `
        <a href="adminLogin.html">ADMIN</a>
        <a href="login.html">LOGIN</a> <br />
        <a href="register.html">REGISTER</a> <BR />`

    }

    html += `<a href="campos.html">CAMPOS</a> <BR />
    <a href="#Contacts">Contacts</a>`

    document.getElementById("esquerda").innerHTML = html;
}

async function logout (){
    sessionStorage.removeItem("PessoaId");
    sessionStorage.removeItem("AdminId");
    sessionStorage.removeItem("monitorId");
    location.reload(true);
}
