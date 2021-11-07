async function register() {
  try {
    let inputData = {
      nome: document.getElementById("nome").value,
      morada: document.getElementById("morada").value,
      dtnasc: document.getElementById("dtnasc").value,
      genero: document.getElementById("genero").value,
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
      tlm: document.getElementById("tlm").value,
    };

    if(inputData.nome == '' ||inputData.morada == ''||inputData.dtnasc == ''||inputData.genero == ''||inputData.email == ''||inputData.pass == ''||inputData.tlm == ''){
      throw Error ('Preencha todos os campos')
    }
      
      let pessoa = await $.ajax({
      url: "/api/pessoas/register",
      method: "post",
      dataType: "json",
      data: JSON.stringify(inputData),  
      contentType: "application/json",
    });
    sessionStorage.setItem("PessoaId", pessoa.pessoa_id);
    window.location = "pessoaProfile.html";
  } catch (err) {
    document.getElementById("msg").innerText = err.message;
  }
  }
