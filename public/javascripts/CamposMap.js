import {GetCampos} from "./GetFunctions.js"
var mymap;
var monumetos = [];  
var campoId;

window.onload = async function () {

  let campos = await GetCampos()
  mymap = L.map("mapid").setView([38.70710400620239, -9.14669945214935], 7);


  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1Ijoiam9hcGxheTM5MDEiLCJhIjoiY2t2NnV3YTFhMDY0NTJwbWd5bHdhZXNudyJ9.aw6z7vHILLBavx1LCxLnrw",
    }
  ).addTo(mymap);


  for(let campo of campos){
    if (campo.campo_lat){
      var marker = L.marker([campo.campo_lat , campo.campo_long]).addTo(mymap);
      monumetos.push({campo: campo, marker: marker});
      campo.marker = marker;
      }
  }

};
