async function GetPessoas () {
    try {
        let pessoas = await $.ajax({
          url: "/api/pessoas",
          method: "get",
          dataType: "json",
        })
        return pessoas; 
    } catch (err) {
        console.log(err);
      }
}

async function GetCampos () {
  try {
      let campos = await $.ajax({
        url: '/api/campos',
        method: 'get',
        dataType: 'json',
      })
      return campos; 
  } catch (err) {
      console.log(err);
    }
}


export {GetPessoas, GetCampos};

