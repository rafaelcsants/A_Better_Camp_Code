var latlong;
var map;
var lat;
var long;
var PessoaId = sessionStorage.getItem("PessoaId");
var AdminId = sessionStorage.getItem("AdminId");
var monitor = sessionStorage.getItem("monitorId");

window.onload = async function () {
    L.mapquest.key = "8MkD4JpHn8zPE0rGBGyuloII1ec4Hnt0";

    let html = "";
    let centros = await $.ajax({
        url: `/api/centros/`,
        method: "get",
        dataType: "json",
    });
    for (let centro_saude of centros)
        html += `<div class="contactos">
  <h4 class="fw-bold">${centro_saude.nome}</h4>
  <h6><b>Telefone:</b> ${centro_saude.centro_tlm}</h6>
  <h6><b>Morada:</b> ${centro_saude.centro_morada}</h6><br>
  </div>`;

    document.getElementById("centros").innerHTML = html;

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
      </li>`;

    if (PessoaId) {
        html10 += `
          <li class="nav-item mx-3">
          <a class="nav-link text-white" href="/pessoaProfile.html"
              >PERFIL</a
          >
      </li>
      <li class="nav-item mx-3">
          <a class="nav-link text-white" onclick="logout()">LOGOUT
      </li>`;
    } else if (AdminId) {
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
      </li>`;
    } else {
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
      </ul>`;
    }

    document.getElementById("navbarNav").innerHTML = html10;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            latlong = [position.coords.latitude, position.coords.longitude];
            lat = position.coords.latitude;
            long = position.coords.longitude;

            map = L.mapquest.map("map", {
                center: latlong,
                layers: L.mapquest.tileLayer("map"),
                zoom: 13,
            });

            let obj = { lat, long };
            console.log(obj);
            let centros = await $.ajax({
                url: `/api/centros/proximos?lat=${lat}&long=${long}`,
                method: "get",
                dataType: "json",
            });

            if (centros.length >= 1) {
                for (let centro of centros) {
                    L.marker([centro.coords.y, centro.coords.x], {
                        icon: L.mapquest.icons.marker({
                            primaryColor: "#22407F",
                            secondaryColor: "#3B5998",
                            shadow: true,
                            size: "md",
                            symbol: "C",
                        }),
                    })
                        .bindPopup(centro.nome)
                        .addTo(map);
                }
            } else {
                alert("No contact centers nearby!");
            }
        });
    } else {
        alert("Geolocation not supported");
    }
};
