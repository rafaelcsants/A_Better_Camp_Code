import { GetCampos } from "./GetFunctions.js";
var latlong;
var map;
var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");

window.onload = async function () {
  let campos = await GetCampos();

  L.mapquest.key = "8MkD4JpHn8zPE0rGBGyuloII1ec4Hnt0";
  let html = "<div class='my-4'>"
  for (let campo of campos) {
    html += `<h2>${campo.campo_nome}</h2>
              <h4 class='fw-light'>${campo.campo_disc}</h4>
    </div>`;
  }  

    document.getElementById("campos").innerHTML = html;
  
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latlong = [position.coords.latitude, position.coords.longitude];

      map = L.mapquest.map("map", {
        center: latlong,
        layers: L.mapquest.tileLayer("map"),
        zoom: 10,
      });

      // obterDirecoes(38.79770117227494, -9.432511769793297);

      for (let campo of campos) {
        
        console.log(campo.campo_lat,campo.campo_long)
        L.marker([campo.campo_lat, campo.campo_long], {
          icon: L.mapquest.icons.marker({
            primaryColor: "#22407F",
            secondaryColor: "#3B5998",
            shadow: true,
            size: "md",
            symbol: "C",
          }),
        })
          .bindPopup(popUp)
          .addTo(map);
      } 
    });
  } else {
    alert("Geolocation not supported");
  }
};

function popUp(layer) {
  let btn = document.createElement("button");
  btn.innerHTML = "Direcoes";
  btn.onclick = function (){
    L.mapquest
      .directions()
      .route({
        start: latlong,
        end: layer._latlng,
      })
  }
  
    return btn
}
