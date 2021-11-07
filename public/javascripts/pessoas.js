import  {GetPessoas} from "./GetFunctions.js"

window.onload = async function () {
    let pessoas = await GetPessoas()
    let html = "";
    for (let pessoa of pessoas) {
      html += `<section>
            <h2>${pessoa.pessoa_nome}</h2>
            <h4> Email: ${pessoa.pessoa_email}</h4>
            </section>`;
    }
    document.getElementById("pessoas").innerHTML = html;

};
