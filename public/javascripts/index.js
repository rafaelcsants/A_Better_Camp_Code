var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");
window.onload = async function () {
<<<<<<< HEAD
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
=======
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
>>>>>>> main
}

async function logout (){
    sessionStorage.removeItem("PessoaId");
    sessionStorage.removeItem("AdminId");
    sessionStorage.removeItem("monitorId");
    location.reload(true);
<<<<<<< HEAD
}
=======
}
>>>>>>> main
