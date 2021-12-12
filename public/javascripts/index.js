var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");
window.onload = async function () {
    let html = `<ul class="navbar-nav ms-auto">
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
        html += `
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
        html += `
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
        html += `
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

    let html1 = `<h1>VENHA VISITAR-NOS!</h1>
    Melhore a sua saúde física e mental.
    <a href="/register.html">Inscreva-se aqui!</a>`

    document.getElementById("navbarNav").innerHTML = html;
    document.getElementById("home_text").innerHTML = html1;
}

async function logout (){
    sessionStorage.removeItem("PessoaId");
    sessionStorage.removeItem("AdminId");
    sessionStorage.removeItem("monitorId");
    location.reload(true);
}