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
    sessionStorage.setItem("PessoaId", pessoa.pessoa_id);
    window.location = "pessoaProfile.html";
  } catch (err) {
    document.getElementById("msg").innerText = err.responseJSON.msg;
  }
}