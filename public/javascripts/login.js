async function login() {
  try {
    let obj = {
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    };
    let pessoa = await $.ajax({
      url: "/api/pessoas/login",
      method: "post",
      dataType: "json",
      data: JSON.stringify(obj),
      contentType: "application/json",
    });
    if(pessoa.admin_id != null){
      sessionStorage.setItem("AdminId", JSON.stringify(pessoa.admin_id));
      window.location = "adminProfile.html";

    }
    else if(pessoa.admin_id == null){
      sessionStorage.setItem("PessoaId", JSON.stringify(pessoa.pessoa_id));
      window.location = "pessoaProfile.html";
    }
  } catch (err) {
    document.getElementById("msg").innerText = err.responseJSON.msg;
  }
}

