var pool = require("./connection");

module.exports.registerPessoa = async function (
  nome,
  morada,
  dtnasc,
  genero,
  email,
  pass,
  tlm
) {
  try {
    var sql = "SELECT * FROM pessoa WHERE pessoa_email =?";
    let result = await pool.query(sql, [email]);
    if (result.length > 0)
      return { status: 401, result: { msg: "Já está registado" } };
    else {
      var sql = 'INSERT INTO pessoa (pessoa_nome, pessoa_morada, pessoa_dtnasc, pessoa_genero, pessoa_email,pessoa_pass,pessoa_tlm) VALUES (?,?,?,?,?,?,?)';
      let result = await pool.query(sql, [
        nome,
        morada,
        dtnasc,
        genero,
        email,
        pass,
        tlm,
      ])
      return { status: 200, result: { msg: "registado com sucesso" } };;
    }
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.loginPessoa = async function (email, pass) {
  try {
    let sql = "SELECT pessoa.pessoa_id, admin.admin_id from pessoa left JOIN admin ON pessoa.pessoa_id = admin.pessoa_id Where pessoa.pessoa_email = ? AND pessoa.pessoa_pass = ? ";
    let result = await pool.query(sql, [email, pass]);
    if (result.length > 0) return { status: 200, result: result[0] };
    else return { status: 401, result: { msg: "Wrong email or password" } };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.aceitarMonitor = async function (monitorId) {
  try {
    let sql = "UPDATE monitor_insc SET cv = 1 WHERE pessoa_id = ?";
    let result = await pool.query(sql, [monitorId]);
    let pedido = result;
    return { status: 200, result: pedido };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

<<<<<<< HEAD
module.exports.aceitarMonitor = async function (monitorId) {
  try {
    let sql = "UPDATE monitor_insc SET cv = 1 WHERE pessoa_id = ?";
    let result = await pool.query(sql, [monitorId]);
    let pedido = result;
    return { status: 200, result: pedido };
=======
module.exports.pedidosMonitor = async function () {
  try {
    let sql = "SELECT pessoa.pessoa_nome, pessoa.pessoa_id from pessoa INNER JOIN monitor_insc ON pessoa.pessoa_id = monitor_insc.pessoa_id AND monitor_insc.cv = 0";
    let result = await pool.query(sql);
    let pedidos = result;
    return { status: 200, result: pedidos };
>>>>>>> main
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.gerirMonitor = async function (semana, monitor, campo) {
  try {
<<<<<<< HEAD
    let sql = "SELECT pessoa.pessoa_nome, pessoa.pessoa_id from pessoa INNER JOIN monitor_insc ON pessoa.pessoa_id = monitor_insc.pessoa_id AND monitor_insc.cv = 0";
    let result = await pool.query(sql);
    let pedidos = result;
    return { status: 200, result: pedidos };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.gerirMonitor = async function (semana, monitor, campo) {
  try {
=======
>>>>>>> main
    let sql = `INSERT INTO campo_semana (semana_id, monitor_id, campo_id) values (?,?,?)`;
    let result = await pool.query(sql, [semana, monitor, campo]);
    return { status: 200, result: { msg: "Pedido efectuado com sucesso" } };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.pedirMonitor = async function (PessoaId) {
  try {
    let sql = "INSERT INTO monitor_insc (pessoa_id, cv) values (?,0)";
    let result = await pool.query(sql, [PessoaId]);
    return { status: 200, result: { msg: "Pedido efectuado com sucesso" } };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

<<<<<<< HEAD
module.exports.reservaPessoa = async function (campoId , PessoaId) {
  try {
    let sql = "SELECT * from inscricao WHERE campo_id = ? and pessoa_id = ?"
    let result = await pool.query(sql, [campoId , PessoaId]);
    if (result.length>0)
    return { status: 401, result: { msg: "Já está inscrito" } };
    else {
    let sql = "INSERT INTO inscricao (campo_id, pessoa_id) values (?,?)";
    let result = await pool.query(sql, [campoId , PessoaId]);
=======
module.exports.reservaPessoa = async function (campoId , PessoaId, semana) {
  try {
    let sql = "SELECT * from inscricao WHERE campo_id = ? and pessoa_id = ? and semana_id = ?"
    let result = await pool.query(sql, [campoId , PessoaId, semana]);
    if (result.length>0)
    return { status: 401, result: { msg: "Já está inscrito" } };
    else {
    let sql = "INSERT INTO inscricao (campo_id, pessoa_id, semana_id) values (?,?,?)";
    let result = await pool.query(sql, [campoId , PessoaId, semana]);
>>>>>>> main
    return { status: 200, result: { msg: "Inscrição efectuada com sucesso" } };
    } 
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.GetProfileById = async function(PessoaId) {
    try {
        let sql = "select * from pessoa where pessoa_id = ?";
        let result = await pool.query(sql,[PessoaId]);
        if (result.length > 0)  
            return {status: 200, result: result[0] };
        else return {status: 404, result: {msg: "Pessoa not found!"}};
    } catch(err) {
        console.log(err);
        return {status:500, result: err};
    }
};  

module.exports.GetAdminProfileById = async function(AdminId) {
  try {
      let sql = "SELECT * from pessoa INNER JOIN admin ON pessoa.pessoa_id = admin.pessoa_id AND admin.admin_id = ?";
      let result = await pool.query(sql,[AdminId]);
      if (result.length > 0)  
          return {status: 200, result: result[0] };
      else return {status: 404, result: {msg: "Pessoa not found!"}};
  } catch(err) {
      console.log(err);
      return {status:500, result: err};
  }
};  

module.exports.getAllSemanas = async function () {
  try {
    let sql = "Select * from semana";
    let result = await pool.query(sql);
    let semana = result;
    return { status: 200, result: semana };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllMonitores = async function () {
  try {
    let sql = "SELECT pessoa.pessoa_nome, monitor_insc.monitor_id from pessoa INNER JOIN monitor_insc ON pessoa.pessoa_id = monitor_insc.pessoa_id AND monitor_insc.cv = 1;";
    let result = await pool.query(sql);
    let monitor = result;
    return { status: 200, result: monitor };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllAdmins = async function () {
  try {
    let sql = "Select * from admin";
    let result = await pool.query(sql);
    let admin = result;
    return { status: 200, result: admin };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllCentros = async function () {
  try {
    let sql = "Select * from centro_saude";
    let result = await pool.query(sql);
    let centro = result;
    return { status: 200, result: centro };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllCentrosProximos = async function (lat, long) {
  try {
    let sql = `SELECT * FROM centro_saude WHERE ST_Distance_Sphere(coords, ST_GeomFromText("POINT(?  ?)", 4326 )) <=(60*60);`;
    let result = await pool.query(sql, [parseFloat(lat), parseFloat(long)]);
    let centro = result;
    return { status: 200, result: centro };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllPessoas = async function () {
  try {
    let sql = "Select * from pessoa";
    let result = await pool.query(sql);
    let pessoa = result;
    return { status: 200, result: pessoa };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
};

module.exports.getAllCampos = async function () {
  try {
    let sql = "Select * from campo";
    let result = await pool.query(sql);
    let campo = result;
    return { status: 200, result: campo };
  } catch (err) {
    console.log(err);
    return { status: 500, result: err };
  }
}

module.exports.getCampoById = async function(id) {
  try {
      let sql = "select * from campo where campo_id = ?";
      let result = await pool.query(sql,[id]);
      if (result.length > 0)  
          return {status: 200, result: result[0] };
      else return {status: 404, result: {msg: "Campo not found!"}};
  } catch(err) {
      console.log(err);
      return {status:500, result: err};
  }

} 

module.exports.getCampoAtivs = async function(id) {
  try {
      let sql = "SELECT ativ.ativ_nome, ativ.ativ_disc FROM ativ INNER JOIN ativ_campo ON ativ.ativ_id = ativ_campo.ativ_id AND ativ_campo.campo_id = ?";
      let result = await pool.query(sql,[id]);
      return {status: 200, result: result };
  } catch(err) {
      console.log(err);
      return {status:500, result: err};
  }

} 
